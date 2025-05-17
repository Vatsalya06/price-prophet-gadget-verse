
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search for gadgets, brands, or models..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-20 h-12 rounded-full bg-white shadow-sm focus-visible:ring-prophet-blue"
        />
        <Button 
          type="submit"
          size="sm"
          className="absolute right-1 bg-prophet-blue hover:bg-blue-600 rounded-full px-5 h-10"
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
