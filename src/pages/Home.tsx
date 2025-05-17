
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import GadgetList from "@/components/GadgetList";
import { Badge } from "@/components/ui/badge";
import { fetchGadgets } from "@/services/api";
import { Gadget } from "@/components/GadgetCard";

const Home = () => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [filteredGadgets, setFilteredGadgets] = useState<Gadget[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadGadgets = async () => {
      setIsLoading(true);
      try {
        const data = await fetchGadgets();
        setGadgets(data);
        setFilteredGadgets(data);
        
        // Extract unique categories for quick filters
        const uniqueCategories = [...new Set(data.map(gadget => gadget.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching gadgets:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadGadgets();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredGadgets(gadgets);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const filtered = gadgets.filter(gadget => 
      gadget.name.toLowerCase().includes(lowerCaseQuery) ||
      gadget.description.toLowerCase().includes(lowerCaseQuery) ||
      gadget.category.toLowerCase().includes(lowerCaseQuery)
    );
    
    setFilteredGadgets(filtered);
  };

  const handleCategoryFilter = (category: string) => {
    if (!category) {
      setFilteredGadgets(gadgets);
      return;
    }
    
    const filtered = gadgets.filter(gadget => gadget.category === category);
    setFilteredGadgets(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-prophet-blue to-prophet-orange bg-clip-text text-transparent">
          Find the Best Electronics Deals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Compare prices across major platforms and save money on your next gadget purchase.
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {!isLoading && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge 
            variant="outline" 
            className={`px-4 py-1.5 cursor-pointer ${!searchQuery ? 'bg-prophet-blue text-white' : ''}`}
            onClick={() => handleSearch("")}
          >
            All
          </Badge>
          {categories.map(category => (
            <Badge
              key={category}
              variant="outline"
              className={`px-4 py-1.5 cursor-pointer ${searchQuery === category ? 'bg-prophet-blue text-white' : ''}`}
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      )}
      
      <GadgetList gadgets={filteredGadgets} isLoading={isLoading} />
    </div>
  );
};

export default Home;
