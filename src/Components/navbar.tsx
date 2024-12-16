import Link from "next/link"

function Navbar() {
    return(
        <div>
                <div className="bg-[#7D33E0] w-[780px] h-[40px] sm:w-[1023px] sm:h-[30px] md:w-[1040px] md:h-[38px] lg:w-[1370px] lg:h-[44px]">
                  <div className="flex text-white">
                  <img src="Message.jpg" alt="Icon" width="26px" height="16px" className="mt-2 w-[14px] sm:mt-4 ml-2 sm:ml-14 sm:w-[18px] sm:h-[12px] md:ml-20 md:w-[24px] md:h-[18px] lg:ml-32 lg:w-[26px] lg:h-[16px]"/>
                  <p className="sm:font-extralight sm:mt-2 md:font-extralight lg:font-semibold mt-3 sm:ml-5 md:ml-3 lg:ml-5">mhhasanul@gmail.com</p>
                  <img src="Phone.jpg" alt="Icon" className="mt-3 w-[14px] ml-12 sm:mt-4 sm:ml-4 sm:w-[18px] sm:h-[12px] md:ml-2 md:w-[24px] md:h-[18px] lg:ml-32 lg:w-[26px] lg:h-[16px]"/>
                  <p className="md:font-extralight lg:font-semibold mt-2 sm:ml-5 md:ml-2 lg:ml-3">(12345)67890</p>
                  <p className=" sm:font-extralight sm:text-sm md:text-md md:font-extralight lg:font-semibold mt-2 ml-10 sm:ml-72 md:ml-72 lg:ml-72">English</p> 
                  <img src="Arrow.jpg" alt="Icon" className="mt-3 w-4 h-4"/>
                  <p className=" sm:font-extralight sm:text-sm md:text-md md:font-extralight lg:font-semibold mt-2 ml-10 sm:ml-6 md:ml-2 lg:ml-8">USD</p> 
                  <img src="Arrow.jpg" alt="Icon" width="16px"  className="mt-3 h-4"/>
                  <p className=" sm:font-extralight sm:text-sm md:text-md md:font-extralight lg:font-semibold mt-2 ml-10 sm:ml-6 md:ml-2 lg:ml-8">Login</p>
                  <img src="Login.jpg" alt="Icon" width="16px"  className="mt-3 ml-1 h-4"/>
                  <p className=" sm:font-extralight sm:text-sm md:text-md md:font-extralight lg:font-semibold mt-2 ml-10 sm:ml-1 md:ml-2 lg:ml-8">Wishlist</p>
                  <img src="Heart.jpg" alt="Icon" width="16px"  className="mt-3 ml-1 h-4"/>
                  <img src="Cart.jpg" alt="Icon" width="20px"  className="mt-3 ml-1 h-4 sm:ml-4 md:ml-4 lg:ml-4"/>
                  </div>
                </div>
                <div className="bg-[#ffff] ml-[10px] sm:w-[500px] sm:h-[22px] sm:ml-[80px] md:w-[700px] md:h-[30px] md:ml-[150px] lg:w-[995px] lg:h-[40px] lg:ml-[361px]">
                    <div className="flex gap-8 ml-6">
                        <img src="Logo.jpg" alt="" width="74px" height="34px" className="mt-1 mr-4"/>
                        <Link href="./" className="mt-7 sm:ml-1 md:ml-2 lg:ml-4 font-semibold">Home</Link>
                        <Link href="./list" className="mt-7 sm:ml-1 md:ml-2 lg:ml-4 font-semibold">Pages</Link>
                        <Link href="./list" className="mt-7 sm:ml-1 md:ml-2 lg:ml-4 font-semibold">Products</Link>
                        <Link href="" className="mt-7 sm:ml-1 md:ml-2 lg:ml-4 font-semibold">Blog</Link>
                        <Link href="./shop" className="mt-7 sm:ml-1 md:ml-2 lg:ml-4 font-semibold">Shop</Link>
                        <Link href="" className="mt-7 sm:ml-1 md:ml-2 lg:ml-4 font-semibold">Contact</Link>
                        {/* <input type="search" name="" id="" placeholder="Search" className="mt-6 sm:ml-1 md:ml-2 lg:ml-4 font-semibold border-black border-10 w-44 h-8"/>
                        <button>img</button> */}
                        </div>
                </div>
              </div>
    )
}

export default Navbar