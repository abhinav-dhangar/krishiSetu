import React, { useState } from 'react';
import { 
  IconSearch, 
  IconFilter, 
  IconSortAscending, 
  IconSortDescending,
  IconPlus,
  IconCurrencyRupee,
  IconCalendar,
  IconMapPin,
  IconStar,
  IconShoppingCart
} from '@tabler/icons-react';

const OnlineMandi = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for demonstration
  const products = [
    {
      id: 1,
      name: 'Organic Wheat',
      price: 2200,
      quantity: '100 kg',
      location: 'Punjab',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3',
      category: 'grains',
      date: '2024-03-15'
    },
    {
      id: 2,
      name: 'Fresh Tomatoes',
      price: 40,
      quantity: '50 kg',
      location: 'Maharashtra',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1592841200221-1907caa5819e?ixlib=rb-4.0.3',
      category: 'vegetables',
      date: '2024-03-14'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      price: 85,
      quantity: '200 kg',
      location: 'Haryana',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3',
      category: 'grains',
      date: '2024-03-13'
    },
    {
      id: 4,
      name: 'Alphonso Mangoes',
      price: 120,
      quantity: '25 kg',
      location: 'Maharashtra',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1603664454145-7b6cfeacf104?ixlib=rb-4.0.3',
      category: 'fruits',
      date: '2024-03-12'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'grains', name: 'Grains' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'spices', name: 'Spices' }
  ];

  const priceTrends = [
    { product: 'Wheat', current: 2200, change: '+5%' },
    { product: 'Rice', current: 85, change: '-2%' },
    { product: 'Tomatoes', current: 40, change: '+10%' },
    { product: 'Mangoes', current: 120, change: '+15%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Online Mandi</h1>
              <p className="mt-2 text-sm text-gray-600">Sell your produce directly to buyers</p>
            </div>
            <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <IconPlus className="h-5 w-5 mr-2" />
              List New Product
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Search products..."
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IconSearch className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        selectedCategory === category.id
                          ? 'bg-green-100 text-green-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <button className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    <IconFilter className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span>Price</span>
                  {sortOrder === 'asc' ? (
                    <IconSortAscending className="h-5 w-5 text-gray-400" />
                  ) : (
                    <IconSortDescending className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Price Trends */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Price Trends</h2>
              <div className="space-y-4">
                {priceTrends.map((trend) => (
                  <div key={trend.product} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{trend.product}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-2">
                        ₹{trend.current}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          trend.change.startsWith('+')
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {trend.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                        <div className="mt-1 flex items-center">
                          <IconMapPin className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-500">{product.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <IconStar className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium text-gray-900">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <IconCurrencyRupee className="h-5 w-5 text-gray-900" />
                          <span className="text-xl font-bold text-gray-900">
                            {product.price}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">/ {product.quantity}</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <IconCalendar className="h-4 w-4 mr-1" />
                          Listed on {product.date}
                        </div>
                      </div>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <IconShoppingCart className="h-5 w-5 mr-2" />
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineMandi;