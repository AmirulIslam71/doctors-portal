import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Experts from "../Experts/Experts";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Medicine from "../MedicineSection/Medicine";
import NewsLetter from "../NewsLetter/NewsLetter";
import Schedule from "../Schedule/Schedule";
import Services from "../Services/Services";
import SickKid from "../SickKid/SickKid";

const Home = () => {
  return (
    <div>
      <Banner />
      <SickKid />
      <Schedule></Schedule>
      <Medicine></Medicine>
      <Services></Services>
      <Experts></Experts>
      <Feedback></Feedback>
      <Events></Events>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
