import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChoseUs from "@/components/WhyChoseUs";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChoseUs />
      <MusicSchoolTestimonials />
    </main>
  );
};

export default Home;
