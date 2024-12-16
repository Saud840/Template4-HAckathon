import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

function Grid() {
    return(
        <div>
            <div>
            <Navbar  />
            </div>
            <div className="w-[780px] sm:w-[1023px] md:w-[1040px] lg:w-[1370px] h-[300px]  bg-[#efdffc] mt-14"></div>
            <div>
            <h3 className="ml-36 -mt-64 font-bold text-[28pt] text-[#2c2f83]">Shop Grid Default</h3>
            <p className="text-[18pt] text-black flex ml-36">Home.Pages <p className="text-[#fa3d8f]">.Shop Grid Default</p></p>
            </div>
            <div className="flex gap-6">
            <p className="ml-32 mt-64 font-bold text-[22px] text-[#2c2f83]">Ecommerce Accesories & Fashion item 
            <p className="text-[10px] md:text-[10px] lg:text-[14px] text-black font-thin md:font-normal lg:font-medium ">About 9,620 results (0.62 seconds)</p>
            </p>
            <div className="-mt-1 text-[#2c2f83] flex sm:-ml-28 md:-ml-48 lg:ml-10">
            <p className="mt-72 text-[10pt] ml-52">Per Page:</p>
            </div>
            <input type="text" name="" id="" className="w-8 h-4 mt-72 border-black border-2"/>
            <div className="-mt-1 text-[#2c2f83]">
            <p className="mt-72 text-[10pt] ">Sort By:</p>
            </div>
            <input type="text" name="" id="" placeholder="Best Match" className="w-20 h-4 mt-72 -ml-4 text-sm border-black border-2"/>
            <div className="-mt-1 text-[#2c2f83]">
            <p className="mt-72 text-[10pt] ">View:</p>
            </div>
            <input type="text" name="" id="" className="w-20 h-4 mt-72 -ml-4 border-black border-2"/>
            </div>
            <div className="flex justify-center gap-2 mt-10">
                <div><img src="Grid1.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Laptop Bag</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid2.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Relaxing Chair</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid3.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Sofa</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid4.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Chair</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                <div><img src="Grid5.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Sofa</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid6.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Wireless Headset</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid7.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Watch</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid8.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Smart Watch</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                <div><img src="Grid9.png" alt="" className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]"/><p className="text-[#2c2f83] text-lg font-semibold text-center">Headsets</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid10.png" alt=""className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]" /><p className="text-[#2c2f83] text-lg font-semibold text-center">Bag</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid11.png" alt=""className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]" /><p className="text-[#2c2f83] text-lg font-semibold text-center">Ladies Watch</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
                <div><img src="Grid12.png" alt=""className="w-20 h-16 sm:w-32 sm:h-32 md:w-40 md:h-36 lg:w-48 lg:h-44 bg-[#F6F7FB]" /><p className="text-[#2c2f83] text-lg font-semibold text-center">Canon Camera</p><p className="flex gap-2 text-[#2c2f83] ml-10">$26.00<p className="line-through text-[#fa3d8f]">$42.00</p></p></div>
            </div>
            <div>
                <img src="Image.png" alt="" className= "mt-10 m-auto"/>
            </div>
            <div>
                <Footer  />
            </div>
            
        </div>
    )
}

export default Grid