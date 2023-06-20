import image from "../../assets/images/img/image2.png";
import dot from "../../assets/images/icon/Dot Grid (1).png";
import banner from "../../assets/images/icon/Group 172.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NewsLetter = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className="bg-no-repeat"
      style={{
        backgroundImage: `url('${banner}')`,
        backgroundPosition: "top right",
      }}
    >
      <div className="container mx-auto mt-10">
        <div
          className="relative"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="bg-[#0089BA] lg:h-[448px] h-[748px] rounded-lg"></div>

          <img
            src={image}
            alt=""
            className="w-[354px] h-[524px] absolute bottom-0 pl-24"
          />
          <img src={dot} alt="" className="absolute lg:top-8 top-72 left-20" />
          <div className="mb-52 absolute lg:top-1/4 lg:right-1/4 top-0 text-white pr-24 p-3">
            <h2 className="font-semibold text-2xl mb-4">Subscribe Now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
              elit tellus, luctus nec.
            </p>
            <div className="bg-white w-full mt-10 flex justify-between p-1">
              <input type="text" placeholder="Your email here" className="" />
              <button className="bg-[#FF8B42]  py-4 px-12 ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
