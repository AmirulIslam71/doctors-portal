import icon from "../../assets/images/icon/Logo.png";
import {
  FaAddressBook,
  FaDownload,
  FaLinkedin,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto text-white mt-[120px]">
      <footer className=" p-10 bg-[#273240] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="footer-title">
            <img src={icon} alt="" />
          </span>
          <a className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            cras velit senectus id tellus aliquam enim felis. Sed commodo cursus
            tellus sapien, viverra imperdiet morbi dignissim. Consequat in metus
            arcu eget.
          </a>
          <div className="flex gap-1 mt-4">
            <div className="bg-[#FF8B42] rounded-lg p-2 w-8">
              <FaTwitter></FaTwitter>
            </div>
            <div className="bg-[#FF8B42] rounded-lg p-2 w-8">
              <FaLinkedin></FaLinkedin>
            </div>
            <div className="bg-[#FF8B42] rounded-lg p-2 w-8">
              <FaYoutube></FaYoutube>
            </div>
          </div>
        </div>

        <div>
          <span className="footer-title">Our Services</span>
          <p>Bills & Insurance</p>
          <p>Cancer Screening</p>
          <p>Cardiac Surgery</p>
          <p>Neurology</p>
          <p>Covid-19 Vaccine</p>
        </div>

        <div>
          <span className="footer-title">Contact Us</span>
          <div className="flex gap-3">
            <p className="p-1">
              <FaSearchLocation></FaSearchLocation>
            </p>
            <div>
              <p>
                1234 Uttara Khal Pahr,
                <br /> Image Osman Center,
                <br /> Sonargao, Janapath,
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="p-1">
              <FaPhone></FaPhone>
            </p>
            <div>
              <p>+09876543211</p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="p-1">
              <FaAddressBook></FaAddressBook>
            </p>
            <div>
              <p>doctorguide@example.com</p>
            </div>
          </div>
        </div>

        <div>
          <span className="footer-title">Doctors Schedule</span>
          <p>
            At vero eos et accusam et justou dolores et ea rebum tet clita kasd
            gubergren no sea takimata.
          </p>
          <button className="flex gap-2 bg-[#FF8B42] py-4 px-12 rounded-lg mt-7">
            <FaDownload></FaDownload> <span>View Schedule</span>
          </button>
        </div>
      </footer>

      <footer className="footer px-10 py-4 border-t bg-[#273240] border-base-300">
        <div>
          <p>Copyright © 2022. All Rights Reserved. Made with by Solutya.</p>
        </div>
        <div className="flex">
          <p>Latest news </p>
          <p>Privacy Policy </p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
