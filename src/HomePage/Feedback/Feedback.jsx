import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import image from "../../assets/images/img/Ellipse 7.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Feedback = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      className="mt-[90px] bg-no-repeat container mx-auto rounded-3xl "
      style={{ backgroundImage: `url('${image}')`, height: "510px" }}
    >
      <div className="bg-[#6E27E0CF] h-full rounded-3xl text-white">
        <h1 className="font-bold text-[32px] text-center lg:pt-10 md:pt-5">
          Patient Feedback
        </h1>
        <div
          className="lg:w-2/3 mx-auto "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="w-2/3 mx-auto mt-4 lg:flex gap-4">
                <img
                  src={image}
                  alt=""
                  className="w-[224px] h-[224px] rounded-full"
                />
                <div>
                  <p className="text-sm mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Accumsan duis posuere scelerisque curabitur lorem. Viverra
                    at venenatis, arcu et. Elementum nunc eleifend ipsum mauris
                    ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <h5>TOM COOPPER</h5>
                  <p className="text-sm text-orange-400">
                    Managing Director Or Art
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-2/3 mx-auto mt-4 lg:flex gap-4">
                <img
                  src={image}
                  alt=""
                  className="w-[224px] h-[224px] rounded-full"
                />
                <div>
                  <p className="text-sm mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Accumsan duis posuere scelerisque curabitur lorem. Viverra
                    at venenatis, arcu et. Elementum nunc eleifend ipsum mauris
                    ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <h5>TOM COOPPER</h5>
                  <p className="text-sm text-orange-400">
                    Managing Director Or Art
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
