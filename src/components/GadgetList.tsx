
import { useState, useEffect } from "react";
import GadgetCard, { Gadget } from "./GadgetCard";
import FilterDropdown from "./FilterDropdown";
import { Button } from "@/components/ui/button";
import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";

interface GadgetListProps {
  gadgets: Gadget[];
  isLoading: boolean;
}

const GadgetList = ({ gadgets, isLoading }: GadgetListProps) => {
  const [filteredGadgets, setFilteredGadgets] = useState<Gadget[]>(gadgets);
  const [platform, setPlatform] = useState<string>("All Platforms");
  const [category, setCategory] = useState<string>("All Categories");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const platforms = ["All Platforms", "Amazon", "Flipkart", "Croma", "Reliance Digital"];
  const categories = ["All Categories", "Smartphones", "Laptops", "Tablets", "Headphones", "Smartwatches"];

  useEffect(() => {
    let result = [...gadgets];
    
    // Filter by platform
    if (platform !== "All Platforms") {
      result = result.filter(gadget => gadget.platform === platform);
    }
    
    // Filter by category
    if (category !== "All Categories") {
      result = result.filter(gadget => gadget.category === category);
    }
    
    // Sort by price
    if (sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredGadgets(result);
  }, [gadgets, platform, category, sortOrder]);

  const toggleSortOrder = () => {
    if (sortOrder === null) {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder(null);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg h-80 animate-pulse-slow"></div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-between items-center mb-6">
        <div className="flex flex-wrap gap-2">
          <FilterDropdown
            title="Platform"
            options={platforms}
            selectedOption={platform}
            onSelect={setPlatform}
          />
          <FilterDropdown
            title="Category"
            options={categories}
            selectedOption={category}
            onSelect={setCategory}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSortOrder}
            className="flex items-center gap-1.5"
          >
            {sortOrder === "asc" ? (
              <>Price: Low to High <ArrowDownAZ className="h-4 w-4" /></>
            ) : sortOrder === "desc" ? (
              <>Price: High to Low <ArrowUpAZ className="h-4 w-4" /></>
            ) : (
              <>Sort by Price</>
            )}
          </Button>
        </div>
      </div>

      {filteredGadgets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGadgets.map((gadget) => (
            <GadgetCard key={gadget.id} gadget={gadget} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-800 mb-2">No gadgets found</h3>
          <p className="text-gray-600">
            Try adjusting your filters or search for a different term.
          </p>
        </div>
      )}
    </div>
  );
};

export default GadgetList;
