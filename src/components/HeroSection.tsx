import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find Your Perfect Stay
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Compare deals from 100+ booking sites and save up to 75%
        </p>
        
        {/* Search Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Where are you going?" 
                className="pl-10 h-12 border-0 bg-muted/50 focus:bg-background"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Check-in" 
                type="date"
                className="pl-10 h-12 border-0 bg-muted/50 focus:bg-background"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Check-out" 
                type="date"
                className="pl-10 h-12 border-0 bg-muted/50 focus:bg-background"
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="2 guests" 
                className="pl-10 h-12 border-0 bg-muted/50 focus:bg-background"
              />
            </div>
          </div>
          <Button variant="hero" size="lg" className="w-full h-12 text-lg">
            <Search className="w-5 h-5 mr-2" />
            Search Hotels & Homestays
          </Button>
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">174K+</div>
            <div className="text-sm">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm">Booking Sites</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.8★</div>
            <div className="text-sm">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;