import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricesSection from "@/components/PricesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <PricesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}