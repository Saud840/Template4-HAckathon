import Image from "next/image";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <div>
      <Navbar  />
      <div className="w-[780px] sm:w-[1023px] md:w-[1040px] lg:w-[1370px] h-[380px]  bg-[#efdffc] mt-12">
        <img src="Lamp.jpg" alt="Lamp" />
        <div>
          <p className="text-[#fa3d8f] text-[16pt] ml-[208px] -mt-[100px] font-semibold">Best Furniture For Your Castle...</p>
          <p className="text-black text-[36pt] ml-[208px] font-bold">New Furniture Collection</p>
          <p className="text-black text-[36pt] ml-[208px] font-bold -mt-6">Trends in 2024</p>
          <p className="ml-[216px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> 
          <button className="bg-[#fa3d8f] text-white p-6 w-52 mt-2 ml-[216px] ">Shop Now</button>
        </div>
      </div>
      <div>
          <h3 className="text-center mt-2 sm:mt-2 md:mt-3 lg:mt-4 text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#1a0b5b]">Featured Products</h3>
          <div className="flex justify-center gap-4">
            <div><img src="Chair.png" alt="" className="w-[178px] h-[178px] border-black border-2"/>
            <p className="text-[#fa3d8f] font-bold text-center">Cantilever chair <br  /> <p className="text-[#2c2f83] text-sm">Code - Y523201</p><p className="text-[#2c2f83] text-sm">$42.00</p></p></div>
            <div><img src="Chair.png" alt="" className="w-[178px] h-[178px] border-black border-2" />
           <p className="text-[#fa3d8f] font-bold text-center">Cantilever chair <br  /> <p className="text-[#2c2f83] text-sm">Code - Y523201</p><p className="text-[#2c2f83] text-sm">$42.00</p></p></div>
           <div><img src="Chair.png" alt="" className="w-[178px] h-[178px] border-black border-2" />
           <p className="text-[#fa3d8f] font-bold text-center">Cantilever chair <br  /> <p className="text-[#2c2f83] text-sm">Code - Y523201</p><p className="text-[#2c2f83] text-sm">$42.00</p></p></div>
           <div><img src="Chair.png" alt="" className="w-[178px] h-[178px] border-black border-2" />
           <p className="text-[#fa3d8f] font-bold text-center">Cantilever chair <br  /> <p className="text-[#2c2f83] text-sm">Code - Y523201</p><p className="text-[#2c2f83] text-sm">$42.00</p></p></div>
          </div>
          <div>
                <img src="Image.png" alt="" className= "mt-10 m-auto"/>
            </div>
        </div>
        <Footer  />
    </div>
  );
}
