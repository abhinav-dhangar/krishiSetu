import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconPlant, 
  IconCalendar, 
  IconChartBar, 
  IconCloudRain, 
  IconShoppingCart,
  IconInfoCircle,
  IconArrowRight,
  IconUser,
  IconLogout,
  IconSun,
  IconDroplet,
  IconTemperature,
  IconWind
} from '@tabler/icons-react';

const Dashboard = () => {
  // Mock data for demonstration
  const dashboardData = {
    weather: {
      temperature: '28°C',
      humidity: '65%',
      windSpeed: '12 km/h',
      condition: 'Sunny'
    },
    soilCondition: {
      status: 'Good',
      moisture: '65%',
      ph: '6.8',
      nutrients: 'Balanced'
    },
    irrigation: {
      lastIrrigation: '2 days ago',
      nextScheduled: 'Tomorrow',
      avgWaterUsage: '1200L/day'
    },
    tasks: {
      upcoming: 3,
      nextTask: 'Fertilizer Application',
      date: '2024-03-15',
      priority: 'high'
    },
    market: {
      wheat: { price: '₹2200', change: '+5%' },
      rice: { price: '₹85', change: '-2%' },
      tomatoes: { price: '₹40', change: '+10%' }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-green-600">
                  KrishiSetu
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/soil-testing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-600">
                  <IconPlant className="h-5 w-5 mr-1" />
                  Soil
                </Link>
                <Link to="/irrigation-calendar" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-600">
                  <IconCalendar className="h-5 w-5 mr-1" />
                  Irrigation
                </Link>
                <Link to="/analytics" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-600">
                  <IconChartBar className="h-5 w-5 mr-1" />
                  Analytics
                </Link>
                <Link to="/climate-recommendations" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-600">
                  <IconCloudRain className="h-5 w-5 mr-1" />
                  Weather
                </Link>
                <Link to="/online-mandi" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-green-600">
                  <IconShoppingCart className="h-5 w-5 mr-1" />
                  Mandi
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <IconUser className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <IconLogout className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Weather Overview */}
          <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Weather Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <IconSun className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Temperature</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.weather.temperature}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <IconDroplet className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.weather.humidity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <IconWind className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wind Speed</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.weather.windSpeed}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <IconCloudRain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Condition</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.weather.condition}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Soil Condition */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Soil Condition</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  {dashboardData.soilCondition.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Moisture</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.soilCondition.moisture}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">pH Level</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.soilCondition.ph}</p>
                </div>
              </div>
              <Link to="/soil-testing" className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500">
                View Details <IconArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Irrigation */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Irrigation</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  Next: {dashboardData.irrigation.nextScheduled}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Last Irrigation</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.irrigation.lastIrrigation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg Usage</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.irrigation.avgWaterUsage}</p>
                </div>
              </div>
              <Link to="/irrigation-calendar" className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500">
                View Calendar <IconArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Tasks */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Upcoming Tasks</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  {dashboardData.tasks.upcoming} Tasks
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Next Task</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.tasks.nextTask}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-lg font-semibold text-gray-900">{dashboardData.tasks.date}</p>
                </div>
              </div>
              <Link to="/irrigation-calendar" className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500">
                View All Tasks <IconArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Market Prices */}
          <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Market Prices</h2>
              <Link to="/online-mandi" className="text-sm font-medium text-green-600 hover:text-green-500">
                View All Prices
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(dashboardData.market).map(([crop, data]) => (
                <div key={crop} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900 capitalize">{crop}</p>
                    <p className="text-lg font-semibold text-gray-900">{data.price}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    data.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {data.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
