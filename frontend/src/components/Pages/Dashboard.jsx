"use client"

import { useState } from "react"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import {
  Calendar,
  CloudRain,
  CloudSun,
  Droplets,
  Home,
  Info,
  Leaf,
  MapPin,
  Menu,
  MoreHorizontal,
  PieChart,
  ShoppingCart,
  SproutIcon as Seedling,
  Sun,
  Thermometer,
  Wind,
  X,
} from "lucide-react"

import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "../ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "../ui/chart"
import { Line, Pie } from "recharts"

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock data for the dashboard
  const userData = {
    name: "Rajesh Kumar",
    location: "Amritsar, Punjab",
    avatar: "/placeholder.svg?height=40&width=40",
    landSize: "5.2 hectares",
    landType: "Irrigated",
    soilType: "Alluvial",
    lastSoilTest: "15 March 2025",
  }

  const weatherData = {
    current: {
      temp: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      precipitation: 20,
    },
    forecast: [
      { day: "Today", temp: 28, icon: "cloud-sun" },
      { day: "Tomorrow", temp: 30, icon: "sun" },
      { day: "Wed", temp: 29, icon: "sun" },
      { day: "Thu", temp: 27, icon: "cloud-rain" },
      { day: "Fri", temp: 26, icon: "cloud-rain" },
    ],
  }

  const financialData = {
    currentMonth: {
      income: 45000,
      expenses: 18000,
      profit: 27000,
    },
    expenseBreakdown: [
      { name: "Seeds", value: 4000 },
      { name: "Fertilizers", value: 6000 },
      { name: "Labor", value: 5000 },
      { name: "Equipment", value: 2000 },
      { name: "Others", value: 1000 },
    ],
    monthlyData: [
      { name: "Jan", income: 30000, expenses: 15000 },
      { name: "Feb", income: 35000, expenses: 16000 },
      { name: "Mar", income: 32000, expenses: 14000 },
      { name: "Apr", income: 40000, expenses: 18000 },
      { name: "May", income: 45000, expenses: 18000 },
      { name: "Jun", income: 0, expenses: 0 },
    ],
  }

  const soilData = {
    ph: 6.8,
    nitrogen: 75,
    phosphorus: 60,
    potassium: 80,
    organicMatter: 3.2,
    moisture: 45,
    recommendations: [
      "Add phosphorus-rich fertilizer to improve soil health",
      "Consider adding organic compost to increase organic matter",
      "Soil pH is optimal for most crops",
    ],
  }

  const cropRecommendations = [
    {
      name: "Wheat",
      suitability: 95,
      season: "Rabi",
      waterRequirement: "Medium",
      expectedYield: "4.5-5.2 tonnes/hectare",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rice",
      suitability: 90,
      season: "Kharif",
      waterRequirement: "High",
      expectedYield: "5.0-6.0 tonnes/hectare",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Maize",
      suitability: 85,
      season: "Kharif",
      waterRequirement: "Medium",
      expectedYield: "3.5-4.2 tonnes/hectare",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Mustard",
      suitability: 80,
      season: "Rabi",
      waterRequirement: "Low",
      expectedYield: "1.2-1.5 tonnes/hectare",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const upcomingTasks = [
    {
      task: "Apply fertilizer to wheat field",
      date: "April 25, 2025",
      priority: "High",
    },
    {
      task: "Irrigation schedule for eastern plot",
      date: "April 27, 2025",
      priority: "Medium",
    },
    {
      task: "Book soil testing appointment",
      date: "May 5, 2025",
      priority: "Medium",
    },
    {
      task: "Harvest preparation",
      date: "May 15, 2025",
      priority: "High",
    },
  ]

  const marketPrices = [
    { crop: "Wheat", price: 2200, trend: "up", change: "+3.5%" },
    { crop: "Rice", price: 3800, trend: "down", change: "-1.2%" },
    { crop: "Maize", price: 1850, trend: "up", change: "+2.1%" },
    { crop: "Soybean", price: 4200, trend: "up", change: "+4.7%" },
  ]

  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case "sun":
        return <Sun className="h-6 w-6 text-amber-500" />
      case "cloud-sun":
        return <CloudSun className="h-6 w-6 text-amber-400" />
      case "cloud-rain":
        return <CloudRain className="h-6 w-6 text-blue-500" />
      default:
        return <CloudSun className="h-6 w-6 text-amber-400" />
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Seedling className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">KrishiSetu</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Home className="h-4 w-4 inline mr-1" />
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-green-700 border-b-2 border-green-700 hover:text-green-700"
            >
              <PieChart className="h-4 w-4 inline mr-1" />
              Dashboard
            </Link>
            <Link href="/online-mandi" className="text-sm font-medium text-green-900 hover:text-green-700">
              <ShoppingCart className="h-4 w-4 inline mr-1" />
              Online Mandi
            </Link>
            <Link href="/soil-testing" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Droplets className="h-4 w-4 inline mr-1" />
              Soil Testing
            </Link>
            <Link href="/irrigation-calendar" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Calendar className="h-4 w-4 inline mr-1" />
              Irrigation Calendar
            </Link>
            <Link href="/about-us" className="text-sm font-medium text-green-900 hover:text-green-700">
              <Info className="h-4 w-4 inline mr-1" />
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userData.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userData.location}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Home className="h-4 w-4 inline mr-2" />
                Home
              </Link>
              <Link href="/dashboard" className="text-sm font-medium text-green-700 hover:text-green-700">
                <PieChart className="h-4 w-4 inline mr-2" />
                Dashboard
              </Link>
              <Link href="/online-mandi" className="text-sm font-medium text-green-900 hover:text-green-700">
                <ShoppingCart className="h-4 w-4 inline mr-2" />
                Online Mandi
              </Link>
              <Link href="/soil-testing" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Droplets className="h-4 w-4 inline mr-2" />
                Soil Testing
              </Link>
              <Link href="/irrigation-calendar" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Calendar className="h-4 w-4 inline mr-2" />
                Irrigation Calendar
              </Link>
              <Link href="/about-us" className="text-sm font-medium text-green-900 hover:text-green-700">
                <Info className="h-4 w-4 inline mr-2" />
                About Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="container py-6">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-900">Farm Dashboard</h1>
            <p className="text-green-700">Welcome back, {userData.name}! Here's your farm overview.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-700" />
            <span className="text-green-800">{userData.location}</span>
            <Badge variant="outline" className="ml-2 bg-green-100 text-green-800 hover:bg-green-200">
              Last updated: Today, 10:30 AM
            </Badge>
          </div>
        </div>

        {/* Dashboard Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Weather Card */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Today's Weather</span>
                  <CloudSun className="h-5 w-5 text-amber-500" />
                </CardTitle>
                <CardDescription>{userData.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl font-bold text-green-900">{weatherData.current.temp}°C</div>
                    <div className="ml-4 text-green-700">{weatherData.current.condition}</div>
                  </div>
                  <CloudSun className="h-12 w-12 text-amber-500" />
                </div>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="flex flex-col items-center p-2 bg-green-50 rounded-lg">
                    <Droplets className="h-5 w-5 text-blue-500 mb-1" />
                    <div className="text-xs text-green-700">Humidity</div>
                    <div className="font-medium text-green-900">{weatherData.current.humidity}%</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-green-50 rounded-lg">
                    <Wind className="h-5 w-5 text-blue-500 mb-1" />
                    <div className="text-xs text-green-700">Wind</div>
                    <div className="font-medium text-green-900">{weatherData.current.windSpeed} km/h</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-green-50 rounded-lg">
                    <CloudRain className="h-5 w-5 text-blue-500 mb-1" />
                    <div className="text-xs text-green-700">Rain</div>
                    <div className="font-medium text-green-900">{weatherData.current.precipitation}%</div>
                  </div>
                </div>
                <div className="border-t border-green-100 pt-4">
                  <div className="text-sm font-medium text-green-800 mb-2">5-Day Forecast</div>
                  <div className="flex justify-between">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="text-xs text-green-700">{day.day}</div>
                        {renderWeatherIcon(day.icon)}
                        <div className="text-sm font-medium text-green-900">{day.temp}°</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Land Details Card */}
          <motion.div variants={item} className="md:col-span-2">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Land Details</span>
                  <MapPin className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Your farm information and current status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-sm text-green-700">Land Size</div>
                        <div className="text-lg font-medium text-green-900">{userData.landSize}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-green-700">Land Type</div>
                        <div className="text-lg font-medium text-green-900">{userData.landType}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-green-700">Soil Type</div>
                        <div className="text-lg font-medium text-green-900">{userData.soilType}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-green-700">Last Soil Test</div>
                        <div className="text-lg font-medium text-green-900">{userData.lastSoilTest}</div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-sm font-medium text-green-800 mb-2">Current Crops</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Wheat (3.2 ha)</Badge>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Mustard (1.5 ha)</Badge>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Vegetables (0.5 ha)</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="aspect-video relative rounded-lg overflow-hidden border border-green-200">
                      <Image src="/placeholder.svg?height=200&width=400" alt="Farm Map" fill className="object-cover" />
                      <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-green-900">
                        Tap to view detailed map
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Financial Overview */}
          <motion.div variants={item} className="md:col-span-2">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Financial Overview</span>
                  <PieChart className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Current month income, expenses and profit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-green-700 mb-1">Income</div>
                    <div className="text-2xl font-bold text-green-900">
                      ₹{financialData.currentMonth.income.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-sm text-red-700 mb-1">Expenses</div>
                    <div className="text-2xl font-bold text-red-900">
                      ₹{financialData.currentMonth.expenses.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 mb-1">Profit</div>
                    <div className="text-2xl font-bold text-blue-900">
                      ₹{financialData.currentMonth.profit.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-green-800 mb-2">Monthly Trend</div>
                  <div className="h-64">
                    <ChartContainer className="h-full" data={financialData.monthlyData}>
                      <Chart>
                        <Line
                          type="monotone"
                          dataKey="income"
                          stroke="#16a34a"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="expenses"
                          stroke="#dc2626"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent
                              className="border-green-100"
                              items={[
                                { name: "Income", value: (value) => `₹${value}`, color: "#16a34a" },
                                { name: "Expenses", value: (value) => `₹${value}`, color: "#dc2626" },
                              ]}
                            />
                          }
                        />
                      </Chart>
                      <ChartLegend className="mt-4 justify-center">
                        <ChartLegendItem name="Income" color="#16a34a" />
                        <ChartLegendItem name="Expenses" color="#dc2626" />
                      </ChartLegend>
                    </ChartContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expense Breakdown */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800">Expense Breakdown</CardTitle>
                <CardDescription>Current month expenses by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-4">
                  <ChartContainer className="h-full" data={financialData.expenseBreakdown}>
                    <Chart>
                      <Pie
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#16a34a"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            className="border-green-100"
                            items={[{ name: "Amount", value: (value) => `₹${value}` }]}
                          />
                        }
                      />
                    </Chart>
                  </ChartContainer>
                </div>
                <div className="space-y-2">
                  {financialData.expenseBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="text-sm text-green-800">{item.name}</div>
                      <div className="text-sm font-medium text-green-900">₹{item.value.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Soil Information */}
          <motion.div variants={item} className="md:col-span-2">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Soil Information</span>
                  <Droplets className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Based on your last soil test on {userData.lastSoilTest}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm text-green-700">pH Level</div>
                      <div className="text-sm font-medium text-green-900">{soilData.ph}</div>
                    </div>
                    <Progress value={soilData.ph * 10} className="h-2" />
                    <div className="flex justify-between text-xs text-green-600">
                      <span>Acidic</span>
                      <span>Neutral</span>
                      <span>Alkaline</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm text-green-700">Nitrogen (N)</div>
                      <div className="text-sm font-medium text-green-900">{soilData.nitrogen}%</div>
                    </div>
                    <Progress value={soilData.nitrogen} className="h-2" />
                    <div className="flex justify-between text-xs text-green-600">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm text-green-700">Phosphorus (P)</div>
                      <div className="text-sm font-medium text-green-900">{soilData.phosphorus}%</div>
                    </div>
                    <Progress value={soilData.phosphorus} className="h-2" />
                    <div className="flex justify-between text-xs text-green-600">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm text-green-700">Potassium (K)</div>
                      <div className="text-sm font-medium text-green-900">{soilData.potassium}%</div>
                    </div>
                    <Progress value={soilData.potassium} className="h-2" />
                    <div className="flex justify-between text-xs text-green-600">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm text-green-700">Organic Matter</div>
                      <div className="text-sm font-medium text-green-900">{soilData.organicMatter}%</div>
                    </div>
                    <Progress value={soilData.organicMatter * 20} className="h-2" />
                    <div className="flex justify-between text-xs text-green-600">
                      <span>Low</span>
                      <span>Medium</span>
                      <span>High</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm text-green-700">Moisture</div>
                      <div className="text-sm font-medium text-green-900">{soilData.moisture}%</div>
                    </div>
                    <Progress value={soilData.moisture} className="h-2" />
                    <div className="flex justify-between text-xs text-green-600">
                      <span>Dry</span>
                      <span>Moist</span>
                      <span>Wet</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-green-800 mb-2">Soil Recommendations</div>
                  <ul className="space-y-2">
                    {soilData.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <span className="text-sm text-green-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                  Schedule New Soil Test
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Crop Recommendations */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Crop Recommendations</span>
                  <Leaf className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Based on your soil and location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cropRecommendations.slice(0, 3).map((crop, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-green-50">
                      <Image
                        src={crop.image || "/placeholder.svg"}
                        alt={crop.name}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div className="font-medium text-green-900">{crop.name}</div>
                          <Badge className="bg-green-100 text-green-800">{crop.season}</Badge>
                        </div>
                        <div className="text-xs text-green-700 mt-1">Suitability: {crop.suitability}%</div>
                        <Progress value={crop.suitability} className="h-1 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-700 hover:bg-green-800">View All Recommendations</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Upcoming Tasks</span>
                  <Calendar className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Your farming schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          task.priority === "High" ? "bg-red-500" : "bg-amber-500"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-medium text-green-900">{task.task}</div>
                        <div className="text-xs text-green-700 mt-1">{task.date}</div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                  View Calendar
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Market Prices */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 flex items-center justify-between">
                  <span>Market Prices</span>
                  <ShoppingCart className="h-5 w-5 text-green-700" />
                </CardTitle>
                <CardDescription>Current crop prices in your region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {marketPrices.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-green-50">
                      <div className="font-medium text-green-900">{item.crop}</div>
                      <div className="flex items-center">
                        <div className="text-green-900 font-medium mr-2">₹{item.price}/q</div>
                        <div className={`text-xs ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-700 hover:bg-green-800">Visit Online Mandi</Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Weather Advisory */}
          <motion.div variants={item} className="md:col-span-1">
            <Card className="h-full border-green-100">
              <CardHeader className="pb-2 bg-amber-50 rounded-t-lg">
                <CardTitle className="text-amber-800 flex items-center justify-between">
                  <span>Weather Advisory</span>
                  <CloudSun className="h-5 w-5 text-amber-600" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <Thermometer className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-900">Temperature Alert</div>
                      <div className="text-sm text-green-700">
                        Temperatures expected to rise to 32°C by weekend. Consider additional irrigation for wheat
                        fields.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <CloudRain className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-green-900">Rain Forecast</div>
                      <div className="text-sm text-green-700">
                        Light showers expected on Thursday and Friday. Plan harvesting activities accordingly.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-amber-600 text-amber-700 hover:bg-amber-50">
                  View Detailed Forecast
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
