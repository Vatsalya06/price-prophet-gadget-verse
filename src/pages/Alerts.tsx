
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, Trash2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SignInModal from "@/components/SignInModal";
import { fetchGadgets } from "@/services/api";
import type { Gadget } from "@/components/GadgetCard";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface SavedAlert {
  id: number;
  productId: number;
  productName: string;
  targetPrice: number;
  email: string;
  createdAt: Date;
}

const AlertsPage = () => {
  const [alerts, setAlerts] = useState<SavedAlert[]>(() => {
    // Load alerts from localStorage on component mount
    const savedAlerts = localStorage.getItem("priceAlerts");
    return savedAlerts ? JSON.parse(savedAlerts) : [];
  });
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const { toast } = useToast();

  // Form for adding email to existing alerts
  const form = useForm({
    defaultValues: {
      email: ""
    }
  });

  useEffect(() => {
    // Fetch gadgets for display in alerts
    const loadGadgets = async () => {
      try {
        const data = await fetchGadgets();
        setGadgets(data);
      } catch (error) {
        console.error("Error loading gadgets:", error);
      }
    };
    
    loadGadgets();
    
    // Check if user is logged in
    const email = localStorage.getItem("userEmail");
    if (email) {
      setLoggedIn(true);
      setUserEmail(email);
      
      // Update form default value
      form.setValue("email", email);
    }
  }, [form]);

  useEffect(() => {
    // Save alerts to localStorage whenever they change
    localStorage.setItem("priceAlerts", JSON.stringify(alerts));
  }, [alerts]);

  const handleDeleteAlert = (alertId: number) => {
    setAlerts(alerts.filter(alert => alert.id !== alertId));
    toast({
      title: "Alert deleted",
      description: "Your price alert has been removed"
    });
  };

  const handleSignIn = (email: string) => {
    // Simple email-only sign in for demo purposes
    setLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
    setIsSignInOpen(false);
    
    // Add email to any existing alerts that don't have one
    const updatedAlerts = alerts.map(alert => {
      if (!alert.email) {
        return { ...alert, email };
      }
      return alert;
    });
    
    setAlerts(updatedAlerts);
    
    toast({
      title: "Signed in successfully",
      description: `Welcome back, ${email}!`
    });
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    setUserEmail("");
    localStorage.removeItem("userEmail");
    
    toast({
      title: "Signed out",
      description: "You've been signed out successfully"
    });
  };

  const handleUpdateAlertEmail = (alertId: number) => {
    const email = userEmail || form.getValues().email;
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // Update alert with email
    const updatedAlerts = alerts.map(alert => {
      if (alert.id === alertId) {
        return { ...alert, email };
      }
      return alert;
    });
    
    setAlerts(updatedAlerts);
    
    toast({
      title: "Email updated",
      description: "You'll receive notifications at this email address"
    });
  };

  const getGadgetById = (productId: number): Gadget | undefined => {
    return gadgets.find(g => g.id === productId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-prophet-blue to-prophet-orange bg-clip-text text-transparent">
          Price Alerts
        </h1>
        <p className="text-gray-600 mb-4">
          Get notified when prices drop below your target
        </p>
      </div>

      <div className="flex justify-end mb-6">
        {loggedIn ? (
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-600">Signed in as: <span className="font-semibold">{userEmail}</span></p>
            <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
          </div>
        ) : (
          <Button onClick={() => setIsSignInOpen(true)}>
            Sign In to Track Alerts
          </Button>
        )}
      </div>

      {alerts.length > 0 ? (
        <div className="space-y-6">
          {alerts.map(alert => {
            const gadget = getGadgetById(alert.productId);
            return (
              <Card key={alert.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium">{alert.productName}</h3>
                      <p className="text-sm text-gray-500">
                        Created {new Date(alert.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="destructive" 
                        size="icon"
                        onClick={() => handleDeleteAlert(alert.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Current Price:</p>
                      <p className="text-lg font-bold">
                        ₹{gadget?.price.toLocaleString() || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Target Price:</p>
                      <p className="text-lg font-bold text-prophet-orange">
                        ₹{alert.targetPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  {!alert.email ? (
                    <div className="mt-4 p-4 bg-amber-50 rounded-md border border-amber-200">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <p className="font-medium text-amber-700">No notification email set</p>
                      </div>
                      
                      <div className="flex gap-3 items-center mt-2">
                        <Input 
                          placeholder="Enter your email"
                          className="max-w-xs"
                          value={userEmail}
                          onChange={(e) => form.setValue("email", e.target.value)}
                        />
                        <Button size="sm" onClick={() => handleUpdateAlertEmail(alert.id)}>
                          Save
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 p-4 bg-gray-50 rounded-md">
                      <p className="text-sm">
                        Notification will be sent to: <span className="font-medium">{alert.email}</span>
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <Button className="w-full" variant="outline" asChild>
                      <a href={`/trends?product=${alert.productId}`}>
                        View Price Trends <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
            <Bell className="h-8 w-8 text-gray-400" />
          </div>
          <h2 className="text-xl font-medium mb-2">No price alerts yet</h2>
          <p className="text-gray-600 max-w-md mb-6">
            Create alerts for products you're interested in,
            and we'll notify you when prices drop below your target.
          </p>
          <Button asChild>
            <a href="/trends">Browse Price Trends</a>
          </Button>
        </div>
      )}
      
      <SignInModal 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
        onSignIn={handleSignIn}
      />
    </div>
  );
};

export default AlertsPage;
