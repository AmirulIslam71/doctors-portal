import service from "../../assets/images/img/Rectangle 34.png";
import bed from "../../assets/images/icon/Vector.png";
import bed1 from "../../assets/images/icon/bed.png";
import bed2 from "../../assets/images/icon/beg2.png";
import bed3 from "../../assets/images/icon/beg3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className="mt-[118px] "
      style={{ backgroundImage: `url('${service}')`, height: "510px" }}
    >
      <div
        className="bg-gradient-to-b from-[#0089BA] to-[#4C07BC] h-full opacity-50"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="container mx-auto text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:mt-48 font-bold lg:text-[40px] text-[20px] mt-4">
            <div className="w-1/2 mx-auto">
              <img src={bed} alt="" className="w-[97px] h-[112px] lg:ml-7" />
              <p className="border-b-4 text-center">50</p>
            </div>
            <h2>Medical Experts</h2>
          </div>
          <div className="lg:mt-48 font-bold lg:text-[40px] text-[20px] mt-10">
            <div className="w-1/2 mx-auto">
              <img src={bed1} alt="" className="w-[97px] h-[112px] lg:ml-7" />
              <p className="border-b-4 text-center">500</p>
            </div>
            <h2>Hospital Rooms</h2>
          </div>
          <div className="lg:mt-48 font-bold lg:text-[40px] text-[20px] mt-4">
            <div className="w-1/2 mx-auto">
              <img src={bed2} alt="" className="w-[97px] h-[112px] lg:ml-7" />
              <p className="border-b-4 text-center">20</p>
            </div>
            <h2>Awwwards Win</h2>
          </div>
          <div className="lg:mt-48 font-bold lg:text-[40px] text-[20px] mt-4">
            <div className="w-1/2 mx-auto">
              <img src={bed3} alt="" className="w-[97px] h-[112px] lg:ml-7" />
              <p className="border-b-4 text-center">50000</p>
            </div>
            <h2>Happy Patients</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
