import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

function Details() {
    return(
        <div>
            <div>
            <Navbar />
            </div>
            <div className="w-[780px] sm:w-[1023px] md:w-[1040px] lg:w-[1370px] h-[300px]  bg-[#efdffc] mt-14"></div>
            <div>
            <h3 className="ml-36 -mt-64 font-bold text-[28pt] text-[#2c2f83]">Product Details</h3>
            <p className="text-[18pt] text-black flex ml-36">Home.Pages <p className="text-[#fa3d8f]">.Product Details</p></p>
            </div>
            <div className="grid col-span-6 row-span-3 ml-10">
                <div><img src="PS-1.jpg" alt="" className="w-[170px] h-[150px] mt-64"/></div>
                <div><img src="PS-2.jpg" alt="" className="w-[170px] h-[150px] mt-2"/></div>
                <div><img src="PS-3.jpg" alt="" className="w-[170px] h-[150px] mt-2"/></div>
                <div><img src="PS-4.jpg" alt="" className="w-[375px] h-[450px] ml-48 -mt-[465px] flex justify-between"/></div>
                <div className="m-auto ml-[600px] -mt-[390px]"><p className="text-[#2c2f83] text-[36px]">Playwood arm chair</p>
                    <p className="text-[#2c2f83] flex mt-2">$32.00
                        <p className="line-through ml-2 text-[#fa3d8f]">
                        $66.00
                        </p>
                        </p>
                        <p className="text-[#2c2f83] mt-2">
                        Color
                        </p>
                        <p className="text-[#2c2f83] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <button className="text-[#2c2f83] mt-2 w-50 border-[#2c2f83] border-2 p-4 rounded-xl">Add To Cart</button>
                        <p className="text-[#2c2f83] mt-4 text-[20px] font-semibold ml-2">Categoires:</p> 
                        <p className="text-[#2c2f83] mt-4 text-[20px] font-semibold ml-2">Tags:</p> 
                </div>
            </div>
            
        </div>
    )
}


export default Details
