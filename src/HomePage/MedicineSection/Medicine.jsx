import img1 from "../../assets/images/img/Rectangle 26.png";
import img2 from "../../assets/images/img/Rectangle 26 (1).png";
import img3 from "../../assets/images/img/Rectangle 26 (2).png";
import img4 from "../../assets/images/img/Rectangle 26 (3).png";
import img5 from "../../assets/images/img/Rectangle 26 (4).png";
import img6 from "../../assets/images/img/Rectangle 26 (5).png";
import img7 from "../../assets/images/img/Rectangle 26 (6).png";
import img8 from "../../assets/images/img/Rectangle 26 (7).png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Medicine = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="container mx-auto mt-[107px]">
      <div className="text-center">
        <h2 className="font-bold text-[40px]">Our Medical Care</h2>
        <p className="font-medium text-base">Services We Provide</p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div>
          <img src={img1} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Orthopedic Clinic
          </h3>
        </div>
        <div>
          <img src={img2} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Cardiac Surgery
          </h3>
        </div>
        <div>
          <img src={img3} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Cancer Screening
          </h3>
        </div>
        <div>
          <img src={img4} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Neurology
          </h3>
        </div>
        <div>
          <img src={img5} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Pediatric & Adult Audiology
          </h3>
        </div>
        <div>
          <img src={img6} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Neurology
          </h3>
        </div>
        <div>
          <img src={img7} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Hearing Tests & Aids
          </h3>
        </div>
        <div>
          <img src={img8} alt="" className="w-[303px] h-[227px]" />
          <h3 className="bg-[#6E27E0] w-[303px] text-white text-center text-xl font-medium p-1">
            Orthopedic Clinic
          </h3>
        </div>
      </div>
      <div className="text-center">
        <button className=" bg-[#FF8B42] mt-[40px] p-2 rounded">
          LOAD MORE DEPARTMENTS
        </button>
      </div>
    </div>
  );
};

export default Medicine;
