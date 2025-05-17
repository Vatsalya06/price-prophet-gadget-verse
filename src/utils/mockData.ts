import { Gadget } from "@/components/GadgetCard";

// Sample images for devices
const gadgetImages = [
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2942&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585362028213-d6631d873514?q=80&w=2788&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=2788&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2564&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2788&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=2874&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606041008023-472dfb5b530f?q=80&w=2788&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1978&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564424224827-cd24b8915874?q=80&w=2289&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578942759211-20c9c74aa4f7?q=80&w=2187&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=2267&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563826904172-56d186eaa0d4?q=80&w=1974&auto=format&fit=crop"
];

// Sample platforms
const platforms = ["Amazon", "Flipkart", "Croma", "Reliance Digital", "Myntra", "Tata Cliq"];

// Sample deal URLs
const sampleDealUrls = {
  "Amazon": "https://www.amazon.in/dp/B071HWTHBW",
  "Flipkart": "https://www.flipkart.com/product/p/itme",
  "Croma": "https://www.croma.com/product/p/1234",
  "Reliance Digital": "https://www.reliancedigital.in/product/p/4321",
  "Myntra": "https://www.myntra.com/product/p/5678",
  "Tata Cliq": "https://www.tatacliq.com/product/p/8765"
};

// Sample gadget data
export const mockGadgets: Gadget[] = [
  {
    id: 1,
    name: "iPhone 15 Pro (256GB, Titanium Blue)",
    description: "6.1-inch Super Retina XDR display, A17 Pro chip, 48MP camera system, Titanium design",
    price: 134900,
    platform: "Amazon",
    image: gadgetImages[0],
    rating: 4.7,
    category: "Smartphones"
  },
  {
    id: 2,
    name: "iPhone 15 Pro (256GB, Titanium Blue)",
    description: "6.1-inch Super Retina XDR display, A17 Pro chip, 48MP camera system, Titanium design",
    price: 133999,
    platform: "Flipkart",
    image: gadgetImages[0],
    rating: 4.6,
    category: "Smartphones"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra (512GB)",
    description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 200MP camera, S Pen included",
    price: 129999,
    platform: "Amazon",
    image: gadgetImages[1],
    rating: 4.5,
    category: "Smartphones"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra (512GB)",
    description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 200MP camera, S Pen included",
    price: 131999,
    platform: "Croma",
    image: gadgetImages[1],
    rating: 4.4,
    category: "Smartphones"
  },
  {
    id: 5,
    name: "MacBook Pro 14-inch M3 Pro",
    description: "14-inch Liquid Retina XDR display, M3 Pro chip, 16GB RAM, 512GB SSD",
    price: 199900,
    platform: "Amazon",
    image: gadgetImages[2],
    rating: 4.9,
    category: "Laptops"
  },
  {
    id: 6,
    name: "MacBook Pro 14-inch M3 Pro",
    description: "14-inch Liquid Retina XDR display, M3 Pro chip, 16GB RAM, 512GB SSD",
    price: 198990,
    platform: "Reliance Digital",
    image: gadgetImages[2],
    rating: 4.8,
    category: "Laptops"
  },
  {
    id: 7,
    name: "Dell XPS 15 (2024)",
    description: "15.6-inch 4K OLED touch display, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 4070",
    price: 249999,
    platform: "Amazon",
    image: gadgetImages[3],
    rating: 4.6,
    category: "Laptops"
  },
  {
    id: 8,
    name: "Dell XPS 15 (2024)",
    description: "15.6-inch 4K OLED touch display, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 4070",
    price: 252999,
    platform: "Flipkart",
    image: gadgetImages[3],
    rating: 4.5,
    category: "Laptops"
  },
  {
    id: 9,
    name: "iPad Pro 13-inch M2 (256GB, Wi-Fi)",
    description: "13-inch Liquid Retina XDR display, M2 chip, 256GB storage, Wi-Fi 6E",
    price: 119900,
    platform: "Amazon",
    image: gadgetImages[4],
    rating: 4.8,
    category: "Tablets"
  },
  {
    id: 10,
    name: "iPad Pro 13-inch M2 (256GB, Wi-Fi)",
    description: "13-inch Liquid Retina XDR display, M2 chip, 256GB storage, Wi-Fi 6E",
    price: 118990,
    platform: "Croma",
    image: gadgetImages[4],
    rating: 4.7,
    category: "Tablets"
  },
  {
    id: 11,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation, 30-hour battery life, LDAC and DSEE Extreme",
    price: 29990,
    platform: "Amazon",
    image: gadgetImages[5],
    rating: 4.8,
    category: "Headphones"
  },
  {
    id: 12,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation, 30-hour battery life, LDAC and DSEE Extreme",
    price: 28999,
    platform: "Flipkart",
    image: gadgetImages[5],
    rating: 4.7,
    category: "Headphones"
  },
  {
    id: 13,
    name: "Apple Watch Series 9 (GPS, 45mm)",
    description: "Always-On Retina display, S9 chip, Blood Oxygen and ECG apps, Crash Detection",
    price: 45900,
    platform: "Amazon",
    image: gadgetImages[6],
    rating: 4.7,
    category: "Smartwatches"
  },
  {
    id: 14,
    name: "Apple Watch Series 9 (GPS, 45mm)",
    description: "Always-On Retina display, S9 chip, Blood Oxygen and ECG apps, Crash Detection",
    price: 44999,
    platform: "Reliance Digital",
    image: gadgetImages[6],
    rating: 4.6,
    category: "Smartwatches"
  },
  {
    id: 15,
    name: "Vivo V30 Pro (256GB, Titanium Black)",
    description: "6.7-inch AMOLED display, MediaTek Dimensity 8200, 50MP camera system, 12GB RAM",
    price: 47999,
    platform: "Flipkart",
    image: gadgetImages[7],
    rating: 4.3,
    category: "Smartphones",
    dealUrl: "https://www.flipkart.com/vivo-v30-pro"
  },
  {
    id: 16,
    name: "Vivo V30 Pro (256GB, Titanium Black)",
    description: "6.7-inch AMOLED display, MediaTek Dimensity 8200, 50MP camera system, 12GB RAM",
    price: 46899,
    platform: "Amazon",
    image: gadgetImages[7],
    rating: 4.2,
    category: "Smartphones",
    dealUrl: "https://www.amazon.in/vivo-V30-Pro"
  },
  {
    id: 17,
    name: "Noise ColorFit Ultra 3 Smartwatch",
    description: "1.96-inch AMOLED display, IP67 water resistant, 100+ sports modes, 7-day battery life",
    price: 4999,
    platform: "Amazon",
    image: gadgetImages[8],
    rating: 4.4,
    category: "Smartwatches",
    dealUrl: "https://www.amazon.in/noise-colorfit-ultra-3"
  },
  {
    id: 18,
    name: "Noise ColorFit Ultra 3 Smartwatch",
    description: "1.96-inch AMOLED display, IP67 water resistant, 100+ sports modes, 7-day battery life",
    price: 4499,
    platform: "Flipkart",
    image: gadgetImages[8],
    rating: 4.3,
    category: "Smartwatches",
    dealUrl: "https://www.flipkart.com/noise-colorfit-ultra-3"
  },
  {
    id: 19,
    name: "OPPO Reno 10 Pro (512GB, Cosmic Gray)",
    description: "6.7-inch AMOLED display, Snapdragon 778G, 50MP triple camera, 80W fast charging",
    price: 39999,
    platform: "Amazon",
    image: gadgetImages[9],
    rating: 4.2,
    category: "Smartphones",
    dealUrl: "https://www.amazon.in/OPPO-Reno-10-Pro"
  },
  {
    id: 20,
    name: "OPPO Reno 10 Pro (512GB, Cosmic Gray)",
    description: "6.7-inch AMOLED display, Snapdragon 778G, 50MP triple camera, 80W fast charging",
    price: 38999,
    platform: "Croma",
    image: gadgetImages[9],
    rating: 4.1,
    category: "Smartphones",
    dealUrl: "https://www.croma.com/oppo-reno-10-pro"
  },
  {
    id: 21,
    name: "boAt Rockerz 550 Bluetooth Headphones",
    description: "50mm drivers, 20 hours playback, physical noise isolation, soft padded ear cushions",
    price: 1999,
    platform: "Amazon",
    image: gadgetImages[10],
    rating: 4.3,
    category: "Headphones",
    dealUrl: "https://www.amazon.in/boat-rockerz-550"
  },
  {
    id: 22,
    name: "boAt Rockerz 550 Bluetooth Headphones",
    description: "50mm drivers, 20 hours playback, physical noise isolation, soft padded ear cushions",
    price: 1899,
    platform: "Flipkart",
    image: gadgetImages[10],
    rating: 4.2,
    category: "Headphones",
    dealUrl: "https://www.flipkart.com/boat-rockerz-550"
  },
  {
    id: 23,
    name: "boAt Airdopes 141 TWS Earbuds",
    description: "42 hours playback, BEAST mode for gaming, IPX4 water resistance, Type-C charging",
    price: 1499,
    platform: "Amazon",
    image: gadgetImages[11],
    rating: 4.1,
    category: "Headphones",
    dealUrl: "https://www.amazon.in/boat-airdopes-141"
  },
  {
    id: 24,
    name: "boAt Airdopes 141 TWS Earbuds",
    description: "42 hours playback, BEAST mode for gaming, IPX4 water resistance, Type-C charging",
    price: 1399,
    platform: "Croma",
    image: gadgetImages[11],
    rating: 4.0,
    category: "Headphones",
    dealUrl: "https://www.croma.com/boat-airdopes-141"
  },
  {
    id: 25,
    name: "Xiaomi Pad 6 (8GB+256GB)",
    description: "11-inch 2.8K display, Snapdragon 870, Quad speakers, 8840mAh battery, 33W charging",
    price: 29999,
    platform: "Amazon",
    image: gadgetImages[12],
    rating: 4.5,
    category: "Tablets",
    dealUrl: "https://www.amazon.in/xiaomi-pad-6"
  },
  {
    id: 26,
    name: "Xiaomi Pad 6 (8GB+256GB)",
    description: "11-inch 2.8K display, Snapdragon 870, Quad speakers, 8840mAh battery, 33W charging",
    price: 28999,
    platform: "Flipkart",
    image: gadgetImages[12],
    rating: 4.4,
    category: "Tablets",
    dealUrl: "https://www.flipkart.com/xiaomi-pad-6"
  }
];

// Generate mock price history data
const generatePriceHistory = (productId: number, basePrice: number) => {
  const now = new Date();
  const data = [];

  // Generate daily data for the past year
  for (let i = 365; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);
    
    // Random price fluctuations
    const dayOfWeek = date.getDay();
    const isHoliday = (date.getMonth() === 10 && date.getDate() >= 25) || // Black Friday
                     (date.getMonth() === 11 && date.getDate() >= 15); // Holiday season
    
    const dateString = date.toISOString().substring(0, 10);
    const entry: any = { date: dateString };
    
    // Assign prices for different platforms
    platforms.forEach(platform => {
      // Only add a price for this platform with 70% chance
      if (Math.random() < 0.7) {
        // Base price with random fluctuation
        let price = basePrice * (0.95 + Math.random() * 0.1);
        
        // Weekend discount
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          price *= 0.98;
        }
        
        // Holiday discount
        if (isHoliday) {
          price *= 0.9;
        }
        
        // Sales events
        if (
          (date.getMonth() === 0 && date.getDate() <= 7) || // New Year
          (date.getMonth() === 6 && date.getDate() >= 10 && date.getDate() <= 17) || // Prime Day
          (date.getMonth() === 9 && date.getDate() >= 5 && date.getDate() <= 12) // Diwali Sale
        ) {
          price *= 0.92;
        }
        
        entry[platform] = Math.round(price);
      }
    });
    
    data.push(entry);
  }

  return {
    productId,
    productName: mockGadgets.find(g => g.id === productId)?.name || "",
    data
  };
};

// Generate trends data for each unique product
const uniqueProductIds = [...new Set(mockGadgets.map(g => g.id))];
export const mockTrends = uniqueProductIds.map(id => {
  const gadget = mockGadgets.find(g => g.id === id);
  return generatePriceHistory(id, gadget?.price || 10000);
});
