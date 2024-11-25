import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {props.products.length > 0 ? (
            props.products
              .filter((data) => (
                (props.search
                  ? data.title.toLowerCase().includes(props.search.toLowerCase())
                  : true) &&
                (props.menu
                  ? data.category.toLowerCase().includes(props.menu.toLowerCase())
                  : true)
              ))
              .map((data) => (
                <Link 
                  to="/details" 
                  state={{ data: data }} 
                  key={data.id}
                  className="transform hover:scale-105 transition-all duration-200"
                >
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                    <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                      <img 
                        src={data.image} 
                        alt={data.title} 
                        className="w-full h-48 object-cover object-center"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h2 className="font-bold text-xl text-gray-900">
                          ₹ {data.price.toLocaleString('en-IN')}
                        </h2>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {data.category}
                        </span>
                      </div>
                      <h3 className="text-gray-700 font-medium line-clamp-2">
                        {data.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <div className="col-span-full flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <p className="text-xl text-gray-600 font-medium">
                  No products available.
                </p>
                <p className="text-gray-500 mt-2">
                  Check back later for new listings.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home