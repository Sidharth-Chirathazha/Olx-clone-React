import React from 'react'
import carwale from '../assets/carwale.svg'
import cartrade from '../assets/cartrade.svg'
import bikewale from '../assets/bikewale.svg'

const Footer = () => {
  return (
    <footer className="bg-cyan-950 w-full bottom-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Partner Logos */}
        <div className="flex justify-center items-center space-x-12 mb-8">
          {[
            { src: carwale, alt: "Carwale" },
            { src: cartrade, alt: "Cartrade" },
            { src: bikewale, alt: "Bikewale" }
          ].map((logo) => (
            <div key={logo.alt} className="transform hover:scale-105 transition-transform">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-20 hover:opacity-90 transition-opacity" 
              />
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex justify-between items-center">
            <p className="text-white text-sm">
              All rights reserved © 2006-2024 OLX
            </p>
            <ul className="flex space-x-8">
              {["Help", "Sitemap"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer