import Image from "next/image";
import {
    Table,
    TableBody,

    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button";
  

const CartPage = () => {
    const cart = [
        {
            img:"/cart/1.png",
            name:"Ut diam consequat",
            color:"Brown",
            size:"XL",
            price:"$32.00",
            total:"£219.00"
        },
        {
            img:"/cart/2.png",
            name:"Vel faucibus posuere",
            color:"Brown",
            size:"XL",
            price:"$32.00",
            total:"£219.00"
        },
        {
            img:"/cart/3.png",
            name:"Ac vitae vestibulum",
            color:"Brown",
            size:"XL",
            price:"$32.00",
            total:"£219.00"
        },
        {
            img:"/cart/4.png",
            name:"Elit massa diam",
            color:"Brown",
            size:"XL",
            price:"$32.00",
            total:"£219.00"
        },
        {
            img:"/cart/5.png",
            name:"Proin pharetra elementum",
            color:"Brown",
            size:"XL",
            price:"$32.00",
            total:"£219.00"
        },
    ]
  return (
    <div className="wrapper my-[120px]">
        
      <div className=" ">
         
        <Table className=" ">
  
  <TableHeader className="">
<TableRow>

      <TableHead className="text-left p-4 py-20 text-[#151875] md:text-[22px] text-xl font-bold ">
        Product
      </TableHead>
      <TableHead className="text-[#151875] md:text-[22px] text-xl font-bold">Price</TableHead>
      <TableHead className="text-[#151875] md:text-[22px] text-xl font-bold">Quantity</TableHead>
      <TableHead className=" text-[#151875] md:text-[22px] text-xl font-bold">Total</TableHead>
</TableRow>
    
  </TableHeader>
  {cart.map((item, index) => {
return(
  <TableBody key={index} className="my-96">
<TableRow>
      <TableCell className="text-left">
        <div className="flex justify-start items-center p-4 gap-4">
            {/* Image */}
           <div className="relative"> <button
                className="absolute z-0 top-0 w-5 h-5 text-center right-0 bg-black text-white text-base rounded-full  hover:bg-red-600"
                title="Remove"
                >
                &times;
              </button>
              <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
            </div> 
            {/* content */}
            <div >
                <h1 className="text-black text-xl font-semibold">{item.name}</h1>
                <p className="text-gray-500 text-base">Color:{item.color}</p>
                <p className="text-gray-500 text-base">Size:{item.size}</p>
            </div>
        </div></TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell><div className="flex items-center md:justify-center space-x-2">
            <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">-</button>
            <input
              type="number"
              value="1"
              min="1"
              className="w-12 border border-gray-300 text-center rounded-md"
            />
            <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded">+</button>
          </div></TableCell>
      <TableCell className="font-medium">{item.total}</TableCell>
      
      </TableRow>
  </TableBody>
)})}
</Table>
<div className="flex justify-start gap-[220px] mt-20 items-center">

      <Button className="px-16 py-6 rounded-[6px] text-white bg-[#FB2E86] hover:bg-pink-800 font-semibold text-lg" >Update Curt</Button>
      <Button className="px-16 py-6 rounded-[6px] text-white bg-[#FB2E86] hover:bg-pink-800 font-semibold text-lg" >Clear Curt</Button>
</div>
      </div>
    </div>
  );
};

export default CartPage;
