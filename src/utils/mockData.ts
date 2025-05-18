import { Gadget } from "@/components/GadgetCard";

// Sample images for devices - using proper professional product images
const gadgetImages = [
  "https://images.unsplash.com/photo-1606041008023-472dfb5b530f?q=80&w=2788&auto=format&fit=crop", // iPhone 15 Pro
  "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?q=80&w=3540&auto=format&fit=crop", // Samsung Galaxy S24
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop", // MacBook Pro
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop", // Dell XPS - Updated to a more appropriate image
  "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2935&auto=format&fit=crop", // iPad Pro
  "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop", // Sony Headphones
  "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=3472&auto=format&fit=crop", // Apple Watch
  "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=3387&auto=format&fit=crop", // Vivo Phone
  "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2027&auto=format&fit=crop", // Smartwatch - Updated
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop", // Wireless earbuds - Updated
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop", // OPPO Phone - Updated
  "https://images.unsplash.com/photo-1632570381156-0547be9239ce?q=80&w=2087&auto=format&fit=crop"  // Xiaomi Tablet - Updated
];

// Sample platforms
const platforms = ["Amazon", "Flipkart", "Croma", "Reliance Digital", "Myntra", "Tata Cliq"];

// Updated deal URLs with valid links
const sampleDealUrls = {
  "Amazon": "https://www.amazon.in/",
  "Flipkart": "https://www.flipkart.com/",
  "Croma": "https://www.croma.com/",
  "Reliance Digital": "https://www.reliancedigital.in/",
  "Myntra": "https://www.myntra.com/",
  "Tata Cliq": "https://www.tatacliq.com/"
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
    category: "Smartphones",
    dealUrl: sampleDealUrls["Amazon"] + "Apple-iPhone-15-Pro-256GB/dp/B0CHX2F5QT"
  },
  {
    id: 2,
    name: "iPhone 15 Pro (256GB, Titanium Blue)",
    description: "6.1-inch Super Retina XDR display, A17 Pro chip, 48MP camera system, Titanium design",
    price: 133999,
    platform: "Flipkart",
    image: gadgetImages[0],
    rating: 4.6,
    category: "Smartphones",
    dealUrl: sampleDealUrls["Flipkart"] + "apple-iphone-15-pro-blue-256-gb/p/itm6ac88022762be"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra (512GB)",
    description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 200MP camera, S Pen included",
    price: 134990,
    platform: "Amazon",
    image: gadgetImages[1],
    rating: 4.5,
    category: "Smartphones",
    dealUrl: sampleDealUrls["Amazon"] + "Samsung-Galaxy-S24-Ultra-Titanium/dp/B0CT14RYRH"
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra (512GB)",
    description: "6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3, 200MP camera, S Pen included",
    price: 136999,
    platform: "Croma",
    image: gadgetImages[1],
    rating: 4.4,
    category: "Smartphones",
    dealUrl: sampleDealUrls["Croma"] + "samsung-galaxy-s24-ultra-5g-512gb-rom-12gb-ram-sm-s928-titanium-black/p/268377"
  },
  {
    id: 5,
    name: "MacBook Pro 14-inch M3 Pro",
    description: "14-inch Liquid Retina XDR display, M3 Pro chip, 16GB RAM, 512GB SSD",
    price: 169900,
    platform: "Amazon",
    image: gadgetImages[2],
    rating: 4.9,
    category: "Laptops",
    dealUrl: sampleDealUrls["Amazon"] + "2023-Apple-MacBook-14-inch-12%E2%80%91core/dp/B0CM5L86JH"
  },
  {
    id: 6,
    name: "MacBook Pro 14-inch M3 Pro",
    description: "14-inch Liquid Retina XDR display, M3 Pro chip, 16GB RAM, 512GB SSD",
    price: 168990,
    platform: "Reliance Digital",
    image: gadgetImages[2],
    rating: 4.8,
    category: "Laptops",
    dealUrl: sampleDealUrls["Reliance Digital"] + "apple-macbook-pro-m3-pro-chip-14-inch-liquid-retina-xdr-display-16-gb-ram-512-gb-ssd-macos-sonoma-space-black-/p/493177730"
  },
  {
    id: 7,
    name: "Dell XPS 15 (2024)",
    description: "15.6-inch 4K OLED touch display, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 4070",
    price: 229990,
    platform: "Amazon",
    image: gadgetImages[3],
    rating: 4.6,
    category: "Laptops",
    dealUrl: sampleDealUrls["Amazon"] + "Dell-XPS-9530-i9-13900H-Graphics/dp/B0BYZ9Y82S"
  },
  {
    id: 8,
    name: "Dell XPS 15 (2024)",
    description: "15.6-inch 4K OLED touch display, Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 4070",
    price: 232999,
    platform: "Flipkart",
    image: gadgetImages[3],
    rating: 4.5,
    category: "Laptops",
    dealUrl: sampleDealUrls["Flipkart"] + "dell-core-i9-13th-gen-32-gb-1-tb-ssd-windows-11-home-16-gb-graphics-nvidia-geforce-rtx-4070-xps-9530-thin-light-laptop/p/itm02ef6f6859130"
  },
  {
    id: 9,
    name: "iPad Pro 13-inch M2 (256GB, Wi-Fi)",
    description: "13-inch Liquid Retina XDR display, M2 chip, 256GB storage, Wi-Fi 6E",
    price: 104900,
    platform: "Amazon",
    image: gadgetImages[4],
    rating: 4.8,
    category: "Tablets",
    dealUrl: sampleDealUrls["Amazon"] + "Apple-13-inch-iPad-Pro-Wi-Fi/dp/B0C71RJSKJ"
  },
  {
    id: 10,
    name: "iPad Pro 13-inch M2 (256GB, Wi-Fi)",
    description: "13-inch Liquid Retina XDR display, M2 chip, 256GB storage, Wi-Fi 6E",
    price: 103990,
    platform: "Croma",
    image: gadgetImages[4],
    rating: 4.7,
    category: "Tablets",
    dealUrl: sampleDealUrls["Croma"] + "apple-ipad-pro-m2-chip-13-inch-wifi-tablet-256gb-space-grey-/p/270396"
  },
  {
    id: 11,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation, 30-hour battery life, LDAC and DSEE Extreme",
    price: 26990,
    platform: "Amazon",
    image: gadgetImages[5],
    rating: 4.8,
    category: "Headphones",
    dealUrl: sampleDealUrls["Amazon"] + "Sony-WH-1000XM5-Cancelling-Wireless-Headphones/dp/B09Y2MYL5C"
  },
  {
    id: 12,
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    description: "Industry-leading noise cancellation, 30-hour battery life, LDAC and DSEE Extreme",
    price: 25999,
    platform: "Flipkart",
    image: gadgetImages[5],
    rating: 4.7,
    category: "Headphones",
    dealUrl: sampleDealUrls["Flipkart"] + "sony-wh-1000xm5-bluetooth-headset/p/itm0493f288f9451"
  },
  {
    id: 13,
    name: "Apple Watch Series 9 (GPS, 45mm)",
    description: "Always-On Retina display, S9 chip, Blood Oxygen and ECG apps, Crash Detection",
    price: 41900,
    platform: "Amazon",
    image: gadgetImages[6],
    rating: 4.7,
    category: "Smartwatches",
    dealUrl: sampleDealUrls["Amazon"] + "Apple-Watch-Series-GPS-Aluminium/dp/B0CHXC9PW4"
  },
  {
    id: 14,
    name: "Apple Watch Series 9 (GPS, 45mm)",
    description: "Always-On Retina display, S9 chip, Blood Oxygen and ECG apps, Crash Detection",
    price: 40999,
    platform: "Reliance Digital",
    image: gadgetImages[6],
    rating: 4.6,
    category: "Smartwatches",
    dealUrl: sampleDealUrls["Reliance Digital"] + "apple-watch-series-9-gps-45mm-aluminium-case-with-sport-band-smart-watch/p/493177711"
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
    dealUrl: sampleDealUrls["Flipkart"] + "vivo-v30-pro-5g-titanium-black-256-gb/p/itm4d7d5d7ea3d8c"
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
    dealUrl: sampleDealUrls["Amazon"] + "Vivo-V30-Pro-Titanium-Storage/dp/B0CQVN22P8"
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
    dealUrl: sampleDealUrls["Amazon"] + "Noise-ColorFit-Ultra-Bluetooth-Calling/dp/B0B5LC6FLK"
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
    dealUrl: sampleDealUrls["Flipkart"] + "noise-colorfit-ultra-3-1-96-amoled-display-with-calling-always-s/p/itmfeb3bcfb241ce"
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
    dealUrl: sampleDealUrls["Amazon"] + "OPPO-Reno10-Silvery-Storage-Charging/dp/B07WGPKPT4"
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
    dealUrl: sampleDealUrls["Croma"] + "oppo-reno10-pro-5g-256-gb-rom-12-gb-ram-cpv2303-silvery-grey/p/270691"
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
    dealUrl: sampleDealUrls["Amazon"] + "Rockerz-550-Headphone-Recreated-Additional/dp/B0856HNMR7"
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
    dealUrl: sampleDealUrls["Flipkart"] + "boat-rockerz-550-bluetooth-headset/p/itm8023685e7861f"
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
    dealUrl: sampleDealUrls["Amazon"] + "Airdopes-141-42H-Playtime-Resistance/dp/B09N3ZNHTY"
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
    dealUrl: sampleDealUrls["Croma"] + "boat-airdopes-141-true-wireless-earbuds-with-mic-black/p/250300"
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
    dealUrl: sampleDealUrls["Amazon"] + "Xiaomi-Pad-Qualcomm-Snapdragon-Dolby/dp/B0C794Y6NL"
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
    dealUrl: sampleDealUrls["Flipkart"] + "xiaomi-pad-6-8-gb-ram-256-gb-rom-11-inch-with-wi-fi-only/p/itm2094ec0267507"
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
