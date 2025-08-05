import { Separator } from "@/components/ui/separator";
import { MapPin, Smartphone, Mail } from "lucide-react";

const Footer = () => {
  const popularCities = [
    "New York", "Paris", "London", "Tokyo", "Dubai", "Bangkok", 
    "Barcelona", "Rome", "Istanbul", "Amsterdam", "Berlin", "Sydney"
  ];

  const quickLinks = [
    { title: "About Us", href: "#" },
    { title: "How It Works", href: "#" },
    { title: "Partner with Us", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Press", href: "#" },
    { title: "Blog", href: "#" },
  ];

  const support = [
    { title: "Help Center", href: "#" },
    { title: "Contact Us", href: "#" },
    { title: "Customer Service", href: "#" },
    { title: "Safety & Security", href: "#" },
    { title: "Trust & Safety", href: "#" },
    { title: "Accessibility", href: "#" },
  ];

  const legal = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookie Policy", href: "#" },
    { title: "Disclaimer", href: "#" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">StayCompare</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner in finding the perfect accommodation. We compare prices 
                from 100+ booking sites to ensure you get the best deals on hotels and homestays worldwide.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4 mr-3" />
                Download our app for exclusive mobile deals
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-3" />
                support@staycompare.com
              </div>
            </div>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="font-semibold mb-4">Popular Cities</h4>
            <div className="space-y-2">
              {popularCities.slice(0, 6).map((city) => (
                <a key={city} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {city}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a key={link.title} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              {support.slice(0, 6).map((link) => (
                <a key={link.title} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-wrap items-center space-x-6 text-sm text-muted-foreground">
            {legal.map((link, index) => (
              <a key={link.title} href={link.href} className="hover:text-primary transition-colors">
                {link.title}
              </a>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 StayCompare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;