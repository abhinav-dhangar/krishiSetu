"use client"

import { useState } from "react"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CloudSun,
  Droplets,
  Flame,
  Globe,
  Instagram,
  Leaf,
  Menu,
  MessageSquare,
  Phone,
  TreesIcon as Plant,
  SproutIcon as Seedling,
  Sun,
  Twitter,
  X,
  Youtube,
  Download,
  HelpCircle,
  Languages,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentBlogPost, setCurrentBlogPost] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [language, setLanguage] = useState("English")

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab",
      image: "/placeholder.svg?height=80&width=80",
      quote: "KrishiSetu helped me increase my crop yield by 30% through their soil testing and crop recommendations.",
    },
    {
      name: "Anita Devi",
      location: "Uttar Pradesh",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "The weather alerts saved my harvest during unexpected rains. This app is a blessing for small farmers like me.",
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "I sold my crop residue through KrishiSetu instead of burning it. Better for the environment and I made extra income!",
    },
  ]

  const blogPosts = [
    {
      title: "5 Ways to Improve Soil Health Naturally",
      excerpt: "Discover organic methods to enhance soil fertility without harmful chemicals.",
      image: "https://images.unsplash.com/photo-1593412369977-d3b53ca6b53a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2F5cyUyMHRvJTIwSW1wcm92ZSUyMFNvaWwlMjBIZWFsdGglMjBOYXR1cmFsbHl8ZW58MHx8MHx8fDI%3D",
      date: "April 15, 2025",
      author: "Dr. Priya Sharma",
      category: "Soil Health",
    },
    {
      title: "Understanding Climate-Resilient Farming",
      excerpt: "Learn how to adapt your farming practices to changing weather patterns.",
      image: "https://images.unsplash.com/photo-1660892507980-a8259d7162e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VW5kZXJzdGFuZGluZyUyMENsaW1hdGUlMjBSZXNpbGllbnQlMjBGYXJtaW5nfGVufDB8fDB8fHwy",
      date: "April 10, 2025",
      author: "Amit Verma",
      category: "Climate",
    },
    {
      title: "The Economics of Sustainable Agriculture",
      excerpt: "How eco-friendly farming practices can increase your long-term profitability.",
      image: "https://images.unsplash.com/photo-1632083000159-8e17b5ae7fd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGhlJTIwRWNvbm9taWNzJTIwb2YlMjBTdXN0YWluYWJsZSUyMEFncmljdWx0dXJlfGVufDB8fDB8fHwy",
      date: "April 5, 2025",
      author: "Neha Gupta",
      category: "Economics",
    },
  ]

  const faqs = [
    {
      question: "How does the soil testing service work?",
      answer:
        "Our soil testing service involves collecting soil samples from your field, analyzing them in our lab for nutrients, pH levels, and organic matter content, and providing you with detailed recommendations for soil improvement and crop selection based on the results.",
    },
    {
      question: "How accurate are the weather predictions?",
      answer:
        "Our weather predictions are based on data from multiple meteorological sources and have an accuracy rate of over 90% for 3-day forecasts. We continuously improve our algorithms to provide the most reliable weather information for your specific location.",
    },
    {
      question: "Can I use KrishiSetu if I have a small farm?",
      answer:
        "KrishiSetu is designed for farmers of all scales. Our services are particularly beneficial for small farmers who want to maximize productivity with limited resources. We offer affordable plans specifically tailored for small landholdings.",
    },
    {
      question: "How do I sell my crop residue through the platform?",
      answer:
        "To sell crop residue, simply create a listing in the 'Sell Residue' section of the app. Specify the type, quantity, and quality of residue available. Once approved, your listing becomes visible to buyers. When a buyer shows interest, we facilitate the transaction and help arrange collection logistics.",
    },
    {
      question: "Is the app available in regional languages?",
      answer:
        "Yes, KrishiSetu is available in multiple Indian languages including Hindi, Punjabi, Gujarati, Marathi, Tamil, and Telugu. You can change your language preference in the settings menu or through the language selector in the footer.",
    },
  ]

  const languages = ["English", "हिंदी", "ਪੰਜਾਬੀ", "ગુજરાતી", "मराठी", "தமிழ்", "తెలుగు"]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextBlogPost = () => {
    setCurrentBlogPost((prev) => (prev + 1) % blogPosts.length)
  }

  const prevBlogPost = () => {
    setCurrentBlogPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Seedling className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">KrishiSetu</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-green-600 text-green-700 hover:bg-green-50">
              <Link to="/login">
                Login
              </Link>
            </Button>
            <Button className="hidden md:flex bg-green-700 hover:bg-green-800"> <Link to="/register">Sign Up</Link></Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-white">
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
                Solutions
              </Link>
              <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
                Services
              </Link>
              <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
                About Us
              </Link>
              <Link href="#" className="text-sm font-medium text-green-900 hover:text-green-700">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50">
                  Login
                </Button>
                <Button className="w-full bg-green-700 hover:bg-green-800">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1644079801376-e442c29d5bf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3VucmlzZSUyMG92ZXIlMjBmaWVsZHN8ZW58MHx8MHx8fDI%3D"
              alt="Sunrise over fields"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-3xl space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
                Revolutionizing Indian Agriculture
              </h1>
              <p className="text-lg md:text-xl text-green-800 max-w-2xl">
                Empowering farmers with technology for sustainable farming, higher yields, and better livelihoods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem & Solutions Cards */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                Agricultural Challenges & Our Solutions
              </h2>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                KrishiSetu addresses key farming challenges with innovative technology solutions
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={item}>
                <Card className="h-full border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2 px-6 pt-6">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                      <Droplets className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-green-800">Soil Degradation</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-4">
                    <p className="text-green-700">
                      Depleted soil nutrients lead to poor crop health and reduced yields.
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-2">
                    <div className="w-full p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-medium flex items-center">
                        <Leaf className="h-4 w-4 mr-2 text-green-600" />
                        Soil testing & treatment recommendations
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2 px-6 pt-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <CloudSun className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-green-800">Climate Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-4">
                    <p className="text-green-700">
                      Unpredictable weather patterns damage crops and disrupt farming cycles.
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-2">
                    <div className="w-full p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-medium flex items-center">
                        <Sun className="h-4 w-4 mr-2 text-green-600" />
                        Smart weather-based sowing & harvesting
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2 px-6 pt-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <Flame className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-green-800">Stubble Burning</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-4">
                    <p className="text-green-700">Crop residue burning causes air pollution and soil damage.</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-2">
                    <div className="w-full p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-medium flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-green-600" />
                        Marketplace to sell stubble to power plants
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full border-green-100 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2 px-6 pt-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Plant className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-green-800">Wrong Crop Selection</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-4">
                    <p className="text-green-700">
                      Inappropriate crop choices for soil and climate conditions waste resources.
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-2">
                    <div className="w-full p-3 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-medium flex items-center">
                        <Seedling className="h-4 w-4 mr-2 text-green-600" />
                        AI-powered crop advisor
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Live Services Preview */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Services</h2>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                Explore our farmer-friendly digital tools designed to transform your agricultural practices
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Tabs defaultValue="soil" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-green-100 p-1">
                  <TabsTrigger value="soil" className="data-[state=active]:bg-white">
                    Soil Test
                  </TabsTrigger>
                  <TabsTrigger value="crop" className="data-[state=active]:bg-white">
                    Crop Selector
                  </TabsTrigger>
                  <TabsTrigger value="residue" className="data-[state=active]:bg-white">
                    Sell Residue
                  </TabsTrigger>
                  <TabsTrigger value="climate" className="data-[state=active]:bg-white">
                    Climate Tips
                  </TabsTrigger>
                </TabsList>
                <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
                  <TabsContent value="soil" className="p-0 m-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Request Soil Test</h3>
                        <p className="text-green-700 mb-6">
                          Get comprehensive soil analysis with detailed nutrient profiles and personalized
                          recommendations for soil health improvement.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            NPK and micronutrient analysis
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            pH level assessment
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Customized fertilizer recommendations
                          </li>
                        </ul>
                        <Button className="w-fit bg-green-700 hover:bg-green-800">Request Test Now</Button>
                      </div>
                      <div className="bg-green-50 flex items-center justify-center p-6">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1661902899911-d7b89906e638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29pbCUyMHRlc3Rpbmd8ZW58MHx8MHx8fDA%3D"
                          alt="Soil testing process"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="crop" className="p-0 m-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Smart Crop Selector</h3>
                        <p className="text-green-700 mb-6">
                          AI-powered recommendations for the best crops to plant based on your soil conditions, local
                          climate, and market demand.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Soil-specific crop suggestions
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Seasonal planting calendar
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Market demand forecasts
                          </li>
                        </ul>
                        <Button className="w-fit bg-green-700 hover:bg-green-800">Find Best Crops</Button>
                      </div>
                      <div className="bg-green-50 flex items-center justify-center p-6">
                        <img
                          src="https://images.unsplash.com/photo-1621452353638-888c49e1d340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvcCUyMHNlbGVjdGlvbiUyMGludGVyZmFjZXxlbnwwfHwwfHx8Mg%3D%3D"
                          alt="Crop selection interface"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="residue" className="p-0 m-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Sell Crop Residue</h3>
                        <p className="text-green-700 mb-6">
                          Turn agricultural waste into income by connecting with buyers who use crop residue for
                          sustainable energy production.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Direct connection to biomass buyers
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Transparent pricing
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Collection logistics support
                          </li>
                        </ul>
                        <Button className="w-fit bg-green-700 hover:bg-green-800">List Your Residue</Button>
                      </div>
                      <div className="bg-green-50 flex items-center justify-center p-6">
                        <img
                          src="https://images.unsplash.com/photo-1648973177593-749fc5b1fb16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvcCUyMHJlc2lkdWUlMjBtYXJrZXRwbGFjZXxlbnwwfHwwfHx8Mg%3D%3D"
                          alt="Crop residue marketplace"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="climate" className="p-0 m-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Get Climate Tips</h3>
                        <p className="text-green-700 mb-6">
                          Receive localized weather forecasts and actionable advice to protect your crops from climate
                          challenges.
                        </p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            7-day weather forecasts
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Extreme weather alerts
                          </li>
                          <li className="flex items-center text-green-700">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <span className="text-green-600 text-sm">✓</span>
                            </div>
                            Crop-specific protection measures
                          </li>
                        </ul>
                        <Button className="w-fit bg-green-700 hover:bg-green-800">Get Weather Insights</Button>
                      </div>
                      <div className="bg-green-50 flex items-center justify-center p-6">
                        <img
                          src="https://t4.ftcdn.net/jpg/02/66/38/15/240_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg"
                          alt="Weather forecast interface"
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">How KrishiSetu Works</h2>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                A simple three-step process to transform your farming practices
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2 z-0"></div>

              <motion.div variants={item} className="relative z-10">
                <div className="bg-white rounded-lg p-8 border border-green-100 shadow-md h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-green-700">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Test Soil / Input Data</h3>
                  <p className="text-green-700">
                    Request a soil test or input your field data through our simple mobile app or website interface.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1618212624319-3cd9681707e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29pbCUyMHRlc3Rpbmd8ZW58MHx8MHx8fDI%3D"
                    alt="Soil testing process"
                    className="w-full h-auto mt-6 rounded-lg"
                  />
                </div>
              </motion.div>

              <motion.div variants={item} className="relative z-10">
                <div className="bg-white rounded-lg p-8 border border-green-100 shadow-md h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-green-700">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Get Recommendations</h3>
                  <p className="text-green-700">
                    Receive personalized recommendations for crops, fertilizers, and farming practices based on AI
                    analysis.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1738640920336-26aae3e5db67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JvcCUyMHJlY29tbWVuZGF0aW9ufGVufDB8fDB8fHwy"
                    alt="Recommendations dashboard"
                    className="w-full h-auto mt-6 rounded-lg"
                  />
                </div>
              </motion.div>

              <motion.div variants={item} className="relative z-10">
                <div className="bg-white rounded-lg p-8 border border-green-100 shadow-md h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-green-700">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Maximize Yield & Profit</h3>
                  <p className="text-green-700">
                    Implement the recommendations to improve soil health, increase crop yields, and boost your farm
                    income.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1632978135533-9f764b578fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm1lciUyMHdpdGglMjBoZWFsdGh5JTIwY3JvcHN8ZW58MHx8MHx8fDI%3D"
                    alt="Farmer with healthy crops"
                    className="w-full h-auto mt-6 rounded-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Farmer Stories</h2>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                Hear from farmers who have transformed their agricultural practices with KrishiSetu
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 relative">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image || "https://images.unsplash.com/photo-1516213504308-b3f27ab82bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1lciUyMGh1bWFufGVufDB8fDB8fHwy"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full border-4 border-green-100"
                    />
                  </div>
                  <div>
                    <p className="text-green-800 text-lg italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
                    <div>
                      <p className="font-bold text-green-900">{testimonials[currentTestimonial].name}</p>
                      <p className="text-green-600 text-sm">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-green-200 hover:bg-green-50"
                    onClick={prevTestimonial}
                  >
                    <ChevronLeft className="h-5 w-5 text-green-700" />
                  </Button>
                  {testimonials.map((_, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className={`w-3 h-3 p-0 rounded-full ${
                        index === currentTestimonial ? "bg-green-600" : "bg-green-200"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    >
                      <span className="sr-only">Testimonial {index + 1}</span>
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-green-200 hover:bg-green-50"
                    onClick={nextTestimonial}
                  >
                    <ChevronRight className="h-5 w-5 text-green-700" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Section - NEW */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Knowledge Hub</h2>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                Latest insights, farming tips, and agricultural best practices from our experts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-green-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || ""}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-green-700 text-white text-xs px-2 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center text-sm text-green-600 mb-2">
                        <span>{post.date}</span>
                        <span>By {post.author}</span>
                      </div>
                      <CardTitle className="text-green-800 line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-700 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="text-green-700 hover:text-green-800 p-0 hover:bg-transparent">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button className="bg-green-700 hover:bg-green-800">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Mobile App Download Section - NEW */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                  Take KrishiSetu With You Everywhere
                </h2>
                <p className="text-lg text-green-700 mb-6">
                  Download our mobile app to access all KrishiSetu features on the go. Get real-time weather alerts,
                  manage your farm, and connect with buyers - all from your smartphone.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-green-700">Works offline for areas with limited connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-green-700">Voice-enabled features in multiple regional languages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-green-700">Low data usage designed for rural connectivity</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-bold">App Store</div>
                    </div>
                  </Button>
                  <Button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGljYXRpb258ZW58MHx8MHx8fDI%3D"
                    alt="KrishiSetu Mobile App"
                    className="w-full h-auto rounded-3xl border-8 border-white shadow-xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-green-100 rounded-full p-4 shadow-lg">
                    <div className="text-green-800 font-bold text-xl">4.8</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                Find answers to common questions about KrishiSetu and our services
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="px-6 py-4">
                    <AccordionTrigger className="text-left text-green-800 hover:text-green-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-green-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-100 flex items-center justify-between">
                <div className="flex items-center">
                  <HelpCircle className="h-6 w-6 text-green-600 mr-3" />
                  <p className="text-green-800">Still have questions?</p>
                </div>
                <Button className="bg-green-700 hover:bg-green-800">Contact Support</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-green-100 to-amber-100 rounded-2xl p-8 md:p-12">
              <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-green-900 mb-4">Ready to Transform Your Farming?</h2>
                  <p className="text-lg text-green-800 mb-6">
                    Join thousands of farmers across India who are using KrishiSetu to increase yields, reduce costs,
                    and farm more sustainably.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-green-700 hover:bg-green-800 text-white">Get Started</Button>
                    <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Us
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-md">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-green-600" />
                      Send us a message
                    </h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-green-700">
                            Name
                          </label>
                          <input
                            id="name"
                            className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-green-700">
                            Phone
                          </label>
                          <input
                            id="phone"
                            className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Your phone"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-green-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <Button className="w-full bg-green-700 hover:bg-green-800">Send Message</Button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Seedling className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold text-white">KrishiSetu</span>
              </div>
              <p className="text-green-200 mb-4">
                Empowering farmers with technology for sustainable farming, higher yields, and better livelihoods.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-green-200 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-green-200 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-green-200 hover:text-white">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    Soil Testing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    Crop Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    Weather Alerts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    Residue Marketplace
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-200 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-green-400 mt-0.5" />
                  <span className="text-green-200">+91 1234 567 890</span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 mr-2 text-green-400 mt-0.5" />
                  <span className="text-green-200">support@krishisetu.com</span>
                </li>
              </ul>
              <div className="mt-4 relative">
                <Button
                  variant="outline"
                  className="border-green-400 text-green-200 hover:bg-green-800 flex items-center gap-2"
                  onClick={() => document.getElementById("language-dropdown")?.classList.toggle("hidden")}
                >
                  <Languages className="h-4 w-4" />
                  {language}
                </Button>
                <div
                  id="language-dropdown"
                  className="hidden absolute z-10 mt-2 w-full bg-green-800 border border-green-700 rounded-md shadow-lg"
                >
                  <ul className="py-1">
                    {languages.map((lang) => (
                      <li key={lang}>
                        <button
                          className="block w-full text-left px-4 py-2 text-green-200 hover:bg-green-700"
                          onClick={() => {
                            setLanguage(lang)
                            document.getElementById("language-dropdown")?.classList.add("hidden")
                          }}
                        >
                          {lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-300 text-sm">© {new Date().getFullYear()} KrishiSetu. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-green-300 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-green-300 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-green-300 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
