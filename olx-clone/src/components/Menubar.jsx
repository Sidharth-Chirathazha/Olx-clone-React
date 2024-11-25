import React from 'react'
import './Menubar.css'

const Menubar = (props) => {

  const menuItems = [
    "Car",
    "Jacket",
    "Mobile Phones",
    "House",
    "Scooters",
    "Bikes",
    "Apartment"
  ];
  return (
    <div className="shadow-sm h-10 p-2">
      <div className="menubar-container">
        {menuItems.map((item, index) => (
          <h1
            key={item}
            onClick={() => props.setMenu(item)}
            className={`menu-item ${index === 0 ? 'menu-start-margin' : ''}`}
          >
            {item}
          </h1>
        ))}
      </div>
    </div>

  )
}

export default Menubar