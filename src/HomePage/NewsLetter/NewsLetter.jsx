import image from "../../assets/images/img/image2.png";

const NewsLetter = () => {
  return (
    <div className="container mx-auto">
      <div className="relative mt-3">
        <div className="bg-[#0089BA] h-[448px] rounded-lg"></div>
        <div className="absolute bottom-0">
          <div className="lg:flex">
            <img src={image} alt="" className="w-[354px] h-[524px]" />

            <div className="mb-52">
              <h2>Subscribe Now</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.
              </p>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
