import HeroSection from "@/components/HeroSection";
import OffersCarousel from "@/components/OffersCarousel";
import TopDeals from "@/components/TopDeals";
import ComparisonSection from "@/components/ComparisonSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OffersCarousel />
      <TopDeals />
      <ComparisonSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
