import React from "react";
import Image from "next/image";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Link from "next/link";
import Title from "@/components/Title";

const blogs = [
  {
    id: "1",
    slug: "mauris-at-orci",
    img: "/blog/4.png",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: "2",
    slug: "aenean-vitae-aliquam",
    img: "/blog/5.png",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: "3",
    slug: "sit-nam-congue-feugiat",
    img: "/blog/6.png",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: "4",
    img: "/blog/1.png",
    author: "SaberAli",
    date: "21 August, 2020",
    title: "Top essential Trends in 2021",
    para:
      "More off this less hello samlande lied much over tightly circa horse taped mightly.",
  },
  {
    id: "5",
    img: "/blog/2.png",
    author: "SaberAli",
    date: "21 August, 2020",
    title: "The Future of Technology in 2022",
    para:
      "More off this less hello samlande lied much over tightly circa horse taped mightly.",
  },
  {
    id: "6",
    img: "/blog/3.png",
    author: "SaberAli",
    date: "21 August, 2020",
    title: "5 Tips for Remote Work Productivity",
    para:
      "More off this less hello samlande lied much over tightly circa horse taped mightly.",
  }
];

export default function BlogPage() {
  return (
    <div>
      <Title title={"Blog Page"} tag={"Blog Page"} />
      <div className="wrapper my-[120px] space-y-12">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className="flex flex-col lg:flex-row transition-transform duration-500 hover:scale-105 items-start lg:items-center gap-8 lg:gap-12"
    >
      {/* Blog Image */}
      <div className="flex-shrink-0 lg:w-1/3">
        <Image
          src={blog.img}
          alt={blog.title}
          width={800}
          height={500}
          style={{ objectFit: 'cover' }}
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 lg:w-2/3">
       {/* Title */}
       <h3 className="text-[#151875] underline sm:text-2xl font-bold text-xl mb-4">
          {blog.title}
        </h3>
        {/* Author and Date */}
        <div className="flex flex-wrap items-center justify-start gap-6 mb-6">
          {/* Author */}
          <div className="flex items-center gap-2">
            <BsVectorPen size={16} className="text-[#FB2E86]" />
            <h2 className="bg-[#FFE7F9] text-lg font-semibold text-[#0D0E43] py-1 px-6 rounded-md">
              {blog.author}
            </h2>
          </div>
          {/* Date */}
          <div className="flex items-center gap-2">
            <MdOutlineCalendarMonth size={16} className="text-[#FFA454]" />
            <p className="bg-[#FFECE2] text-lg font-semibold text-[#0D0E43] py-1 px-6 rounded-md">
              {blog.date}
            </p>
          </div>
        </div>

       

        {/* Description */}
        <p className="text-lg text-[#B8B8DC] mb-4">{blog.para}</p>

        {/* Read More Button */}
        <Link href={`/blog/${blog.id}`}>
          <button className="text-[#151875] text-xl font-medium hover:underline flex items-center gap-2">
            Read More{" "}
            <div className="w-2 h-2 rounded-full bg-[#FB2E86]"></div>
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>


      <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
        <Image src="/images/4.png" alt="logo" width={500} height={300} />
      </div>
    </div>
  );
};

