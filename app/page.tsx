"use client";
import Features from "@/components/features";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Highlights from "@/components/Highlights";
import NavBar from "@/components/navBar";
import Performance from "@/components/performance";
import ProductViewer from "@/components/productViewer";
import Showcase from "@/components/showcase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}
