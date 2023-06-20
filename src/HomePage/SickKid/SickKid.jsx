import icon from "../../assets/images/icon/Vector.png";
import image2 from "../../assets/images/img/image1.png";
import dot2 from "../../assets/images/icon/Dot Grid (1).png";
import bag from "../../assets/images/icon/bag.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SickKid = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 mt-10">
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className="flex items-center gap-3 rounded-full shadow-2xl w-[270px] h-[75px] p-2">
          <img
            src={icon}
            alt=""
            className="w-[61px] h-[61px] bg-[#6E27E0] rounded-full p-3"
          />
          <div>
            <p className="text-sm font-semibold">Consult Online</p>
            <p className="text-sm">Best Solution</p>
          </div>
        </div>
        <div className="relative mt-[78px]">
          <div className="bg-[#FF8B42] lg:w-[626px] h-[422px] rounded-full"></div>
          <img
            src={image2}
            alt=""
            className=" absolute bottom-0 left-32 lg:w-[436px] lg:h-[614px] "
          />
          <img src={dot2} alt="" className="absolute top-0 right-0" />
          <div className="flex items-center bg-white gap-3 rounded-full shadow-2xl w-[270px] h-[75px] p-2 absolute bottom-[90px] right-[-124px]">
            <img
              src={icon}
              alt=""
              className="w-[61px] h-[61px] bg-[#0089BA] rounded-full p-3"
            />
            <div>
              <p className="text-sm font-semibold">Consult Online</p>
              <p className="text-sm">Best Solution</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:ml-[125px] md:ml-[60px] lg:mt-28 mt-5">
        <h2 className="font-bold text-4xl mb-16">
          Sick Kid? How to Deal with a <br /> Child’s Fever: 4 Steps
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={bag} alt="" className="w-[27px] h-[25px]" />
            <p>Cras sit sed nec a nunc</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={bag} alt="" className="w-[27px] h-[25px]" />
            <p>Tempor mauris mauris in</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={bag} alt="" className="w-[27px] h-[25px]" />
            <p>Nibh turpis praesent pretium</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={bag} alt="" className="w-[27px] h-[25px]" />
            <p>Cras sit sed nec a nunc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SickKid;
