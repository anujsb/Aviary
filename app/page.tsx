import { BackgroundCellAnimation } from "@/components/BackgroundRippleEffect";
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { FloatingNavDemo } from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
// import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <FloatingNavDemo />
      <BackgroundCellAnimation />
      {/* <Video /> */}
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
