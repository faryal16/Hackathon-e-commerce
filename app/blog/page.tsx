
import Title from "@/components/Title";
import React from "react";
import Image from "next/image";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Link from "next/link";

const page = () => {
  const topBlogs = [
    {
      id:"1",
      img:"/blog/4.png",
      author:" Surf Auxion",
      date:"   Aug 09 2020",
      title:" Mauris at orci non vulputate diam tincidunt nec.",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
   
    },
    {
      id:"2",
      img:"/blog/5.png",
      author:" Surf Auxion",
      date:"   Aug 09 2020",
      title:" Aenean vitae in aliquam ultrices lectus. Etiam.",
      para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
      
    },
    {id:"3",
      img:"/blog/6.png",
      author:" Surf Auxion",
      date:"   Aug 09 2020",
      title:" Sit nam congue feugiat nisl, mauris amet nisi. ",
      para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eumalesuada vitae ultrices in in neque, porta dignissim Adipiscing purus, cursus vulputate id id dictum at.",
      
    },
  ]
  return (
    <div>
      <Title title={"Blog Page"} tag={"Blog Page"} />
      <div className="wrapper my-[120px]">
        {/* Blog Section */}
        {topBlogs.map((blog , index) => {
          return(

          <div key={index}>
          {/* Blog 1 */}
          <div className="mb-[20px]">
            <div >
              <Image src={blog.img} alt={blog.title} width={800} height={500} />
            </div>
            {/* content */}
            <div className="p-6">
              <div className="flex items-center justify-start gap-20 mb-6">
                <div className="flex justify-start items-center gap-2">
                  <BsVectorPen size={14} className="text-[#FB2E86]" />
                  <h2 className="flex items-center  bg-[#FFE7F9] text-xl font-semibold text-[#0D0E43] py-2 px-10 ">
                    {blog.author}
                  </h2>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <MdOutlineCalendarMonth className="text-[#FFA454]" />
                  <p className="flex items-center text-lg bg-[#FFECE2] font-semibold py-2 px-10 text-[#0D0E43] gap-2">
                    {blog.date}
                  </p>
                </div>
              </div>
              <h3 className="text-[#151875] sm:text-[30px] font-bold text-[20px]  mb-8">
               {blog.title}
              </h3>
              <p className="w-auto text-xl text-[#B8B8DC] mb-6">
                {blog.para}
              </p>
              <Link href={`/blog/${blog.id}`}>
  <button className="text-[#151875] text-2xl flex justify-start items-center gap-2 font-medium">
    Read More{" "}
    <div className="w-2 h-2 rounded-full bg-[#FB2E86]"></div>
  </button>
</Link>

            </div>
          </div>
        </div>)
        })}
        

        {/* Sidebar section */}
        <div className=""></div>
      </div>

      <div className="wrapper md:w-[904px] flex justify-center items-center mb-20 w-auto md:h-[93px] h-auto">
        <Image src="/images/4.png" alt="logo" width={500} height={300} />
      </div>
    </div>
  );
};

export default page;
