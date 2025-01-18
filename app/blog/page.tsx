// app/blog/page.tsx
"use client"
import { useEffect, useState } from "react";
import Title from "@/components/Title";
import Image from "next/image";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Link from "next/link";
import { fetchBlogData } from "@/lib/api";

// Define a type for the blog post
type Blog = {
  id: string;
  slug: string;
  img: string;
  author: string;
  date: string;
  title: string;
  para: string;
};

type BlogProps = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: BlogProps) => {
  const { slug } = params;
  const [blog, setBlog] = useState<Blog | null>(null); // Set state with the Blog type
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const blogData = await fetchBlogData(slug);
        
        // Ensure the response is typed correctly
        setBlog(blogData as Blog); // Type assertion if you're sure the structure matches Blog
      } catch (error) {
        setError(`Blog not found$`);
      } finally {
        setLoading(false);
      }
    };

    getBlogData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Title title={"Blog Page"} tag={"Blog Page"} />
      <div className="wrapper my-[120px]">
        <div className="mb-[20px]">
          <div>
            <Image src={blog?.img || "/fallback-image.jpg"} alt={blog?.title || "fallback"} width={800} height={500} />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-start gap-20 mb-6">
              <div className="flex justify-start items-center gap-2">
                <BsVectorPen size={14} className="text-[#FB2E86]" />
                <h2 className="flex items-center bg-[#FFE7F9] text-xl font-semibold text-[#0D0E43] py-2 px-10 ">
                  {blog?.author}
                </h2>
              </div>
              <div className="flex justify-start items-center gap-3">
                <MdOutlineCalendarMonth className="text-[#FFA454]" />
                <p className="flex items-center text-lg bg-[#FFECE2] font-semibold py-2 px-10 text-[#0D0E43] gap-2">
                  {blog?.date}
                </p>
              </div>
            </div>
            <h3 className="text-[#151875] sm:text-[30px] font-bold text-[20px] mb-8">
              {blog?.title}
            </h3>
            <p className="w-auto text-xl text-[#B8B8DC] mb-6">{blog?.para}</p>
            <Link href={`/blog/${blog?.id}`}>
              <button className="text-[#151875] text-2xl flex justify-start items-center gap-2 font-medium">
                Read More{" "}
                <div className="w-2 h-2 rounded-full bg-[#FB2E86]"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
        <Image src="/images/4.png" alt="logo" width={500} height={300} />
      </div>
    </div>
  );
};

export default Page;
