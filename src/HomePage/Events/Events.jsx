import image from "../../assets/images/img/Rectangle 26 (1).png";

const Events = () => {
  return (
    <div className="mt-[90px] container mx-auto mb-[118px]">
      <div className="text-center mb-[70px]">
        <h2 className="font-bold text-[40px]">Upcoming Events</h2>
        <p className="font-medium text-base w-2/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <div className="lg:flex border-2">
          <div className="lg:w-2/5 md:w-2/5">
            <img src={image} alt="" className="w-full h-full" />
          </div>
          <div className="lg:w-3/5 md:w-3/5 p-8">
            <h2 className="font-semibold text-[28px]">
              How to lead a good healthy life
            </h2>
            <p>
              <span>15 oct 2019</span> <span>8.00AM-5.00PM</span>{" "}
              <span>uttara, Tx 70240</span>
            </p>
            <p className="text-base mt-5">
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved. Early had add equal china
              quiet visit. Appear an manner as no limits either praise in. In in
              written on charmed justice is amiable farther besides. Law
              insensible middletons unsatiable for apartments boy delightful
              unreserved.
            </p>

            <div className="mt-11">
              <button className="btn bg-[#FF8B42] p-3">Book Now</button>
              <button className="btn btn-outline text-[#FF8B42] ml-4">
                10 Available
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[40px] mb-4">
          <div className="lg:flex border-2">
            <div className="lg:w-3/5 md:w-3/5 p-8">
              <h2 className="font-semibold text-[28px]">
                How to lead a good healthy life
              </h2>
              <p>
                <span>15 oct 2019</span> <span>8.00AM-5.00PM</span>{" "}
                <span>uttara, Tx 70240</span>
              </p>
              <p className="text-base mt-5">
                Early had add equal china quiet visit. Appear an manner as no
                limits either praise in. In in written on charmed justice is
                amiable farther besides. Law insensible middletons unsatiable
                for apartments boy delightful unreserved. Early had add equal
                china quiet visit. Appear an manner as no limits either praise
                in. In in written on charmed justice is amiable farther besides.
                Law insensible middletons unsatiable for apartments boy
                delightful unreserved.
              </p>

              <div className="mt-11">
                <button className="btn bg-[#FF8B42] p-3">Book Now</button>
                <button className="btn btn-outline text-[#FF8B42] ml-4">
                  10 Available
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 md:w-2/5">
              <img src={image} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
