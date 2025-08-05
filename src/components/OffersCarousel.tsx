import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap } from "lucide-react";

const OffersCarousel = () => {
  const offers = [
    {
      title: "Weekend Flash Sale",
      discount: "Up to 60% OFF",
      description: "Limited time offer on premium hotels",
      time: "Ends in 2 days",
      color: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      title: "Early Bird Special",
      discount: "Save 25%",
      description: "Book 30 days in advance",
      time: "Valid until month end",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "Homestay Deals",
      discount: "Flat 40% OFF",
      description: "Experience local hospitality",
      time: "Limited properties",
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-6 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Zap className="w-5 h-5 text-warning mr-2" />
          <h2 className="text-lg font-semibold">Limited Time Offers</h2>
        </div>
        
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {offers.map((offer, index) => (
            <Card key={index} className="flex-shrink-0 w-80 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className={`${offer.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      <Clock className="w-3 h-3 mr-1" />
                      {offer.time}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{offer.title}</h3>
                  <div className="text-3xl font-extrabold mb-2">{offer.discount}</div>
                  <p className="text-white/90 text-sm">{offer.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersCarousel;