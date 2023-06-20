import dot1 from "../../assets/images/icon/Dot Grid.png";
import image1 from "../../assets/images/img/image1.png";
import image2 from "../../assets/images/img/image2.png";
import banner from "../../assets/images/icon/Group 17.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className="bg-no-repeat mt-16"
      style={{ backgroundImage: `url('${banner}')` }}
    >
      <div className="" data-aos="zoom-in" data-aos-delay="5000">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="">
            <div className="ml-36">
              <img src={dot1} alt="" className="w-[132px] h-[132px]" />
            </div>
            <div className="lg:w-[378px] h-[202px] mb-8 lg:ml-36">
              <h2 className="mt-[140px] text-[#273240] font-bold text-[40px]">
                Find The Care <br /> You Need
              </h2>
              <p className="text-sm mt-8 opacity-75">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </p>
              <button className="uppercase text-base bg-[#FF8B42] lg:py-4 lg:px-11 text-white mt-8 mb-4">
                make Appointment
              </button>
            </div>
          </div>
          <div className="col-span-2 mx-auto">
            <div className="lg:flex md:flex gap-5 mt-4 items-center">
              <div className="mb-40 text-center relative">
                <div className="relative">
                  <div className="bg-[#FF8B42] w-[338px] h-[177px] rounded-b-[150px] rounded-t-[20px] mb-4"></div>
                  <div className="bg-[#FF8B42] w-[338px] h-[434px] rounded-t-[150px] rounded-b-[20px]"></div>
                  <img
                    src={image2}
                    alt=""
                    className=" absolute bottom-0 w-[407px] h-[618px] "
                  />
                </div>
                <img
                  src={dot1}
                  alt=""
                  className="absolute bottom-[-50px] left-[-50px]"
                />
              </div>
              <div className="">
                <div className="relative">
                  <div className="bg-[#0089BA] w-[338px] h-[434px] rounded-b-[150px] rounded-t-[20px] mb-4"></div>
                  <div className="bg-[#0089BA] w-[338px] h-[177px] rounded-t-[150px] rounded-b-[20px] "></div>
                  <img
                    src={image1}
                    alt=""
                    className=" absolute bottom-0 w-[479px] h-[792px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
