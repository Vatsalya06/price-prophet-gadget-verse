
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
import { Bell, TrendingDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import type { Gadget } from "./GadgetCard";
import { setPriceAlert } from "@/services/api";

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
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSliderChange = (value: number[]) => {
    setAlertPrice(value[0]);
  };

  const handleSetAlert = async () => {
    setIsSubmitting(true);
    
    try {
      // Save the alert data to localStorage for persistence
      const existingAlerts = JSON.parse(localStorage.getItem("priceAlerts") || "[]");
      
      const newAlert = {
        id: Date.now(),
        productId: gadget.id,
        productName: gadget.name,
        targetPrice: alertPrice,
        email: email || undefined,
        createdAt: new Date(),
      };
      
      localStorage.setItem("priceAlerts", JSON.stringify([...existingAlerts, newAlert]));
      
      // Call the API (this is mocked)
      await setPriceAlert(gadget.id, alertPrice);
      
      // If user provided email, save it
      if (email) {
        localStorage.setItem("userEmail", email);
      }
      
      // Notify parent component
      onSetAlert(alertPrice);
    } catch (error) {
      console.error("Error setting price alert:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const priceAnalysis = () => {
    // Simple price analysis based on product category and current price
    const discount = Math.round(((gadget.price - alertPrice) / gadget.price) * 100);
    
    if (discount <= 5) {
      return "Prices rarely drop this little. Consider setting a target at least 10% below current price.";
    } else if (discount <= 12) {
      return "This is a realistic target price that may be reached during sales events.";
    } else if (discount <= 25) {
      return "This is an ambitious target. You might need to wait for major discount events.";
    } else {
      return "This target is rarely achieved. Only major clearances reach this level of discount.";
    }
  };

  const predictSaleTime = () => {
    const now = new Date();
    const month = now.getMonth();
    
    // Simplified logic to predict when prices might drop
    if (month >= 9 && month <= 11) {
      return "Prices may drop during upcoming holiday sales (November-December).";
    } else if (month >= 0 && month <= 2) {
      return "Next major sales events typically happen around May-June.";
    } else if (month >= 3 && month <= 5) {
      return "Keep an eye out for summer sales in the coming weeks.";
    } else {
      return "Festival season sales (September-October) typically offer the best prices.";
    }
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
            
            <div className="bg-gray-50 p-3 rounded-md border border-gray-100 mt-4">
              <div className="flex items-start gap-2">
                <TrendingDown className="h-4 w-4 text-prophet-blue mt-1" />
                <div>
                  <p className="text-sm font-medium">Price Analysis</p>
                  <p className="text-xs text-gray-600">{priceAnalysis()}</p>
                  <p className="text-xs text-gray-600 mt-2">{predictSaleTime()}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mt-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email for notifications:
              </label>
              <Input 
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Enter your email to receive price drop notifications
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button 
            onClick={handleSetAlert}
            className="bg-prophet-blue hover:bg-blue-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Setting Alert..." : "Set Alert"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PriceAlertModal;
