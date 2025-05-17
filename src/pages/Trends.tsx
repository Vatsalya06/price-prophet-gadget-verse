
import { useEffect, useState } from "react";
import { fetchTrends, fetchGadgets } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import PriceChart from "@/components/PriceChart";
import GadgetCard, { Gadget } from "@/components/GadgetCard";
import { Input } from "@/components/ui/input";
import { Search, ArrowDown, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

interface PriceHistory {
  productId: number;
  productName: string;
  data: any[];
}

const Trends = () => {
  const [trendsData, setTrendsData] = useState<PriceHistory[]>([]);
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [selectedGadget, setSelectedGadget] = useState<Gadget | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredGadgets, setFilteredGadgets] = useState<Gadget[]>([]);
  const location = useLocation();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [gadgetsData, trendsResult] = await Promise.all([
          fetchGadgets(),
          fetchTrends()
        ]);
        
        setGadgets(gadgetsData);
        setFilteredGadgets(gadgetsData);
        
        // Ensure trendsResult is properly typed
        const typedTrendsData = trendsResult as PriceHistory[];
        setTrendsData(typedTrendsData);
        
        // Check URL params for product id
        const params = new URLSearchParams(location.search);
        const productId = params.get('product');
        
        if (productId) {
          const gadget = gadgetsData.find(g => g.id === Number(productId));
          if (gadget) {
            setSelectedGadget(gadget);
          } else {
            // Select the first gadget by default
            if (gadgetsData.length > 0) {
              setSelectedGadget(gadgetsData[0]);
            }
          }
        } else {
          // Select the first gadget by default
          if (gadgetsData.length > 0) {
            setSelectedGadget(gadgetsData[0]);
          }
        }
      } catch (error) {
        console.error("Error loading trends data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [location.search]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredGadgets(gadgets);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = gadgets.filter(gadget => 
      gadget.name.toLowerCase().includes(lowerCaseQuery) ||
      gadget.description.toLowerCase().includes(lowerCaseQuery) ||
      gadget.category.toLowerCase().includes(lowerCaseQuery)
    );
    
    setFilteredGadgets(filtered);
  }, [searchQuery, gadgets]);

  const getSelectedGadgetTrend = () => {
    if (!selectedGadget || !trendsData.length) return { productName: "", data: [] };
    
    const trend = trendsData.find(t => t.productId === selectedGadget.id);
    return trend || { productName: selectedGadget.name, data: [] };
  };

  const handleGadgetSelect = (gadget: Gadget) => {
    setSelectedGadget(gadget);
  };
  
  // Function to analyze price trends and make predictions
  const analyzePriceTrends = () => {
    const trend = getSelectedGadgetTrend();
    if (!trend?.data?.length || trend.data.length < 2) return null;
    
    // Get last 30 data points or all if less than 30
    const recentData = trend.data.slice(-30);
    
    // Find min and max prices
    let minPrice = Infinity;
    let maxPrice = 0;
    let minDate = '';
    let maxDate = '';
    let currentPlatform = '';
    
    // Calculate average price over time
    let sum = 0;
    let count = 0;
    
    // Find the most recent price for each platform
    const latestPrices: {[key: string]: number} = {};
    
    recentData.forEach(point => {
      Object.entries(point).forEach(([key, value]) => {
        if (key !== 'date' && typeof value === 'number') {
          // Track min/max
          if (value < minPrice) {
            minPrice = value;
            minDate = point.date;
          }
          if (value > maxPrice) {
            maxPrice = value;
            maxDate = point.date;
          }
          
          // Sum for average
          sum += value;
          count++;
          
          // Track latest price per platform
          latestPrices[key] = value;
        }
      });
    });
    
    // Find cheapest platform
    if (Object.keys(latestPrices).length > 0) {
      currentPlatform = Object.entries(latestPrices).reduce(
        (min, [platform, price]) => price < min[1] ? [platform, price] : min,
        ['', Infinity]
      )[0];
    }
    
    // Calculate average
    const avgPrice = count > 0 ? sum / count : 0;
    
    // Calculate trend (simple: compare first half average to second half average)
    const midpoint = Math.floor(recentData.length / 2);
    const firstHalf = recentData.slice(0, midpoint);
    const secondHalf = recentData.slice(midpoint);
    
    let firstHalfAvg = 0;
    let firstHalfCount = 0;
    let secondHalfAvg = 0;
    let secondHalfCount = 0;
    
    firstHalf.forEach(point => {
      Object.entries(point).forEach(([key, value]) => {
        if (key !== 'date' && typeof value === 'number') {
          firstHalfAvg += value;
          firstHalfCount++;
        }
      });
    });
    
    secondHalf.forEach(point => {
      Object.entries(point).forEach(([key, value]) => {
        if (key !== 'date' && typeof value === 'number') {
          secondHalfAvg += value;
          secondHalfCount++;
        }
      });
    });
    
    firstHalfAvg = firstHalfCount > 0 ? firstHalfAvg / firstHalfCount : 0;
    secondHalfAvg = secondHalfCount > 0 ? secondHalfAvg / secondHalfCount : 0;
    
    // Determine trend direction
    const trendDirection = secondHalfAvg < firstHalfAvg ? 'down' : 'up';
    const trendPercentage = firstHalfAvg > 0 
      ? Math.abs(((secondHalfAvg - firstHalfAvg) / firstHalfAvg) * 100).toFixed(1) 
      : '0';
    
    // Predict future price movement (simplified)
    let prediction = '';
    const now = new Date();
    const month = now.getMonth();
    
    // Seasonal factors (simplified)
    if (trendDirection === 'down') {
      if (month >= 9 && month <= 11) {
        prediction = "Prices are likely to continue decreasing into the holiday season.";
      } else if (month >= 3 && month <= 5) {
        prediction = "Expect further price drops during upcoming summer sales.";
      } else {
        prediction = "The downward trend may continue for a few more weeks.";
      }
    } else {
      if (month >= 0 && month <= 1) {
        prediction = "Prices typically stabilize or drop again after February.";
      } else if (month >= 6 && month <= 8) {
        prediction = "Watch for price drops in the upcoming festival season (September-October).";
      } else {
        prediction = "Prices may continue rising short-term, consider setting a price alert now.";
      }
    }
    
    return {
      minPrice,
      minDate,
      maxPrice,
      maxDate,
      avgPrice,
      trendDirection,
      trendPercentage,
      prediction,
      currentPlatform
    };
  };

  const priceAnalysis = analyzePriceTrends();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-prophet-blue to-prophet-orange bg-clip-text text-transparent">
          Price Trends
        </h1>
        <p className="text-gray-600 mb-4">
          Track price history and identify the best time to buy
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search gadgets..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 space-y-4">
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-24 rounded-lg bg-gray-100 animate-pulse-slow"></div>
                  ))}
                </div>
              ) : (
                filteredGadgets.map(gadget => (
                  <Card 
                    key={gadget.id}
                    className={`cursor-pointer transition-all border-l-4 ${
                      selectedGadget?.id === gadget.id 
                        ? 'border-l-prophet-blue shadow-md' 
                        : 'border-transparent'
                    }`}
                    onClick={() => handleGadgetSelect(gadget)}
                  >
                    <CardContent className="p-3 flex items-center gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                        <img 
                          src={gadget.image} 
                          alt={gadget.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm line-clamp-1">{gadget.name}</h3>
                        <p className="text-prophet-blue font-bold text-sm">₹{gadget.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">{gadget.platform}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
              
              {!isLoading && filteredGadgets.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No gadgets found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          {selectedGadget ? (
            <div className="space-y-6">
              <PriceChart 
                productName={selectedGadget.name}
                data={getSelectedGadgetTrend().data}
                isLoading={isLoading}
              />
              
              {/* Price Analysis Section */}
              {priceAnalysis && (
                <Card className="bg-gray-50 border">
                  <CardContent className="p-5 space-y-4">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      Price Analysis & Prediction
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant={priceAnalysis.trendDirection === 'down' ? 'default' : 'outline'} className={priceAnalysis.trendDirection === 'down' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}>
                            {priceAnalysis.trendDirection === 'down' ? (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            ) : (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            )}
                            Trend: {priceAnalysis.trendDirection === 'down' ? 'Falling' : 'Rising'}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Prices are {priceAnalysis.trendDirection === 'down' ? 'dropping' : 'increasing'} by approximately {priceAnalysis.trendPercentage}% in recent weeks.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="text-xs text-gray-500">Best time to buy</p>
                        <p className="font-medium">
                          {new Date(priceAnalysis.minDate).toLocaleDateString()}
                        </p>
                        <p className="text-prophet-blue font-bold">
                          ₹{priceAnalysis.minPrice.toLocaleString()}
                        </p>
                        <p className="text-xs mt-1">
                          {Math.round((selectedGadget.price - priceAnalysis.minPrice) / priceAnalysis.minPrice * 100)}% higher now
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded shadow-sm">
                        <p className="text-xs text-gray-500">Best platform</p>
                        <p className="font-medium">
                          {priceAnalysis.currentPlatform || "N/A"}
                        </p>
                        <p className="text-xs mt-1">
                          Currently offering the lowest price
                        </p>
                      </div>
                    </div>
                    
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Price Prediction</AlertTitle>
                      <AlertDescription>
                        {priceAnalysis.prediction}
                      </AlertDescription>
                    </Alert>
                    
                    <div className="flex justify-between items-center pt-2">
                      <Button asChild variant="outline" size="sm">
                        <a href={`/compare?product=${selectedGadget.id}`}>
                          Compare with Similar Products
                        </a>
                      </Button>
                      
                      <Button asChild size="sm">
                        <a href="/alerts">
                          View Your Price Alerts
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Current Offers</h2>
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-48 rounded-lg bg-gray-100 animate-pulse-slow"></div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <GadgetCard gadget={selectedGadget} />
                    {gadgets
                      .filter(g => 
                        g.name === selectedGadget.name && g.id !== selectedGadget.id
                      )
                      .slice(0, 3)
                      .map(gadget => (
                        <GadgetCard key={gadget.id} gadget={gadget} />
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-80 text-gray-500">
              {isLoading ? "Loading trend data..." : "Select a product to view price trends"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trends;
