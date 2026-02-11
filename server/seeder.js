import mongoose from "mongoose";
import dotenv from "dotenv";
import Products from "./models/productModel.js";

dotenv.config();


const sampleProducts = [
  // Men's Shoes
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    brand: "Nike",
    title: "Nike Air Max 270 Men's Running Shoes",
    rating: 4.5,
    reviews: 1250,
    sellPrice: 7995,
    orders: "450",
    mrp: "9995",
    discount: 20,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    brand: "Adidas",
    title: "Adidas Ultraboost 22 Men's Running Shoes",
    rating: 4.7,
    reviews: 890,
    sellPrice: 10999,
    orders: "320",
    mrp: "13999",
    discount: 21,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
    brand: "Puma",
    title: "Puma RS-X3 Men's Sneakers",
    rating: 4.3,
    reviews: 560,
    sellPrice: 5499,
    orders: "280",
    mrp: "6999",
    discount: 21,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    brand: "Reebok",
    title: "Reebok Classic Leather Men's Shoes",
    rating: 4.4,
    reviews: 780,
    sellPrice: 4499,
    orders: "390",
    mrp: "5999",
    discount: 25,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    brand: "Nike",
    title: "Nike Revolution 6 Men's Running Shoes",
    rating: 4.2,
    reviews: 920,
    sellPrice: 3995,
    orders: "510",
    mrp: "4995",
    discount: 20,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    brand: "Adidas",
    title: "Adidas Runfalcon 2.0 Men's Shoes",
    rating: 4.1,
    reviews: 670,
    sellPrice: 2999,
    orders: "620",
    mrp: "3999",
    discount: 25,
    category: "men"
  },

  // Women's Shoes
  {
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    brand: "Nike",
    title: "Nike Air Force 1 '07 Women's Shoes",
    rating: 4.8,
    reviews: 2100,
    sellPrice: 8995,
    orders: "780",
    mrp: "10995",
    discount: 18,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae",
    brand: "Adidas",
    title: "Adidas Grand Court Women's Sneakers",
    rating: 4.5,
    reviews: 890,
    sellPrice: 3999,
    orders: "450",
    mrp: "4999",
    discount: 20,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    brand: "Puma",
    title: "Puma Carina Women's Sneakers",
    rating: 4.6,
    reviews: 750,
    sellPrice: 3499,
    orders: "380",
    mrp: "4499",
    discount: 22,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1562183241-b937e95585b6",
    brand: "Reebok",
    title: "Reebok Princess Women's Shoes",
    rating: 4.4,
    reviews: 620,
    sellPrice: 3999,
    orders: "290",
    mrp: "4999",
    discount: 20,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6",
    brand: "Skechers",
    title: "Skechers Go Walk Joy Women's Shoes",
    rating: 4.7,
    reviews: 1150,
    sellPrice: 4299,
    orders: "590",
    mrp: "5499",
    discount: 22,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31",
    brand: "Nike",
    title: "Nike Tanjun Women's Running Shoes",
    rating: 4.3,
    reviews: 540,
    sellPrice: 4995,
    orders: "310",
    mrp: "5995",
    discount: 17,
    category: "women"
  },

  // Kids' Shoes
  {
    img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
    brand: "Nike",
    title: "Nike Flex Runner 2 Kids' Running Shoes",
    rating: 4.6,
    reviews: 340,
    sellPrice: 3495,
    orders: "210",
    mrp: "3995",
    discount: 13,
    category: "child"
  },
  {
    img: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c",
    brand: "Adidas",
    title: "Adidas Advantage Kids' Shoes",
    rating: 4.4,
    reviews: 280,
    sellPrice: 2999,
    orders: "190",
    mrp: "3499",
    discount: 14,
    category: "child"
  },
  {
    img: "https://images.unsplash.com/photo-1624004109559-5bce69f5f962",
    brand: "Puma",
    title: "Puma Electron Kids' Running Shoes",
    rating: 4.2,
    reviews: 190,
    sellPrice: 2499,
    orders: "150",
    mrp: "2999",
    discount: 17,
    category: "child"
  },
  {
    img: "https://images.unsplash.com/photo-1622043175799-171aeaa19c7c",
    brand: "Reebok",
    title: "Reebok Rush 3.0 Kids' Shoes",
    rating: 4.3,
    reviews: 160,
    sellPrice: 2799,
    orders: "120",
    mrp: "3299",
    discount: 15,
    category: "child"
  },
  {
    img: "https://images.unsplash.com/photo-1622043175712-e3876a1fec3d",
    brand: "Skechers",
    title: "Skechers Skech-Air Kids' Shoes",
    rating: 4.5,
    reviews: 220,
    sellPrice: 3299,
    orders: "140",
    mrp: "3999",
    discount: 18,
    category: "child"
  },
  {
    img: "https://images.unsplash.com/photo-1622043175799-171aeaa19c7c",
    brand: "Bata",
    title: "Bata Powerpuff Girls Kids' Shoes",
    rating: 4.1,
    reviews: 130,
    sellPrice: 1899,
    orders: "110",
    mrp: "2299",
    discount: 17,
    category: "child"
  },

  // Additional Men's Shoes for variety
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    brand: "Nike",
    title: "Nike Air Jordan 1 Mid Men's Shoes",
    rating: 4.9,
    reviews: 3100,
    sellPrice: 12995,
    orders: "890",
    mrp: "15995",
    discount: 19,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
    brand: "Adidas",
    title: "Adidas NMD R1 Men's Running Shoes",
    rating: 4.6,
    reviews: 1450,
    sellPrice: 9999,
    orders: "520",
    mrp: "12999",
    discount: 23,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
    brand: "New Balance",
    title: "New Balance 574 Men's Lifestyle Shoes",
    rating: 4.5,
    reviews: 890,
    sellPrice: 6499,
    orders: "340",
    mrp: "7999",
    discount: 19,
    category: "men"
  },

  // Additional Women's Shoes
  {
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
    brand: "Crocs",
    title: "Crocs Classic Clogs Women's",
    rating: 4.4,
    reviews: 2150,
    sellPrice: 2995,
    orders: "950",
    mrp: "3495",
    discount: 14,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1584735175097-719d848f8449",
    brand: "Vans",
    title: "Vans Old Skool Women's Sneakers",
    rating: 4.7,
    reviews: 1780,
    sellPrice: 4999,
    orders: "670",
    mrp: "5999",
    discount: 17,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1599220141905-4003a96b9c2b",
    brand: "Hush Puppies",
    title: "Hush Puppies Women's Casual Shoes",
    rating: 4.3,
    reviews: 430,
    sellPrice: 3999,
    orders: "210",
    mrp: "4999",
    discount: 20,
    category: "women"
  }
];

// Import data to database
const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");
    
    // Delete existing products
    await Products.deleteMany();
    console.log("Existing products deleted...");
    
    // Insert new products
    await Products.insertMany(sampleProducts);
    console.log(`${sampleProducts.length} products added successfully!`);
    
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Delete all data
const destroyData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");
    
    await Products.deleteMany();
    console.log("All products deleted successfully!");
    
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};


if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}