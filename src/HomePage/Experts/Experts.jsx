import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img1 from "../../assets/images/img/Rectangle 13.png";
import img2 from "../../assets/images/img/Rectangle 108.png";
import img3 from "../../assets/images/img/Rectangle 108 (1).png";
import { FaRegBookmark } from "react-icons/fa";

const Experts = () => {
  return (
    <div className="mt-[120px]">
      <div>
        <div className="text-center">
          <h2 className="font-bold text-[40px]">Our Medical Experts</h2>
          <p className="font-medium text-base w-2/3 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum augue quis augue ornare, eget faucibus felis pharetra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:p-10">
                <div className="card card-compact bg-base-100 shadow ">
                  <figure>
                    <img
                      src={img1}
                      alt="Shoes"
                      className="w-[413px] h-[343px]"
                    />
                  </figure>
                  <div className="p-2">
                    <div className="flex justify-between">
                      <div className="mb-4">
                        <h2 className="card-title">Dr. Emrul Kayes</h2>
                        <p>MBBS, FCFS, BCS, BSCBS</p>
                      </div>
                      <p>
                        <FaRegBookmark></FaRegBookmark>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p className="w-4/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna.
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn bg-[#FF8B42]">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 shadow ">
                  <figure>
                    <img
                      src={img2}
                      alt="Shoes"
                      className="w-[413px] h-[343px]"
                    />
                  </figure>
                  <div className="p-2">
                    <div className="flex justify-between">
                      <div className="mb-4">
                        <h2 className="card-title">Dr. Emrul Kayes</h2>
                        <p>MBBS, FCFS, BCS, BSCBS</p>
                      </div>
                      <p>
                        <FaRegBookmark></FaRegBookmark>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p className="w-4/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna.
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn bg-[#FF8B42]">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-compact bg-base-100 shadow ">
                  <figure>
                    <img
                      src={img3}
                      alt="Shoes"
                      className="w-[413px] h-[343px]"
                    />
                  </figure>
                  <div className="p-2">
                    <div className="flex justify-between">
                      <div className="mb-4">
                        <h2 className="card-title">Dr. Emrul Kayes</h2>
                        <p>MBBS, FCFS, BCS, BSCBS</p>
                      </div>
                      <p>
                        <FaRegBookmark></FaRegBookmark>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p className="w-4/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Urna.
                      </p>
                      <div className="card-actions justify-end">
                        <button className="btn bg-[#FF8B42]">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Experts;
