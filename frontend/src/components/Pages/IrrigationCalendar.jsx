import React, { useState, useEffect } from 'react';
import {
  IconDroplet,
  IconTemperature,
  IconPlant,
  IconSoil,
  IconCalendarStats,
  IconCloudRain,
  IconRuler,
  IconInfoCircle
} from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Mock data for irrigation records
const mockIrrigationData = {
  // Past records
  '2024-07-01': {
    waterUsed: 1200, // liters
    location: 'North Field',
    temperature: 32,
    humidity: 65,
    rainfall: 0,
    landArea: 2.5, // acres
    vegetationType: 'Row Crops',
    cropType: 'Wheat',
    soilPH: 6.8
  },
  '2024-07-03': {
    waterUsed: 950,
    location: 'South Field',
    temperature: 30,
    humidity: 70,
    rainfall: 5, // mm
    landArea: 1.8,
    vegetationType: 'Row Crops',
    cropType: 'Rice',
    soilPH: 7.2
  },
  '2024-07-05': {
    waterUsed: 1500,
    location: 'East Field',
    temperature: 34,
    humidity: 60,
    rainfall: 0,
    landArea: 3.0,
    vegetationType: 'Orchard',
    cropType: 'Mango',
    soilPH: 6.5
  },
  '2024-07-08': {
    waterUsed: 800,
    location: 'West Field',
    temperature: 29,
    humidity: 75,
    rainfall: 10,
    landArea: 2.0,
    vegetationType: 'Row Crops',
    cropType: 'Corn',
    soilPH: 7.0
  },
  '2024-07-10': {
    waterUsed: 1100,
    location: 'North Field',
    temperature: 31,
    humidity: 68,
    rainfall: 2,
    landArea: 2.5,
    vegetationType: 'Row Crops',
    cropType: 'Wheat',
    soilPH: 6.8
  }
};

// Weather forecast for future dates (for water usage suggestions)
const weatherForecast = {
  '2024-07-15': { temperature: 33, humidity: 62, rainfall: 0 },
  '2024-07-16': { temperature: 34, humidity: 60, rainfall: 0 },
  '2024-07-17': { temperature: 32, humidity: 65, rainfall: 5 },
  '2024-07-18': { temperature: 30, humidity: 70, rainfall: 15 },
  '2024-07-19': { temperature: 29, humidity: 75, rainfall: 8 },
  '2024-07-20': { temperature: 31, humidity: 68, rainfall: 0 }
};

// Function to calculate suggested water usage based on environmental factors
const calculateWaterSuggestion = (cropType, landArea, temperature, humidity, rainfall) => {
  // Base water requirement per acre (liters)
  const baseWaterRequirements = {
    'Wheat': 4000,
    'Rice': 6000,
    'Corn': 5000,
    'Mango': 5500,
    'Cotton': 4500,
    'Sugarcane': 7000,
    'Default': 5000
  };

  // Get base requirement for the crop or use default
  const baseRequirement = baseWaterRequirements[cropType] || baseWaterRequirements['Default'];

  // Adjust for temperature (higher temp = more water)
  const tempFactor = 1 + (Math.max(0, temperature - 25) * 0.04);

  // Adjust for humidity (lower humidity = more water)
  const humidityFactor = 1 + ((100 - humidity) * 0.01);

  // Adjust for rainfall (more rain = less water needed)
  const rainfallFactor = Math.max(0.2, 1 - (rainfall * 0.05));

  // Calculate total water needed
  let waterNeeded = baseRequirement * landArea * tempFactor * humidityFactor * rainfallFactor;

  // Round to nearest 50 liters
  waterNeeded = Math.round(waterNeeded / 50) * 50;

  return {
    waterNeeded,
    factors: {
      temperature: `${tempFactor.toFixed(2)}x (${temperature}°C)`,
      humidity: `${humidityFactor.toFixed(2)}x (${humidity}%)`,
      rainfall: `${rainfallFactor.toFixed(2)}x (${rainfall}mm)`,
      cropFactor: `Base: ${baseRequirement}L/acre for ${cropType}`,
      landArea: `${landArea} acres`
    }
  };
};

const IrrigationCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarDays, setCalendarDays] = useState([]);
  const [irrigationRecord, setIrrigationRecord] = useState(null);
  const [waterSuggestion, setWaterSuggestion] = useState(null);

  // Generate calendar days for the current month
  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Day of week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayIndex = firstDay.getDay();

    // Total days in the month
    const daysInMonth = lastDay.getDate();

    // Generate array of day objects
    const days = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({ day: '', date: null, hasRecord: false });
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateString = date.toISOString().split('T')[0];
      const hasRecord = dateString in mockIrrigationData;

      days.push({ day, date: dateString, hasRecord });
    }

    setCalendarDays(days);
  }, [currentMonth]);

  // Handle date selection
  const handleDateClick = (date) => {
    if (!date) return;

    setSelectedDate(date);

    // Check if there's an irrigation record for this date
    if (date in mockIrrigationData) {
      setIrrigationRecord(mockIrrigationData[date]);

      // Calculate water suggestion for the next irrigation
      const { cropType, landArea } = mockIrrigationData[date];

      // Find the next date in the forecast
      const forecastDates = Object.keys(weatherForecast).sort();
      const nextForecastDate = forecastDates.find(d => d > date);

      if (nextForecastDate) {
        const { temperature, humidity, rainfall } = weatherForecast[nextForecastDate];
        const suggestion = calculateWaterSuggestion(
          cropType,
          landArea,
          temperature,
          humidity,
          rainfall
        );

        setWaterSuggestion({
          date: nextForecastDate,
          ...suggestion,
          weather: weatherForecast[nextForecastDate]
        });
      }
    } else {
      setIrrigationRecord(null);

      // Check if this date is in the forecast
      if (date in weatherForecast) {
        // Use the last irrigation record as a reference
        const pastDates = Object.keys(mockIrrigationData).sort();
        const lastRecordDate = pastDates[pastDates.length - 1];

        if (lastRecordDate) {
          const { cropType, landArea } = mockIrrigationData[lastRecordDate];
          const { temperature, humidity, rainfall } = weatherForecast[date];

          const suggestion = calculateWaterSuggestion(
            cropType,
            landArea,
            temperature,
            humidity,
            rainfall
          );

          setWaterSuggestion({
            date,
            ...suggestion,
            weather: weatherForecast[date]
          });
        }
      } else {
        setWaterSuggestion(null);
      }
    }
  };

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Format month name
  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  // Render irrigation record details
  const renderIrrigationRecord = () => {
    if (!irrigationRecord) return null;

    return (
      <Card className="bg-white shadow-sm border-green-100 overflow-hidden">
        <CardHeader className="bg-green-50 border-b border-green-100">
          <CardTitle className="text-green-800 flex items-center gap-2">
            <IconDroplet className="text-green-600" />
            Irrigation Record
          </CardTitle>
          <CardDescription>
            {selectedDate} - {irrigationRecord.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <IconDroplet className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Water Used</p>
                  <p className="text-lg font-semibold text-gray-900">{irrigationRecord.waterUsed} liters</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <IconPlant className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Crop Type</p>
                  <p className="text-lg font-semibold text-gray-900">{irrigationRecord.cropType}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <IconSoil className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Soil pH</p>
                  <p className="text-lg font-semibold text-gray-900">{irrigationRecord.soilPH || 'Not recorded'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <IconTemperature className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Temperature</p>
                  <p className="text-lg font-semibold text-gray-900">{irrigationRecord.temperature}°C</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <IconCloudRain className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rainfall / Humidity</p>
                  <p className="text-lg font-semibold text-gray-900">{irrigationRecord.rainfall}mm / {irrigationRecord.humidity}%</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <IconRuler className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Land Area</p>
                  <p className="text-lg font-semibold text-gray-900">{irrigationRecord.landArea} acres</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  // Render water usage suggestion
  const renderWaterSuggestion = () => {
    if (!waterSuggestion) return null;

    return (
      <Card className="bg-white shadow-sm border-blue-100 overflow-hidden mt-4">
        <CardHeader className="bg-blue-50 border-b border-blue-100">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <IconCalendarStats className="text-blue-600" />
            Water Usage Suggestion
          </CardTitle>
          <CardDescription>
            For {waterSuggestion.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">Suggested Water Usage:</span>
              <span className="text-xl font-bold text-blue-600">{waterSuggestion.waterNeeded} liters</span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              Based on forecast: {waterSuggestion.weather.temperature}°C, {waterSuggestion.weather.humidity}% humidity, {waterSuggestion.weather.rainfall}mm rainfall
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <IconInfoCircle className="text-blue-500" />
              <span className="font-medium text-gray-700">Calculation Factors:</span>
            </div>
            <ul className="space-y-1 text-sm text-gray-600 pl-6 list-disc">
              <li>{waterSuggestion.factors.cropFactor}</li>
              <li>Land area: {waterSuggestion.factors.landArea}</li>
              <li>Temperature factor: {waterSuggestion.factors.temperature}</li>
              <li>Humidity factor: {waterSuggestion.factors.humidity}</li>
              <li>Rainfall factor: {waterSuggestion.factors.rainfall}</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Irrigation Calendar</h1>
          <p className="text-gray-600 mt-1">
            Track your irrigation history and get water usage recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-sm overflow-hidden">
              <CardHeader className="bg-green-50 border-b border-green-100 flex flex-row items-center justify-between p-4">
                <button
                  onClick={prevMonth}
                  className="p-1 rounded-full hover:bg-green-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <CardTitle className="text-green-800 text-center">
                  {monthName}
                </CardTitle>

                <button
                  onClick={nextMonth}
                  className="p-1 rounded-full hover:bg-green-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardHeader>

              <CardContent className="p-4">
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={index} className="text-center text-sm font-medium text-gray-500 py-1">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      onClick={() => day.date && handleDateClick(day.date)}
                      className={`
                        p-2 text-center rounded-md transition-colors cursor-pointer
                        ${!day.date ? 'text-gray-300 cursor-default' : 'hover:bg-green-50'}
                        ${day.hasRecord ? 'bg-green-100 text-green-800 font-medium' : ''}
                        ${day.date === selectedDate ? 'ring-2 ring-green-500 bg-green-50' : ''}
                        ${day.date in weatherForecast ? 'bg-blue-50 text-blue-800' : ''}
                      `}
                    >
                      {day.day}
                      {day.hasRecord && (
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto mt-1"></div>
                      )}
                      {!day.hasRecord && day.date in weatherForecast && (
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Irrigation Record</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Weather Forecast</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Irrigation details */}
          <div className="lg:col-span-2">
            {selectedDate ? (
              <div>
                {irrigationRecord ? renderIrrigationRecord() : (
                  <Card className="bg-white shadow-sm border-gray-100">
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-500">No irrigation record for {selectedDate}</p>
                    </CardContent>
                  </Card>
                )}

                {waterSuggestion && renderWaterSuggestion()}
              </div>
            ) : (
              <Card className="bg-white shadow-sm border-gray-100 h-full flex items-center justify-center">
                <CardContent className="p-6 text-center">
                  <IconCalendarStats className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Select a date to view irrigation details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrrigationCalendar;