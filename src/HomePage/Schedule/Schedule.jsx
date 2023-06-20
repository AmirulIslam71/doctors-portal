import image2 from "../../assets/images/img/sick.png";
import dot from "../../assets/images/icon/Dot Grid (1).png";

const Schedule = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 mt-32">
      <div className="w-10/12 mx-auto">
        <h2 className="text-[#273240] font-bold text-3xl mb-10 text-center">
          Doctor’s Schedule Today
        </h2>
        <div className="divide-y-2 space-y-16">
          <div className="flex justify-between items-center pt-4">
            <p className="text-[#EA5262] text-[28px]">08:00</p>
            <div>
              <h3 className="font-medium text-[20px]">General Practitioner</h3>
              <p className="font-normal text-base">Dr. Robbert Algazali</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4">
            <p className="text-[#EA5262] text-[28px]">08:00</p>
            <div>
              <h3 className="font-medium text-[20px]">General Practitioner</h3>
              <p className="font-normal text-base">Dr. Robbert Algazali</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4">
            <p className="text-[#EA5262] text-[28px]">08:00</p>
            <div>
              <h3 className="font-medium text-[20px]">General Practitioner</h3>
              <p className="font-normal text-base">Dr. Robbert Algazali</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4">
            <p className="text-[#EA5262] text-[28px]">08:00</p>
            <div>
              <h3 className="font-medium text-[20px]">General Practitioner</h3>
              <p className="font-normal text-base">Dr. Robbert Algazali</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4">
            <p className="text-[#EA5262] text-[28px]">08:00</p>
            <div>
              <h3 className="font-medium text-[20px]">General Practitioner</h3>
              <p className="font-normal text-base">Dr. Robbert Algazali</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-auto relative lg:mt-2 mt-40">
        <div className="bg-[#0089BA] lg:w-[466px] h-[746px] rounded-tl-[20px] rounded-tr-[80px] rounded-br-[20px] rounded-bl-[20px]"></div>
        <img
          src={image2}
          alt=""
          className=" absolute bottom-0 w-[645px] h-[874px] "
        />
        <img src={dot} alt="" className="absolute top-[-50px] right-[-30px]" />
      </div>
    </div>
  );
};

export default Schedule;
