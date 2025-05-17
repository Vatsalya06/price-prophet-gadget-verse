
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import type { Gadget } from "./GadgetCard";

interface PriceAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSetAlert: (price: number) => void;
  gadget: Gadget;
}

const PriceAlertModal = ({ isOpen, onClose, onSetAlert, gadget }: PriceAlertModalProps) => {
  // Set initial alert price to 10% less than current price
  const initialAlertPrice = Math.floor(gadget.price * 0.9);
  const [alertPrice, setAlertPrice] = useState(initialAlertPrice);

  const handleSliderChange = (value: number[]) => {
    setAlertPrice(value[0]);
  };

  const handleSetAlert = () => {
    onSetAlert(alertPrice);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-prophet-orange" />
            Set Price Alert
          </DialogTitle>
          <DialogDescription>
            We'll notify you when the price drops below your target price.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h3 className="font-medium text-lg mb-2">{gadget.name}</h3>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">Current Price:</span>
            <span className="font-bold text-lg">₹{gadget.price.toLocaleString()}</span>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="alert-price" className="text-sm font-medium">
                  Alert me when price falls below:
                </label>
                <span className="text-prophet-blue font-semibold">
                  ₹{alertPrice.toLocaleString()}
                </span>
              </div>
              <Slider 
                id="alert-price"
                value={[alertPrice]} 
                min={Math.floor(gadget.price * 0.5)} 
                max={gadget.price} 
                step={100}
                onValueChange={handleSliderChange}
                className="py-4"
              />
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>-50%</span>
              <span>Current price</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button 
            onClick={handleSetAlert}
            className="bg-prophet-blue hover:bg-blue-600"
          >
            Set Alert
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PriceAlertModal;
