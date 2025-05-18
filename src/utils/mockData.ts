
import { Gadget } from "@/components/GadgetCard";

// Sample images for devices - using proper professional product images
const gadgetImages = [
  "https://images.unsplash.com/photo-1606041008023-472dfb5b530f?q=80&w=2788&auto=format&fit=crop", // iPhone 15 Pro
  "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=3540&auto=format&fit=crop", // Samsung Galaxy S24
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop", // MacBook Pro
  "https://images.unsplash.com/photo-1625242662167-9ba73d268139?q=80&w=2832&auto=format&fit=crop", // Dell XPS
  "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2935&auto=format&fit=crop", // iPad Pro
  "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop", // Sony Headphones
  "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=3472&auto=format&fit=crop", // Apple Watch
  "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=3387&auto=format&fit=crop", // Vivo Phone
  "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2831&auto=format&fit=crop", // Smartwatch
  "https://images.unsplash.com/photo-1564424224827-cd24b8915874?q=80&w=2289&auto=format&fit=crop", // Wireless earbuds
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2865&auto=format&fit=crop", // OPPO Phone
  "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?q=80&w=2787&auto=format&fit=crop"  // Xiaomi Tablet
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

// Sample gadget data with realistic current prices (May 2025)
export const mockGadgets: Gadget[] = [
  {
    id: 1,
    name: "iPhone 15 Pro (256GB, Titanium Blue)",
    description: "6.1-inch Super Retina XDR display, A17 Pro chip, 48MP camera system, Titanium design",
    price: 132990,
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
    price: 134990,
    platform: "Amazon",
    image: gadgetImages[1],
    rating: 4.5,
    category: "Smartphones"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra (512GB)",
    description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 200MP camera, S Pen included",
    price: 136999,
    platform: "Croma",
    image: gadgetImages[1],
    rating: 4.4,
    category: "Smartphones"
  },
  {
    id: 5,
    name: "MacBook Pro 14-inch M3 Pro",
    description: "14-inch Liquid Retina XDR display, M3 Pro chip, 16GB RAM, 512GB SSD",
    price: 169900,
    platform: "Amazon",
    image: gadgetImages[2],
    rating: 4.9,
    category: "Laptops"
  },
  {
    id: 6,
    name: "MacBook Pro 14-inch M3 Pro",
    description: "14-inch Liquid Retina XDR display, M3 Pro chip, 16GB RAM, 512GB SSD",
    price: 168990,
    platform: "Reliance Digital",
    image: gadgetImages[2],
    rating: 4.8,
    category: "Laptops"
  },
  {
    id: 7,
    name: "Dell XPS 15 (2024)",
    description: "15.6-inch 4K OLED touch display, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 4070",
    price: 229990,
    platform: "Amazon",
    image: gadgetImages[3],
    rating: 4.6,
    category: "Laptops"
  },
  {
    id: 8,
    name: "Dell XPS 15 (2024)",
    description: "15.6-inch 4K OLED touch display, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 4070",
    price: 232999,
    platform: "Flipkart",
    image: gadgetImages[3],
    rating: 4.5,
    category: "Laptops"
  },
  {
    id: 9,
    name: "iPad Pro 13-inch M2 (256GB, Wi-Fi)",
    description: "13-inch Liquid Retina XDR display, M2 chip, 256GB storage, Wi-Fi 6E",
    price: 104900,
    platform: "Amazon",
    image: gadgetImages[4],
    rating: 4.8,
    category: "Tablets"
  },
  {
    id: 10,
    name: "iPad Pro 13-inch M2 (256GB, Wi-Fi)",
    description: "13-inch Liquid Retina XDR display, M2 chip, 256GB storage, Wi-Fi 6E",
    price: 103990,
    platform: "Croma",
    image: gadgetImages[4],
    rating: 4.7,
    category: "Tablets"
  },
  {
    id: 11,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation, 30-hour battery life, LDAC and DSEE Extreme",
    price: 26990,
    platform: "Amazon",
    image: gadgetImages[5],
    rating: 4.8,
    category: "Headphones"
  },
  {
    id: 12,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation, 30-hour battery life, LDAC and DSEE Extreme",
    price: 25999,
    platform: "Flipkart",
    image: gadgetImages[5],
    rating: 4.7,
    category: "Headphones"
  },
  {
    id: 13,
    name: "Apple Watch Series 9 (GPS, 45mm)",
    description: "Always-On Retina display, S9 chip, Blood Oxygen and ECG apps, Crash Detection",
    price: 41900,
    platform: "Amazon",
    image: gadgetImages[6],
    rating: 4.7,
    category: "Smartwatches"
  },
  {
    id: 14,
    name: "Apple Watch Series 9 (GPS, 45mm)",
    description: "Always-On Retina display, S9 chip, Blood Oxygen and ECG apps, Crash Detection",
    price: 40999,
    platform: "Reliance Digital",
    image: gadgetImages[6],
    rating: 4.6,
    category: "Smartwatches"
  },
  {
    id: 15,
    name: "Vivo V30 Pro (256GB, Titanium Black)",
    description: "6.7-inch AMOLED display, MediaTek Dimensity 8200, 50MP camera system, 12GB RAM",
    price: 42999,
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
    price: 41899,
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
    price: 3499,
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
    price: 2999,
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
    price: 37999,
    platform: "Amazon",
    image: gadgetImages[10],
    rating: 4.2,
    category: "Smartphones",
    dealUrl: "https://www.amazon.in/OPPO-Reno-10-Pro"
  },
  {
    id: 20,
    name: "OPPO Reno 10 Pro (512GB, Cosmic Gray)",
    description: "6.7-inch AMOLED display, Snapdragon 778G, 50MP triple camera, 80W fast charging",
    price: 36999,
    platform: "Croma",
    image: gadgetImages[10],
    rating: 4.1,
    category: "Smartphones",
    dealUrl: "https://www.croma.com/oppo-reno-10-pro"
  },
  {
    id: 21,
    name: "boAt Rockerz 550 Bluetooth Headphones",
    description: "50mm drivers, 20 hours playback, physical noise isolation, soft padded ear cushions",
    price: 1499,
    platform: "Amazon",
    image: gadgetImages[5],
    rating: 4.3,
    category: "Headphones",
    dealUrl: "https://www.amazon.in/boat-rockerz-550"
  },
  {
    id: 22,
    name: "boAt Rockerz 550 Bluetooth Headphones",
    description: "50mm drivers, 20 hours playback, physical noise isolation, soft padded ear cushions",
    price: 1399,
    platform: "Flipkart",
    image: gadgetImages[5],
    rating: 4.2,
    category: "Headphones",
    dealUrl: "https://www.flipkart.com/boat-rockerz-550"
  },
  {
    id: 23,
    name: "boAt Airdopes 141 TWS Earbuds",
    description: "42 hours playback, BEAST mode for gaming, IPX4 water resistance, Type-C charging",
    price: 1099,
    platform: "Amazon",
    image: gadgetImages[9],
    rating: 4.1,
    category: "Headphones",
    dealUrl: "https://www.amazon.in/boat-airdopes-141"
  },
  {
    id: 24,
    name: "boAt Airdopes 141 TWS Earbuds",
    description: "42 hours playback, BEAST mode for gaming, IPX4 water resistance, Type-C charging",
    price: 999,
    platform: "Croma",
    image: gadgetImages[9],
    rating: 4.0,
    category: "Headphones",
    dealUrl: "https://www.croma.com/boat-airdopes-141"
  },
  {
    id: 25,
    name: "Xiaomi Pad 6 (8GB+256GB)",
    description: "11-inch 2.8K display, Snapdragon 870, Quad speakers, 8840mAh battery, 33W charging",
    price: 26999,
    platform: "Amazon",
    image: gadgetImages[11],
    rating: 4.5,
    category: "Tablets",
    dealUrl: "https://www.amazon.in/xiaomi-pad-6"
  },
  {
    id: 26,
    name: "Xiaomi Pad 6 (8GB+256GB)",
    description: "11-inch 2.8K display, Snapdragon 870, Quad speakers, 8840mAh battery, 33W charging",
    price: 25999,
    platform: "Flipkart",
    image: gadgetImages[11],
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
