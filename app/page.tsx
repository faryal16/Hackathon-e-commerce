"use client"
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import Discount from "@/components/Discount";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Items from "@/components/Items";
import Latested from "@/components/Latested";
import News from "@/components/News";
import Offer from "@/components/Offer";
import Trending from "@/components/Trending";
import Unique from "@/components/Unique";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Featured/>
      <Latested />
      <Offer/>
      <Unique/>
      <Trending/>
      <Items/>
      <Discount/>
      <Category/>
      <News/>
      <Blog/>
     
    </main>
  );
}
