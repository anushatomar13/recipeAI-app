import { Testimonials } from "@/components/Testimonials"
import Hero from  "@/components/Hero"
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="items-center ">
    
    <Hero/>
    <Features/>
    <HowItWorks/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}
