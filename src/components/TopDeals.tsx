import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Coffee, Car } from "lucide-react";
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import homestay1 from "@/assets/homestay-1.jpg";

const TopDeals = () => {
  const deals = [
    {
      id: 1,
      name: "The Grand Palace Hotel",
      location: "New York, USA",
      image: hotel1,
      rating: 4.8,
      reviews: 2847,
      originalPrice: 299,
      salePrice: 189,
      discount: 37,
      amenities: ["Wifi", "Parking", "Breakfast"],
      type: "Hotel"
    },
    {
      id: 2,
      name: "Cozy Downtown Boutique",
      location: "Paris, France",
      image: hotel2,
      rating: 4.6,
      reviews: 1523,
      originalPrice: 220,
      salePrice: 156,
      discount: 29,
      amenities: ["Wifi", "Coffee", "Concierge"],
      type: "Boutique Hotel"
    },
    {
      id: 3,
      name: "Traditional Villa Retreat",
      location: "Bali, Indonesia",
      image: homestay1,
      rating: 4.9,
      reviews: 892,
      originalPrice: 180,
      salePrice: 99,
      discount: 45,
      amenities: ["Wifi", "Garden", "Kitchen"],
      type: "Homestay"
    },
    {
      id: 4,
      name: "The Grand Palace Hotel",
      location: "New York, USA",
      image: hotel1,
      rating: 4.8,
      reviews: 2847,
      originalPrice: 299,
      salePrice: 189,
      discount: 37,
      amenities: ["Wifi", "Parking", "Breakfast"],
      type: "Hotel"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="w-3 h-3" />;
      case 'coffee': return <Coffee className="w-3 h-3" />;
      case 'parking': return <Car className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Deals This Week</h2>
          <p className="text-lg text-muted-foreground">Handpicked accommodations with the best prices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant="destructive" 
                  className="absolute top-3 left-3 bg-success border-0"
                >
                  {deal.discount}% OFF
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-white/90 text-foreground border-0"
                >
                  {deal.type}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-warning text-warning mr-1" />
                    <span className="font-semibold">{deal.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">({deal.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{deal.name}</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  {deal.location}
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  {deal.amenities.slice(0, 3).map((amenity, index) => (
                    <div key={index} className="flex items-center text-xs text-muted-foreground">
                      {getAmenityIcon(amenity)}
                      <span className="ml-1">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground line-through">
                      ${deal.originalPrice}/night
                    </div>
                    <div className="text-xl font-bold text-primary">
                      ${deal.salePrice}
                      <span className="text-sm font-normal text-muted-foreground">/night</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="default">
                  View Deal
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopDeals;