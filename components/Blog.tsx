import React from "react";
import Image from "next/legacy/image";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Link from "next/link";

const blogs = [
  {
    id: "4",
    img: "/blog/1.png",
    author: "SaberAli",
    date: "21 August, 2020",
    title: "Top essential Trends in 2021",
    para:
      "More off this less hello samlande lied much over tightly circa horse taped mightly.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
  },
  {
    id: "5",
    img: "/blog/2.png",
    author: "SaberAli",
    date: "21 August, 2020",
    title: "The Future of Technology in 2022",
    para:
      "More off this less hello samlande lied much over tightly circa horse taped mightly.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
  },
  {
    id: "6",
    img: "/blog/3.png",
    author: "SaberAli",
    date: "21 August, 2020",
    title: "5 Tips for Remote Work Productivity",
    para:
      "More off this less hello samlande lied much over tightly circa horse taped mightly.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
  },
];

export default function BlogPage() {
  return (
    <div className="wrapper my-[120px] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0D0E43] mb-12 text-center">
          Latest Blog
        </h1>

        <div className="grid group grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg transition-transform duration-500 hover:scale-105 shadow-md overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={blog.img}
                  alt={blog.title}
                
                  width={300}
                  height={300}
                
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="flex items-center text-sm md:text-base text-[#0D0E43] gap-2">
                    <BsVectorPen size={14} className="text-[#FB2E86]" />
                    {blog.author}
                  </h2>
                  <p className="flex items-center text-sm md:text-base font-medium text-[#0D0E43] gap-2">
                    <MdOutlineCalendarMonth className="text-[#FB2E86]" />
                    {blog.date}
                  </p>
                </div>
                <h3 className="text-lg md:text-xl underline font-bold hover:text-[#FB2E86] text-[#0D0E43] mb-4">
                  {blog.title}
                </h3>
                <p className="text-sm md:text-base text-[#B8B8DC] mb-6">
                  {blog.para}
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <button className="text-[#151875] text-xl flex hover:underline justify-start items-center gap-2 font-medium">
                    Read More{" "}
                    <div className="w-2 h-2 rounded-full bg-[#FB2E86]"></div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link href="/blog" >
           <button className="w-40 mt-12 text-white bg-[#FB2E86] rounded-[12px] px-6 py-3  text-lg shadow-lg hover:bg-pink-700 transition-colors flex justify-center mx-auto items-center"> 
            Explore More
            </button>
            </Link>
      </div>
    </div>
  );
}
