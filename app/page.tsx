
import Blog from "@/components/Blog";
// import Categories from "@/components/Categories";
import { Category } from "@/components/Category";

import Discount from "@/components/Discount";
import Featured from "@/components/Featured";

import HeroSection from "@/components/HeroSection";
import Items from "@/components/Items";
import Latested from "@/components/Latested";
import News from "@/components/News";
import Offer from "@/components/Offer";

import Trending from "@/components/Trending";
import Unique from "@/components/Unique";
import {    getSale } from "@/sanity/helpers";



export default async function Home() {
  const sales = await getSale()
  
  // const categories = await getAllCategories()


  return (
    <main className="overflow-hidden">
      <HeroSection sales={sales} />
      {/* <Categories categories={categories}/> */}
       <Featured />
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
