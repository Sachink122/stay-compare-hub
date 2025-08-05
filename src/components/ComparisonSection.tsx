import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingDown } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    { site: "Booking.com", price: 189, savings: 0 },
    { site: "Expedia", price: 205, savings: 16 },
    { site: "Hotels.com", price: 198, savings: 9 },
    { site: "Agoda", price: 212, savings: 23 },
    { site: "Trivago", price: 195, savings: 6 },
  ];

  const bestDeal = comparisons.reduce((min, current) => 
    current.price < min.price ? current : min
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Price Comparison Made Simple</h2>
          <p className="text-lg text-muted-foreground">See how much you can save by comparing all major booking sites</p>
        </div>
        
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">The Grand Palace Hotel - Standard Room</CardTitle>
            <p className="text-muted-foreground">December 15-16, 2024 • 1 night</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {comparisons.map((comparison, index) => (
              <div 
                key={comparison.site}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  comparison.site === bestDeal.site 
                    ? 'border-success bg-success/5' 
                    : 'border-border bg-background'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{comparison.site}</div>
                    {comparison.site === bestDeal.site && (
                      <Badge variant="default" className="mt-1 bg-success border-0">
                        Best Price
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {comparison.savings > 0 && (
                    <div className="flex items-center text-success text-sm">
                      <TrendingDown className="w-4 h-4 mr-1" />
                      Save ${comparison.savings}
                    </div>
                  )}
                  <div className="text-right">
                    <div className="text-xl font-bold">${comparison.price}</div>
                    <div className="text-xs text-muted-foreground">per night</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-primary">You Save: ${Math.max(...comparisons.map(c => c.savings))}</div>
                  <div className="text-sm text-muted-foreground">Compared to the highest price</div>
                </div>
                <Button variant="hero" size="lg">
                  Book Best Deal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonSection;