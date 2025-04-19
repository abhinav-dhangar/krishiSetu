import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconPlant, IconDroplet, 
  IconChartBar, IconLeaf, 
  IconCurrencyRupee, IconChevronRight,
  IconWorld, IconTrendingUp, 
  IconMapPin, IconStar,
  IconSeeding, IconArrowUpRight, 
  IconArrowDownRight, IconShoppingCart,
  IconDeviceAnalytics, IconDeviceHeartMonitor, 
  IconDeviceMobileMessage
} from '@tabler/icons-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('wheat');
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCrop, setHoveredCrop] = useState(null);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marketData = {
    wheat: [
      { date: 'Jan', price: 1800, volume: 1200 },
      { date: 'Feb', price: 1950, volume: 1350 },
      { date: 'Mar', price: 2050, volume: 1500 },
      { date: 'Apr', price: 1900, volume: 1400 },
      { date: 'May', price: 2100, volume: 1600 },
      { date: 'Jun', price: 2200, volume: 1700 },
    ],
    rice: [
      { date: 'Jan', price: 70, volume: 2500 },
      { date: 'Feb', price: 68, volume: 2300 },
      { date: 'Mar', price: 72, volume: 2400 },
      { date: 'Apr', price: 75, volume: 2600 },
      { date: 'May', price: 80, volume: 2800 },
      { date: 'Jun', price: 85, volume: 3000 },
    ],
    tomatoes: [
      { date: 'Jan', price: 25, volume: 1800 },
      { date: 'Feb', price: 30, volume: 2000 },
      { date: 'Mar', price: 28, volume: 1900 },
      { date: 'Apr', price: 32, volume: 2100 },
      { date: 'May', price: 35, volume: 2200 },
      { date: 'Jun', price: 40, volume: 2400 },
    ]
  };

  const maxPrice = Math.max(...marketData[activeTab].map(item => item.price));
  const minPrice = Math.min(...marketData[activeTab].map(item => item.price));
  const maxVolume = Math.max(...marketData[activeTab].map(item => item.volume));
  
  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Punjab",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "KrishiSetu has transformed how I manage my farm. The market insights helped me increase profits by 30%.",
      rating: 5,
      crops: ["Wheat", "Rice"]
    },
    {
      name: "Anita Patel",
      location: "Gujarat",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "The smart irrigation system saved me thousands of liters of water. Highly recommended for all farmers!",
      rating: 5,
      crops: ["Cotton", "Groundnut"]
    },
    {
      name: "Suresh Reddy",
      location: "Telangana",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      text: "I can now sell my produce directly to consumers. My income has doubled since I started using KrishiSetu.",
      rating: 5,
      crops: ["Rice", "Vegetables"]
    }
  ];

  const crops = [
    { 
      name: 'Wheat', 
      icon: <IconSeeding className="h-8 w-8" />, 
      price: '₹2,200/q', 
      change: '+5%',
      trend: 'up',
      volume: '1.2K tons',
      region: 'North India'
    },
    { 
      name: 'Rice', 
      icon: <IconPlant className="h-8 w-8" />, 
      price: '₹85/kg', 
      change: '-2%',
      trend: 'down',
      volume: '2.5K tons',
      region: 'East India'
    },
    { 
      name: 'Tomatoes', 
      icon: <IconDroplet className="h-8 w-8" />, 
      price: '₹40/kg', 
      change: '+10%',
      trend: 'up',
      volume: '1.8K tons',
      region: 'South India'
    },
    { 
      name: 'Potatoes', 
      icon: <IconLeaf className="h-8 w-8" />, 
      price: '₹25/kg', 
      change: '+3%',
      trend: 'up',
      volume: '2.0K tons',
      region: 'West India'
    }
  ];

  const features = [
    {
      icon: <IconDeviceAnalytics className="h-8 w-8" />,
      title: "Smart Analytics",
      description: "AI-powered insights for better decision making",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <IconDeviceHeartMonitor className="h-8 w-8" />,
      title: "Crop Monitoring",
      description: "Real-time tracking of crop health and growth",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <IconDeviceMobileMessage className="h-8 w-8" />,
      title: "Market Alerts",
      description: "Instant notifications for price changes",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with 3D elements and dynamic background */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #1e3a8a 0%, #065f46 100%)`,
        }}
      >
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] -top-[300px] -left-[300px] rounded-full opacity-20 bg-green-400 animate-blob1"></div>
          <div className="absolute w-[500px] h-[500px] top-[10%] -right-[250px] rounded-full opacity-20 bg-blue-400 animate-blob2"></div>
          <div className="absolute w-[400px] h-[400px] -bottom-[200px] left-[10%] rounded-full opacity-20 bg-purple-400 animate-blob3"></div>
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              fill="none"
              stroke="white"
              strokeWidth="0.2"
              d="M0,0 L100,0 L100,100 L0,100 Z"
            />
            {Array.from({ length: 10 }).map((_, i) => (
              <path
                key={i}
                fill="none"
                stroke="white"
                strokeWidth="0.1"
                d={`M0,${i * 10} L100,${i * 10}`}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <path
                key={i + 10}
                fill="none"
                stroke="white"
                strokeWidth="0.1"
                d={`M${i * 10},0 L${i * 10},100`}
              />
            ))}
          </svg>
        </div>

        <div 
          className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Hero content with 3D perspective */}
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left side - Text content */}
              <div className="lg:col-span-6 text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-white to-blue-100">
                  KrishiSetu
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Your Digital Market for Smart Farming Solutions
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/register" className="relative group px-8 py-4 flex items-center gap-2 overflow-hidden">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-green-400 to-blue-500 group-hover:from-blue-500 group-hover:to-green-400 rounded-lg"></span>
                    <span className="relative font-semibold text-white">
                      Get Started
                    </span>
                    <IconChevronRight className="w-5 h-5 relative" />
                  </Link>
                  
                  <Link to="/market" className="relative group px-8 py-4 flex items-center gap-2 overflow-hidden">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 border-2 border-white/30 rounded-lg group-hover:bg-white/10"></span>
                    <span className="relative font-semibold text-white">
                      Browse Market
                    </span>
                    <IconChevronRight className="w-5 h-5 relative" />
                  </Link>
                </div>
              </div>
              
              {/* Right side - 3D-like market cards */}
              <div className="lg:col-span-6">
                <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg">
                  <div className="rounded-xl bg-white/5 p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-white">Today's Market</h3>
                      <div className="flex space-x-2">
                        <button 
                          className={`px-3 py-1 text-sm rounded-lg transition-all ${activeTab === 'wheat' ? 'bg-white text-blue-900' : 'text-white hover:bg-white/10'}`}
                          onClick={() => setActiveTab('wheat')}
                        >
                          Wheat
                        </button>
                        <button 
                          className={`px-3 py-1 text-sm rounded-lg transition-all ${activeTab === 'rice' ? 'bg-white text-blue-900' : 'text-white hover:bg-white/10'}`}
                          onClick={() => setActiveTab('rice')}
                        >
                          Rice
                        </button>
                        <button 
                          className={`px-3 py-1 text-sm rounded-lg transition-all ${activeTab === 'tomatoes' ? 'bg-white text-blue-900' : 'text-white hover:bg-white/10'}`}
                          onClick={() => setActiveTab('tomatoes')}
                        >
                          Tomatoes
                        </button>
                      </div>
                    </div>
                    
                    {/* Price chart */}
                    <div className="h-40 flex items-end justify-between mb-2">
                      {marketData[activeTab].map((item, i) => {
                        const height = ((item.price - minPrice) / (maxPrice - minPrice)) * 100;
                        const volumeHeight = (item.volume / maxVolume) * 100;
                        return (
                          <div key={i} className="flex flex-col items-center">
                            <div className="flex items-end gap-1">
                              <div 
                                className={`w-8 rounded-t-md bg-gradient-to-t from-blue-500/80 to-green-400/80`}
                                style={{ height: `${Math.max(height, 5)}%` }}
                              ></div>
                              <div 
                                className="w-2 rounded-t-md bg-white/20"
                                style={{ height: `${Math.max(volumeHeight, 5)}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-white/80 mt-2">{item.date}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div>
                        <p className="text-white/60 text-sm">Current Price</p>
                        <p className="text-2xl font-bold text-white flex items-center">
                          <IconCurrencyRupee className="w-5 h-5" />
                          {marketData[activeTab][marketData[activeTab].length - 1].price}
                          <span className="text-green-400 text-sm ml-2 flex items-center">
                            <IconTrendingUp className="w-4 h-4 mr-1" />
                            +{Math.floor(Math.random() * 10)}%
                          </span>
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Quick action cards */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-[1px] rounded-xl bg-gradient-to-br from-white/20 to-white/5">
                    <div className="h-full rounded-xl bg-white/5 backdrop-blur-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                      <div>
                        <p className="text-white font-medium">Sell Now</p>
                        <p className="text-white/60 text-sm">Best prices today</p>
                      </div>
                      <IconWorld className="w-8 h-8 text-white/80" />
                    </div>
                  </div>
                  <div className="p-[1px] rounded-xl bg-gradient-to-br from-white/20 to-white/5">
                    <div className="h-full rounded-xl bg-white/5 backdrop-blur-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                      <div>
                        <p className="text-white font-medium">Smart Advice</p>
                        <p className="text-white/60 text-sm">AI recommendations</p>
                      </div>
                      <IconChartBar className="w-8 h-8 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular crops section with neumorphic design */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-50 text-blue-800 rounded-full mb-3">
              Market Trends
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Crops Today
            </h2>
            <p className="text-xl text-gray-600">
              Get real-time insights on crop prices and market trends
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crops.map((crop, index) => (
              <div 
                key={index}
                className="relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all group"
                onMouseEnter={() => setHoveredCrop(index)}
                onMouseLeave={() => setHoveredCrop(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 rounded-xl text-blue-600">
                      {crop.icon}
                    </div>
                    <span className={`px-2 py-1 text-sm font-medium rounded-lg flex items-center gap-1 ${
                      crop.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {crop.trend === 'up' ? <IconArrowUpRight className="w-4 h-4" /> : <IconArrowDownRight className="w-4 h-4" />}
                      {crop.change}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {crop.name}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    {crop.price}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <IconMapPin className="w-4 h-4" />
                      <span>{crop.region}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <IconShoppingCart className="w-4 h-4" />
                      <span>{crop.volume}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Updated today</span>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 text-sm font-medium">
                      Details
                      <IconChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-50 text-green-800 rounded-full mb-3">
              Smart Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced Farming Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Leverage cutting-edge technology for better farming outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-white/5 group hover:from-white/50 hover:to-white/10 transition-all"
              >
                <div className="h-full rounded-2xl bg-white/5 backdrop-blur-lg p-8 hover:bg-white/10 transition-colors">
                  <div className="text-white p-4 rounded-xl bg-gradient-to-r from-blue-600 to-green-600 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 text-sm font-medium">
                    Learn More
                    <IconChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer testimonials with spotlight effect */}
      <section className="relative py-20 bg-gradient-to-tr from-gray-900 via-blue-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full mb-3 backdrop-blur-sm">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Farmers Love KrishiSetu
            </h2>
            <p className="text-xl text-white/80">
              Hear from farmers who transformed their business with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-[1px] rounded-2xl bg-gradient-to-br from-white/30 to-white/5 group hover:from-white/50 hover:to-white/10 transition-all"
              >
                <div className="h-full rounded-2xl bg-white/5 backdrop-blur-lg p-8 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full ring-1 ring-white/20"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-white/70">{testimonial.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-white/90 mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <IconStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.crops.map((crop, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-white/10 text-white rounded-full">
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with glassmorphism */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(14, 165, 233, 0.1)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#radialGradient)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500 via-green-500 to-blue-500">
              <div className="rounded-2xl bg-gradient-to-br from-white/80 to-white/90 backdrop-blur-xl p-10 md:p-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Ready to Transform Your Farming Business?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      Join thousands of farmers who have increased their profits and optimized their operations with KrishiSetu.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/register" className="relative overflow-hidden group rounded-xl">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300 group-hover:from-green-600 group-hover:to-blue-600"></span>
                        <span className="relative flex items-center gap-2 px-8 py-4 font-semibold text-white">
                          Get Started Now
                          <IconChevronRight className="w-5 h-5" />
                        </span>
                      </Link>
                      <Link to="/about" className="relative overflow-hidden group rounded-xl">
                        <span className="absolute inset-0 bg-white border-2 border-gray-200 transition-all duration-300 group-hover:bg-gray-50"></span>
                        <span className="relative flex items-center gap-2 px-8 py-4 font-semibold text-gray-700">
                          Learn more
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-[200px]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 animate-pulse-slow"></div>
                      </div>
                      <div className="relative">
                        <IconLeaf className="w-full h-full text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add this to your CSS file or inside a style tag */}
      <style jsx="true">{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, 20px) scale(1.1); }
          50% { transform: translate(0, 40px) scale(1); }
          75% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-20px, 20px) scale(0.9); }
          50% { transform: translate(0, 40px) scale(1.1); }
          75% { transform: translate(20px, 20px) scale(1); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1); }
          50% { transform: translate(0, -40px) scale(0.9); }
          75% { transform: translate(-20px, -20px) scale(1.1); }
        }
        .animate-blob1 {
          animation: blob1 25s infinite;
        }
        .animate-blob2 {
          animation: blob2 30s infinite;
        }
        .animate-blob3 {
          animation: blob3 22s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Home;