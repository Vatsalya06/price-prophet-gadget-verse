
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PriceAlertModal from "./PriceAlertModal";

export interface Gadget {
  id: number;
  name: string;
  description: string;
  price: number;
  platform: string;
  image: string;
  rating: number;
  category: string;
}

interface GadgetCardProps {
  gadget: Gadget;
}

const GadgetCard = ({ gadget }: GadgetCardProps) => {
  const { toast } = useToast();
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const handleAlertClick = () => {
    setIsAlertModalOpen(true);
  };

  const handleSetAlert = (price: number) => {
    toast({
      title: "Price Alert Set",
      description: `You'll be notified when ${gadget.name} drops below ₹${price}`,
    });
    setIsAlertModalOpen(false);
  };

  const platformColor = (platform: string) => {
    switch (platform) {
      case "Amazon":
        return "bg-amber-100 text-amber-800";
      case "Flipkart":
        return "bg-blue-100 text-blue-800";
      case "Croma":
        return "bg-green-100 text-green-800";
      case "Reliance Digital":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-100 overflow-hidden">
            <img
              src={gadget.image}
              alt={gadget.name}
              className="object-cover w-full h-full"
            />
            <Badge
              className={`absolute top-2 right-2 ${platformColor(gadget.platform)}`}
            >
              {gadget.platform}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-base line-clamp-1" title={gadget.name}>
              {gadget.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2" title={gadget.description}>
              {gadget.description}
            </p>
            <div className="flex justify-between items-center mt-3">
              <div>
                <p className="text-lg font-bold text-prophet-blue">₹{gadget.price.toLocaleString()}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < gadget.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-prophet-gray hover:text-prophet-blue"
                  onClick={handleAlertClick}
                >
                  <Bell className="h-4 w-4" />
                </Button>
                <Button className="bg-prophet-orange hover:bg-orange-600">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Deal
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <PriceAlertModal
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
        onSetAlert={handleSetAlert}
        gadget={gadget}
      />
    </>
  );
};

export default GadgetCard;
