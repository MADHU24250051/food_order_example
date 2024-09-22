import React, { useState } from 'react';

const outlets = [
  {
    id: 1,
    name: 'Cafeteria',
    logo: '/cafeteria-logo.png',
    operationalTime: '8:00 AM - 10:00 PM',
    menu: [
      { id: 1, name: 'Veg Thali', price: 60 },
      { id: 2, name: 'Butter Chicken', price: 120 },
      { id: 3, name: 'Paneer Tikka', price: 100 },
    ],
  },
  {
    id: 2,
    name: 'Food Court',
    logo: '/food-court-logo.jpeg',
    operationalTime: '11:00 AM - 11:00 PM',
    menu: [
      { id: 4, name: 'Pizza', price: 150 },
      { id: 5, name: 'Burger', price: 80 },
      { id: 6, name: 'Pasta', price: 120 },
    ],
  },
  {
    id: 3,
    name: 'Night Canteen',
    logo: '/night-canteen-logo.png',
    operationalTime: '6:00 PM - 2:00 AM',
    menu: [
      { id: 7, name: 'Maggi', price: 30 },
      { id: 8, name: 'Sandwich', price: 50 },
      { id: 9, name: 'Tea', price: 10 },
    ],
  },
];

const App = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [cart, setCart] = useState([]);

  const handleOutletSelect = (outlet) => {
    setSelectedOutlet(outlet);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const placeOrder = () => {
    console.log("YOUR ORDER IS SUCCESSFULLY PLACED");
    setCart([]);
    setSelectedOutlet(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">IITGn Food Ordering</h1>
      
      <div className="flex flex-wrap gap-6 mb-8">
        {outlets.map((outlet) => (
          <div 
            key={outlet.id} 
            className="border p-4 rounded-lg cursor-pointer hover:shadow-lg transition flex-1 basis-1/3"
            onClick={() => handleOutletSelect(outlet)}
          >
            <img src={outlet.logo} alt={`${outlet.name} logo`} className="w-24 h-24 mb-2" />
            <h2 className="text-xl font-semibold mb-2">{outlet.name}</h2>
            <p className="text-gray-600">{outlet.operationalTime}</p>
          </div>
        ))}
      </div>

      {selectedOutlet && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{selectedOutlet.name} Menu</h2>
          <ul className="space-y-2">
            {selectedOutlet.menu.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} - ₹{item.price}</span>
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          🛒 Cart
        </h2>
        <ul className="mb-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="font-bold mb-4">Total: ₹{getTotalCost()}</div>
        <button 
          onClick={placeOrder}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default App;