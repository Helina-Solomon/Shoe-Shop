//import React from 'react'
import shoe1 from '../assets/adidas sport.jpg'
import shoe2 from '../assets/adidassuper.jpg'
import shoe3 from '../assets/blacksne.jpg'
import shoe4 from '../assets/boots1.jpg'
import shoe5 from '../assets/boots2.jpg'
import shoe6 from '../assets/converse.jpg'
import shoe7 from '../assets/heel.jpg'
import shoe8 from '../assets/heel3.jpg'
import shoe9 from '../assets/highheel1.jpg'
import shoe10 from '../assets/highheel2.jpg'
import shoe11 from '../assets/jordan1 b.jpg'
import shoe12 from '../assets/jordan1 g.jpg'
import shoe13 from '../assets/jordan1.jpg'
import shoe14 from '../assets/jordan4.jpg'
import shoe15 from '../assets/jordan4 g.jpg'
import shoe16 from '../assets/loafers.jpg'
import shoe17 from '../assets/loafers2.jpg'
import shoe18 from '../assets/loafers3.jpg'
import shoe19 from '../assets/mules1.jpg'
import shoe20 from '../assets/mules2.jpg'
import shoe21 from '../assets/oxford1.jpg'
import shoe22 from '../assets/oxford2.jpg'
import shoe23 from '../assets/oxford3.jpg'
import shoe24 from '../assets/reebok.jpg'
import shoe25 from '../assets/sandal3.jpg'
import shoe26 from '../assets/sport.jpg'
import shoe27 from '../assets/sport3.jpg'
import shoe28 from '../assets/sport4.jpg'
import shoe29 from '../assets/timb1.jpg'

const Products = () => {
  const products = [
    {id: 1, name: 'Adidas Sport Shoe color Black', price: 1150, image:shoe1},
    {id: 2, name: 'Adidas Super Star', price: 2150, image:shoe2},
    {id: 3, name: 'Black Sneaker', price: 2300, image: shoe3},
    {id:4, name: 'Classy Boots', price: 3700, image: shoe4},
    {id: 5, name: 'Boots', price: 1000, image: shoe5},
    {id: 6, name: 'All Star Converse', price: 2800, image: shoe6},
    {id: 20, name: 'Classy Sandals', price: 1500, image: shoe20},
    {id: 7, name: 'High Heels', price: 1400, image: shoe7},
    {id: 8, name: 'Barbie Heels', price: 1500, image: shoe8},
    {id: 9, name: 'Pointy Heels', price: 2000, image: shoe9},
    {id: 10, name: 'Fairy Heels', price: 2000, image: shoe10},
    {id: 11, name: 'Jordan 1 color Blue', price: 2500, image: shoe11},
    {id: 12, name: 'Jordan 1 color Gold', price: 3500, image: shoe12},
    {id: 13, name: 'Jordan 1 color Vermilion', price: 3000, image: shoe13},
    {id: 14, name: 'Jordan 4 color Black', price: 3400, image: shoe14},
    {id: 15, name: 'Jordan 4', price: 3400, image: shoe15},
    {id: 16, name: 'Loafers', price: 4200, image: shoe16},
    {id: 17, name: 'Gucci Loafers', price: 5000, image: shoe17},
    {id: 18, name: 'Prada Loafers', price: 5500, image: shoe18},
    {id: 19, name: 'Classy Mules', price: 5500, image: shoe19},
    {id: 21, name: 'Oxford Shoes', price: 3500, image: shoe21},
    {id: 22, name: 'Classy Oxford', price: 4000, image: shoe22},
    {id: 23, name: 'Oxford color Black', price: 4000, image: shoe23},
    {id: 24, name: 'Reebok Sneaker', price: 3000, image: shoe24},
    {id: 25, name: 'Ladies Sandals', price: 1500, image: shoe25},
    {id: 26, name: 'Nike Sport Shoes', price: 2000, image: shoe26},
    {id: 27, name: 'Merrell Sport Shoes', price: 1500, image: shoe27},
    {id: 28, name: 'Adidas Sport Shoes', price: 2000, image: shoe28},
    {id: 29, name: 'Timberland boots', price: 4500, image: shoe29}
  ]


  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-semibold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-slate-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg">ETB {product.price}</p>
            <button
              className="bg-slate-700 text-white rounded-lg py-2 px-4 mt-4 hover:opacity-95"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products
