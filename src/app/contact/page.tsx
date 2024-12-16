import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

function Contact() {
    return(
        <div>
            <div>
            <Navbar  />
            </div>
            <div className="w-[780px] sm:w-[1023px] md:w-[1040px] lg:w-[1370px] h-[300px]  bg-[#efdffc] mt-14"></div>
            <div>
            <h3 className="ml-36 -mt-64 font-bold text-[28pt] text-[#2c2f83]">Contact Us</h3>
            <p className="text-[18pt] text-black flex ml-36">Home.Pages <p className="text-[#fa3d8f]">.Contact US</p></p>
            </div>
            <div className="flex">
                <h3>Information About us</h3>
                <p className="ml-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, et adipisci? Voluptatum a, doloribus quisquam optio eum voluptas unde labore minima, eveniet quod illum non rerum fugit, distinctio vero. Nostrum?</p>
            </div>
            <div>
                <img src="Image.png" alt="" className= "mt-10 m-auto"/>
            </div>
            <div>
                <Footer  />
            </div>
        </div>
    )}

export default Contact