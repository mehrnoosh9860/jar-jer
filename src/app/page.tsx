import Logo from "@/component/logo/Logo";
import "/src/app/style.css";
import Circles from "@/component/circles/Circles";
import Categories from "@/component/button/Categories";
import ContactUs from "@/component/button/ContactUs";
import Social from "@/component/social media/Social";
import Acount from "@/component/button/Acount";
import SearchBox from "@/component/search/SearchBox";
import OrdersCard from "@/component/orders/OrdersCard";
import CategoiesButton from "@/component/button/CategoiesButton";
import Location from "@/component/button/Location";


export default function Home() {
  const social=[{href:"/img/facebook.svg"},{href:"/img/youtube.svg"},{href:"/img/twiter.svg"},{href:"/img/instagram.svg"},{href:"/img/linkin.svg"}]

  return (
    <main className="overflow-hidden ">
      <div className="relative w-full h-screen bg-white">
        
        {/* Circles in top left */}
        <div className="absolute top-0 left-0 flex space-x-4 p-4">
          <div className="w-40 h-40 bg-[#FFDD0066] rounded-full shadow-lg blur-2xl"></div>
          <div className="w-40 h-40 bg-[#FF7D0582] rounded-full shadow-lg blur-2xl"></div>
        </div>

        {/* Circle in bottom right */}
        <div className="absolute bottom-0 right-0 p-4">
          <div className="w-40 h-40 bg-[#FF7D0580] rounded-full shadow-lg blur-2xl"></div>
        </div>

        {/* Background image on the right side */}
        <div className="absolute top-0 right-0 w-2/5 h-[90vh]">
          <img src="/img/bg2.png" alt="Background" className="w-full h-full" />
        </div>

        {/* Contain section with white background */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-gradient-to-r from-white to-transparent p-2 rounded-lg shadow-gradient m-10 w-full">
            
              <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4">
                      <Logo />
                      <Categories />
                      <ContactUs />
                      <Social />
                    </div>

                    <div className="flex items-center space-x-4">
                      <img src="/img/basket.png" className="w-6 h-6" alt="Basket" />
                      <Acount />
                    </div>

                </div>

              {/* Main Content */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  {/* Left Column */}
                  <div className="flex flex-wrap space-x-4 space-y-4">
                    
                    <div className="mx-6">
                      <div className="flex py-2 "><Location/><p className="px-2 text-green-500">New York, Left Side Blue Door</p></div>
                        <SearchBox />
                    </div>
                    <div><CategoiesButton /></div>
                    <div><OrdersCard /></div>
                  </div>
                </div>
                {/* right Column */}
                <div className="absolute top-0 right-0 flex justify-center items-center w-1/2 ">
                  <img src="/img/slider.png" alt="Your Image" className="w-full h-full object-cover" />
                </div>

              </div>

          </div>
        </div>

      </div>
    
    </main>
  );
}
