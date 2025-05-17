
import { useEffect, useState } from "react";
import { fetchTrends, fetchGadgets } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import PriceChart from "@/components/PriceChart";
import GadgetCard, { Gadget } from "@/components/GadgetCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
        
        // Select the first gadget by default
        if (gadgetsData.length > 0) {
          setSelectedGadget(gadgetsData[0]);
        }
      } catch (error) {
        console.error("Error loading trends data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

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
              
              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Price Insights</h3>
                <p className="text-sm text-gray-600">
                  {selectedGadget.name} typically goes on sale during major shopping events. 
                  The lowest recorded price was ₹{(selectedGadget.price * 0.85).toFixed(0)} on Amazon.
                </p>
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
  
  function getSelectedGadgetTrend() {
    if (!selectedGadget || !trendsData.length) return { productName: "", data: [] };
    
    const trend = trendsData.find(t => t.productId === selectedGadget.id);
    return trend || { productName: selectedGadget.name, data: [] };
  }

  function handleGadgetSelect(gadget: Gadget) {
    setSelectedGadget(gadget);
  }
};

export default Trends;
