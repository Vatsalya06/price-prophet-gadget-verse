
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Check, ArrowRight } from "lucide-react";
import { fetchGadgets } from "@/services/api";
import type { Gadget } from "@/components/GadgetCard";
import { useToast } from "@/hooks/use-toast";

const ComparisonPage = () => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [selectedGadgets, setSelectedGadgets] = useState<Gadget[]>([]);
  const [showSelectionPanel, setShowSelectionPanel] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const { toast } = useToast();
  
  useEffect(() => {
    const loadGadgets = async () => {
      setIsLoading(true);
      try {
        const data = await fetchGadgets();
        setGadgets(data);
      } catch (error) {
        console.error("Error loading gadgets:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadGadgets();
  }, []);
  
  const handleSelectGadget = (gadget: Gadget) => {
    if (selectedGadgets.find(g => g.id === gadget.id)) {
      // Already selected, so remove it
      setSelectedGadgets(selectedGadgets.filter(g => g.id !== gadget.id));
    } else {
      // Not selected, so add it (max 3)
      if (selectedGadgets.length >= 3) {
        toast({
          title: "Maximum products selected",
          description: "You can compare up to 3 products at a time",
          variant: "destructive"
        });
        return;
      }
      setSelectedGadgets([...selectedGadgets, gadget]);
    }
  };
  
  const handleStartComparison = () => {
    if (selectedGadgets.length < 2) {
      toast({
        title: "Select more products",
        description: "Please select at least 2 products to compare",
        variant: "destructive"
      });
      return;
    }
    setShowSelectionPanel(false);
  };
  
  const handleAddMoreProducts = () => {
    setShowSelectionPanel(true);
  };
  
  const handleRemoveGadget = (gadgetId: number) => {
    setSelectedGadgets(selectedGadgets.filter(g => g.id !== gadgetId));
  };
  
  const getUniqueCategories = () => {
    const categories = gadgets.map(g => g.category);
    return ["all", ...new Set(categories)];
  };
  
  const filteredGadgets = category === "all" 
    ? gadgets 
    : gadgets.filter(g => g.category === category);
  
  const getBestValue = () => {
    if (selectedGadgets.length < 2) return null;
    
    // Simple algorithm: lowest price
    return selectedGadgets.reduce((best, current) => 
      current.price < best.price ? current : best, selectedGadgets[0]);
  };
  
  const getBestRated = () => {
    if (selectedGadgets.length < 2) return null;
    
    return selectedGadgets.reduce((best, current) => 
      current.rating > best.rating ? current : best, selectedGadgets[0]);
  };
  
  const bestValue = getBestValue();
  const bestRated = getBestRated();
  
  // Attributes to compare
  const compareAttributes = [
    { name: "Price", getValue: (g: Gadget) => `₹${g.price.toLocaleString()}` },
    { name: "Rating", getValue: (g: Gadget) => `${g.rating}/5` },
    { name: "Platform", getValue: (g: Gadget) => g.platform },
    { name: "Category", getValue: (g: Gadget) => g.category },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-prophet-blue to-prophet-orange bg-clip-text text-transparent">
          Price Comparison
        </h1>
        <p className="text-gray-600 mb-4">
          Compare features and prices across different products
        </p>
      </div>
      
      {showSelectionPanel ? (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Select Products to Compare</h2>
            <div>
              <span className="mr-3 text-sm text-gray-500">
                {selectedGadgets.length}/3 selected
              </span>
              <Button 
                onClick={handleStartComparison}
                disabled={selectedGadgets.length < 2}
              >
                Compare Products
              </Button>
            </div>
          </div>
          
          <Tabs value={category} onValueChange={setCategory} className="mb-6">
            <TabsList className="mb-4 overflow-x-auto flex-wrap">
              {getUniqueCategories().map(cat => (
                <TabsTrigger key={cat} value={cat} className="capitalize">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-100 rounded-lg animate-pulse-slow"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGadgets.map(gadget => {
                const isSelected = selectedGadgets.some(g => g.id === gadget.id);
                
                return (
                  <Card 
                    key={gadget.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      isSelected ? 'border-prophet-blue ring-2 ring-prophet-blue/20' : ''
                    }`}
                    onClick={() => handleSelectGadget(gadget)}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-gray-100">
                        <img 
                          src={gadget.image} 
                          alt={gadget.name}
                          className="object-cover w-full h-full"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-prophet-blue text-white h-6 w-6 rounded-full flex items-center justify-center">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                        <Badge className="absolute top-2 left-2">
                          {gadget.platform}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium line-clamp-1">{gadget.name}</h3>
                        <p className="text-prophet-blue font-bold mt-1">₹{gadget.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-500 mt-1">{gadget.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Comparison Results</h2>
            <Button variant="outline" onClick={handleAddMoreProducts}>
              Change Products
            </Button>
          </div>
          
          {selectedGadgets.length >= 2 && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {selectedGadgets.map(gadget => (
                  <Card key={gadget.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={gadget.image} 
                        alt={gadget.name}
                        className="w-full aspect-video object-cover"
                      />
                      {bestValue?.id === gadget.id && (
                        <Badge className="absolute top-2 right-2 bg-green-600">
                          Best Value
                        </Badge>
                      )}
                      {bestRated?.id === gadget.id && (
                        <Badge className="absolute top-2 left-2 bg-prophet-blue">
                          Top Rated
                        </Badge>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="absolute bottom-2 right-2 bg-white/70 hover:bg-white"
                        onClick={() => handleRemoveGadget(gadget.id)}
                      >
                        Remove
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium line-clamp-2">{gadget.name}</h3>
                      <p className="text-prophet-blue font-bold mt-2">₹{gadget.price.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Feature Comparison</CardTitle>
                  <CardDescription>
                    See how these products compare on key features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-medium">Attribute</th>
                          {selectedGadgets.map(gadget => (
                            <th key={gadget.id} className="text-left p-3 font-medium">
                              {gadget.name.split(' ').slice(0, 2).join(' ')}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {compareAttributes.map((attr, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="p-3 font-medium">{attr.name}</td>
                            {selectedGadgets.map(gadget => {
                              const value = attr.getValue(gadget);
                              const isBest = 
                                (attr.name === "Price" && bestValue?.id === gadget.id) ||
                                (attr.name === "Rating" && bestRated?.id === gadget.id);
                                
                              return (
                                <td 
                                  key={gadget.id} 
                                  className={`p-3 ${isBest ? 'text-prophet-blue font-bold' : ''}`}
                                >
                                  {value}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8 text-center">
                <h3 className="font-medium mb-4">View Price Trend History</h3>
                <div className="flex gap-4 justify-center">
                  {selectedGadgets.map(gadget => (
                    <Button key={gadget.id} variant="outline" asChild>
                      <a href={`/trends?product=${gadget.id}`}>
                        {gadget.name.split(' ').slice(0, 2).join(' ')} Trends
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ComparisonPage;
