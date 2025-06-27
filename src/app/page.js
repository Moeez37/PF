import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PopularServices from "@/components/sections/PopularServices";
import WorkExperience from "@/components/sections/WorkExperience";
import RecentWork from "@/components/sections/RecentWork";
import Testimonials from "@/components/sections/Testimonials";
import PricingPlans from "@/components/sections/PricingPlans";
import ContactForm from "@/components/sections/ContactForm";
import BlogCarousel from "@/components/sections/BlogCarousel";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#18181b] to-[#23272f] min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <PopularServices />
        <WorkExperience />
        <RecentWork />
        <Testimonials />
        <PricingPlans />
        <ContactForm />
        {/* <BlogCarousel /> */}
      </main>
      <Footer />
    </div>
  );
}
