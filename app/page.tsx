"use client";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
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
    </main>
  );
}
