
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

interface PriceHistoryData {
  date: string;
  Amazon?: number;
  Flipkart?: number;
  Croma?: number;
  "Reliance Digital"?: number;
}

interface PriceChartProps {
  productName: string;
  data: PriceHistoryData[];
  isLoading: boolean;
}

const PriceChart = ({ productName, data, isLoading }: PriceChartProps) => {
  const [activeTab, setActiveTab] = useState("1m");
  const [chartData, setChartData] = useState<PriceHistoryData[]>([]);

  useEffect(() => {
    if (!data.length) return;
    
    let filteredData;
    const now = new Date();
    
    switch (activeTab) {
      case "7d":
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(now.getDate() - 7);
        filteredData = data.filter(item => new Date(item.date) >= sevenDaysAgo);
        break;
      case "1m":
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(now.getMonth() - 1);
        filteredData = data.filter(item => new Date(item.date) >= oneMonthAgo);
        break;
      case "3m":
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(now.getMonth() - 3);
        filteredData = data.filter(item => new Date(item.date) >= threeMonthsAgo);
        break;
      case "1y":
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(now.getFullYear() - 1);
        filteredData = data.filter(item => new Date(item.date) >= oneYearAgo);
        break;
      case "all":
      default:
        filteredData = data;
    }
    
    setChartData(filteredData);
  }, [data, activeTab]);
  
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price History</CardTitle>
          <CardDescription>Loading price trends...</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="w-full h-64 bg-gray-100 rounded animate-pulse-slow"></div>
        </CardContent>
      </Card>
    );
  }

  const getMinPrice = () => {
    if (!chartData.length) return 0;
    
    const allPrices = chartData.flatMap(item => {
      return [
        item.Amazon,
        item.Flipkart,
        item.Croma,
        item["Reliance Digital"]
      ].filter(price => price !== undefined) as number[];
    });
    
    return Math.min(...allPrices) * 0.95;
  };

  const getMaxPrice = () => {
    if (!chartData.length) return 10000;
    
    const allPrices = chartData.flatMap(item => {
      return [
        item.Amazon,
        item.Flipkart,
        item.Croma,
        item["Reliance Digital"]
      ].filter(price => price !== undefined) as number[];
    });
    
    return Math.max(...allPrices) * 1.05;
  };

  const platformColors = {
    Amazon: "#FF9900",
    Flipkart: "#2874F0",
    Croma: "#679E38",
    "Reliance Digital": "#E42529"
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-prophet-blue" />
              Price History
            </CardTitle>
            <CardDescription>{productName}</CardDescription>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="7d">7D</TabsTrigger>
              <TabsTrigger value="1m">1M</TabsTrigger>
              <TabsTrigger value="3m">3M</TabsTrigger>
              <TabsTrigger value="1y">1Y</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 20, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(date) => {
                    const d = new Date(date);
                    return `${d.getDate()}/${d.getMonth() + 1}`;
                  }}
                />
                <YAxis 
                  domain={[getMinPrice(), getMaxPrice()]} 
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                />
                <Tooltip 
                  formatter={(value: number) => [`₹${value.toLocaleString()}`, undefined]}
                  labelFormatter={(label) => new Date(label).toLocaleDateString()}
                />
                <Legend />
                {Object.entries(platformColors).map(([platform, color]) => {
                  // Check if the platform has any data points
                  const hasData = chartData.some(item => item[platform as keyof PriceHistoryData] !== undefined);
                  
                  if (!hasData) return null;
                  
                  return (
                    <Line
                      key={platform}
                      type="monotone"
                      dataKey={platform}
                      stroke={color}
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                      connectNulls={true}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">No price history data available.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceChart;
