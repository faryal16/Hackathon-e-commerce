// app/blog/[slug]/page.tsx

import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { notFound } from "next/navigation"; // Helper to handle 404
import Comment from "@/components/Comment";

// Static data for the blogs
const topBlogs = [
  {
    id: "1",
    img: "/blog/4.png",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: "2",
    img: "/blog/5.png",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: "3",
    img: "/blog/6.png",
    author: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
  },
];

// Generate static params for dynamic route
export async function generateStaticParams() {
  return topBlogs.map((blog) => ({
    slug: blog.id,
  }));
}

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const blog = topBlogs.find((b) => b.id === params.slug);

  // If the blog is not found, return a 404 page
  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <Title title={"Single Blog"} tag={"Single Blog"} />
      <div className="wrapper text-center my-[120px]">
        <Image
          src={blog.img}
          alt={blog.title}
          width={800}
          height={500}
          className="w-full h-auto object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-center gap-40 mb-6">
            <div className="flex justify-start items-center gap-2">
              <BsVectorPen size={34} className="text-[#FB2E86]" />
              <h2 className="flex items-center bg-[#FFE7F9] text-2xl font-semibold text-[#0D0E43] py-2 px-20 ">
                {blog.author}
              </h2>
            </div>
            <div className="flex justify-start items-center gap-3">
              <MdOutlineCalendarMonth size={34} className="text-[#FFA454]" />
              <p className="flex items-center text-2xl bg-[#FFECE2] font-semibold py-2 px-20 text-[#0D0E43] gap-2">
                {blog.date}
              </p>
            </div>
          </div>
          <h3 className="text-[#151875] sm:text-[30px] font-bold text-[20px] my-20">
            {blog.title}
          </h3>
          <p className="w-auto text-xl text-[#B8B8DC] mb-6">{blog.para}</p>
          <p className="w-auto text-xl text-[#B8B8DC] mb-6">{blog.para}</p>
          <p className="w-auto text-xl text-[#B8B8DC] mb-6">{blog.para}</p>
          <p className="w-auto text-xl text-[#B8B8DC] mb-6">{blog.para}</p>
          <p className="w-auto text-xl text-[#B8B8DC] mb-6">{blog.para}</p>
        </div>
      <Comment/>
      </div>
       <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
            <Image src="/images/4.png" alt='logo' width={500} height={300} />
          </div>
    </div>
  );
};

export default BlogPage;
