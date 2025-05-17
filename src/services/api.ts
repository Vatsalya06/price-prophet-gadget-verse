
import { Gadget } from "@/components/GadgetCard";
import { mockGadgets, mockTrends } from "@/utils/mockData";

// In a real application, these would be actual API calls
// For this demo, we'll use mock data and add a delay to simulate API calls

export const fetchGadgets = async (): Promise<Gadget[]> => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockGadgets);
    }, 800);
  });
};

export const fetchTrends = async () => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTrends);
    }, 1000);
  });
};

export const setPriceAlert = async (productId: number, targetPrice: number) => {
  // Simulate API call for setting a price alert
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Price alert set successfully" });
    }, 500);
  });
};
