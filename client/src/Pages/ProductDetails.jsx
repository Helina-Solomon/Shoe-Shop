//import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
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

// Sample data, replace with your actual data or API call
const products = [
  { id: 1, name: 'Adidas Sport Shoe color Black', price: 1150, description: 'Elevate your performance with the Adidas Sport Shoe, designed for athletes and active individuals alike. This shoe combines cutting-edge technology with sleek style, making it perfect for both workouts and casual wear.', image:shoe1 },
  { id: 2, name: 'Adidas Super Star', price: 2150, description: 'Step into timeless style with the Adidas Superstar Shoe, a classic that has transcended generations. Originally designed as a basketball sneaker, the Superstar has evolved into an iconic fashion staple, perfect for any wardrobe..', image: shoe2 },
  { id: 3, name: 'Black Leather Sneaker', price: 2300, description: 'Elevate your everyday style with the Black Leather Sneaker, a versatile and timeless footwear choice that effortlessly blends comfort and sophistication.', image: shoe3},
  { id: 4, name: 'Classy Boots for Ladies', price: 3700, description: 'Step out in style with our Ladies Boots with Heels, the perfect blend of sophistication and comfort for any occasion. These boots are designed to elevate your look while providing the support you need.', image: shoe4},
  { id: 5, name: 'Ladies boots with straps', price: 3000, description: 'Embrace a bold and stylish look with our Ladies Boots with Straps, designed to make a statement while providing comfort and versatility for any occasion.', image: shoe5},
  { id: 6, name: 'All Star Converse', price: 2800, description: 'The timeless classic is back on our website! Step into timeless style with All Star Converse, the iconic sneaker that has defined casual footwear for generations. Known for its classic design and versatile appeal, these shoes are a must-have for anyone looking to add a touch of retro flair to their wardrobe.', image: shoe6},
  { id: 7, name: 'Vintage High Heels', price: 1400, description: 'Step back in time with our Vintage Heels, a stunning nod to classic elegance that effortlessly combines retro charm with modern comfort. These heels are perfect for those who appreciate timeless fashion and want to make a statement.', image: shoe7},
  { id: 8, name: 'Barbie Heels 💖', price: 1500, description: 'Step into a world of fun and fashion with our Barbie Heels, inspired by the iconic style of Barbie herself. These heels are designed to bring a playful yet chic touch to any outfit, perfect for young trendsetters and those young at heart.', image: shoe8},
  { id: 9, name: 'Pointy Heels for Ladies', price: 2000, description: 'My Ladies, Elevate your look with our Pointy Heels, a chic and sophisticated footwear choice designed to enhance your style while providing a touch of elegance. Perfect for both professional and social settings, these heels are a must-have for any fashion-forward wardrobe.', image: shoe9},
  { id: 10, name: 'Fairy Heels ✨', price: 2000, description: 'Transform your look with our enchanting Fairy Heels, designed to evoke a sense of whimsy and magic inspired by fairy tales. Perfect for adding a touch of fantasy to any outfit, these heels are ideal for special occasions or simply expressing your unique style.', image: shoe10},
  { id: 11, name: 'Jordan 1, Blue Color', price: 2500, description: 'Unleash your style with the Air Jordan 1, an iconic sneaker that has transcended basketball culture to become a fashion staple. Originally released in 1985, the Jordan 1 combines heritage with modern flair, making it a must-have for sneaker enthusiasts and casual wearers alike.', image: shoe11},
  { id: 12, name: 'Jordan 1, Golden Color', price: 3500, description: 'Make a striking statement with the Air Jordan 1 in Golden Color, a dazzling twist on the classic silhouette that merges luxury with streetwear flair. This eye-catching sneaker is designed for those who dare to stand out and embrace their unique style.', image: shoe12},
  { id: 13, name: 'Jordan 1, Vermilion Color', price: 3000, description: 'Make a striking statement with the Air Jordan 1 in Vermilion Color, a dazzling twist on the classic silhouette that merges luxury with streetwear flair. This eye-catching sneaker is designed for those who dare to stand out and embrace their unique style.', image: shoe13},
  { id: 14, name: 'Jordan 4, Black Color', price: 3400, description: 'Elevate your sneaker game with the Air Jordan 4 in Black, a classic silhouette that combines timeless style with modern performance. Known for its distinctive design and unmatched comfort, the Jordan 4 is a must-have for sneaker enthusiasts and casual wearers alike.', image: shoe14},
  { id: 15, name: 'Jordan 4', price: 3400, description: 'Elevate your sneaker game with the Air Jordan 4 in Black, a classic silhouette that combines timeless style with modern performance. Known for its distinctive design and unmatched comfort, the Jordan 4 is a must-have for sneaker enthusiasts and casual wearers alike.', image: shoe15},
  { id: 16, name: 'Classy Loafers for Ladies ✨', price: 4200, description: 'Step into sophistication with our Classy Loafers for Ladies, the perfect combination of elegance and comfort. These loafers are designed to elevate any outfit, making them a versatile choice for both professional and casual settings.', image: shoe16},
  { id: 17, name: 'Gucci Loafers for Men', price: 5000, description: 'Featuring the iconic Gucci emblem and classic silhouette, these loafers exude a refined elegance that makes them suitable for both formal and casual occasions.', image: shoe17},
  { id: 18, name: 'Prada Loafers', price: 5500, description: 'Featuring a sleek silhouette and minimalist aesthetic, Prada loafers are designed to make a subtle yet impactful statement, suitable for both formal and casual occasions. Not just pair of Shoes, they are PRADA!', image: shoe18},
  { id: 19, name: 'Classy Mules for Ladies With Class', price: 5500, description: 'Crafted from premium leather or luxurious suede, these mules offer durability and a soft touch, ensuring they look and feel great wear after wear.', image: shoe19},
  { id: 20, name: 'Ladies Sandals', price: 1500, description: 'Elevate your summer style with our Shiny Sandals, the perfect blend of glamour and comfort for warm-weather outings. These sandals are designed to catch the light and attention, making them an essential addition to your footwear collection.', image: shoe20},
  { id: 21, name: 'Derby Shoes', price: 3500, description: 'Easily paired with suits, pants, or chinos, Derby shoes can transition seamlessly from business meetings to social gatherings.', image: shoe21},
  { id: 22, name: 'Derby Shoes, Hand Made', price: 4000, description: 'Each pair of Derby shoes is handmade by skilled artisans, ensuring attention to detail and superior quality in every stitch and finish.', image: shoe22},
  { id: 23, name: 'Oxford Shoes', price: 4000, description: 'Featuring stylish straps across the upper, these Oxfords add a unique touch while maintaining the traditional aesthetic that makes them a wardrobe staple.', image: shoe23},
  { id: 24, name: 'Reebok Sneakers', price: 2500, description: 'Crafted from breathable mesh and durable synthetic materials, these sneakers ensure comfort and longevity, adapting to your foot’s movements.', image: shoe24},
  { id: 25, name: 'Bushy Sandals for The Ladies', price: 1500, description: 'Crafted from high-quality fabrics and soft cushioning, these sandals provide durability and comfort for all-day wear.', image: shoe25},
  { id: 26, name: 'Nike Sport Shoes', price: 2000, description: 'Crafted from lightweight, breathable fabrics, Nike sport shoes ensure your feet stay cool and comfortable, whether you’re running, training, or playing sports.', image: shoe26},
  { id: 27, name: 'Merrell Sport Shoes', price: 2000, description: 'Featuring cushioned insoles and ergonomic designs, these shoes provide all-day comfort, making them perfect for long hikes or active days.', image: shoe27},
  { id: 28, name: 'Adidas Sport Shoes', price: 2000, description: 'Featuring Boost, Bounce, or Lightstrike cushioning, Adidas sports shoes provide exceptional energy return and support, ensuring comfort during intense workouts or long runs.', image: shoe28},
  { id: 29, name: 'Timberland Boots', price: 4500, description: 'The timeless silhouette, complete with the signature Timberland logo, adds a touch of rugged sophistication that pairs well with various outfits.', image: shoe29}
  // Add more products here
];

const ProductDetails = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product with matching ID
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState('');
  const [submittedReview, setSubmittedReview] = useState('');
  const [rating, setRating] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  //  decrement (ensure it doesn't go below 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const submitReview = () => {
    setSubmittedReview(review);
    setReview('');
  };

  // Function to display star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    // Half star
    if (halfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    // Empty stars
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i + 5} className="text-gray-300">★</span>);
    }
    return stars;
  };

  return (
    <div className="container mx-auto p-6">
      {/* This div creates the box with border and gap from the top */}
      <div className="border border-gray-300 rounded-lg p-6 mt-10 shadow-lg max-w-4xl mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
          
          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-4">ETB {product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="flex items-center mb-4">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>

            <div className="flex items-center mb-6">
              <button
                className="bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-l focus:outline-none hover:bg-gray-400"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="px-4 py-2 border-t border-b border-gray-300">{quantity}</span>
              <button
                className="bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-r focus:outline-none hover:bg-gray-400"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button className="bg-slate-700 text-white rounded-lg py-2 px-4 mt-4 hover:opacity-90">Add {quantity} to Cart</button>
          </div>

          <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
          <div className="flex mb-4">
            {/* Rating Input */}
            <span className="mr-2 text-gray-600">Your Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)}>
                <span className={star <= rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
              </button>
            ))}
          </div>
          <textarea
            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
            rows="4"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button
            className="bg-green-700 text-white rounded-lg py-2 px-4 hover:bg-green-600"
            onClick={submitReview}
          >
            Submit Review
          </button>

          {/* Display Submitted Review */}
          {submittedReview && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Your Review:</h3>
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
              <p className="mt-2">{submittedReview}</p>
            </div>
          )}

        </div>
        </div>
      </div>
    </div>
  );

};

export default ProductDetails;
