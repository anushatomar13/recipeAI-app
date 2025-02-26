import Image from "next/image";
import { Testimonials } from "@/components/Testimonials"
import Hero from  "@/components/Hero"
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="items-center ">
    {/* <Testimonials/> */}
    <Hero/>
    <Features/>
    </div>
  );
}
