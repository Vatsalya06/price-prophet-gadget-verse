
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle2, ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  title: string;
  options: string[];
  selectedOption: string;
  onSelect: (value: string) => void;
}

const FilterDropdown = ({ 
  title,
  options,
  selectedOption,
  onSelect
}: FilterDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 border-gray-200">
          {title}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedOption} onValueChange={onSelect}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option} value={option}>
              <div className="flex items-center justify-between w-full">
                <span>{option}</span>
                {selectedOption === option && <CheckCircle2 className="h-4 w-4 text-prophet-blue" />}
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
