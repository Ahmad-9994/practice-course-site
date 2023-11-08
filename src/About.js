import Header from "./Header";
import Common from "./Common";
import Team from "./Team";
import AboutDes from "./AboutDes";
import Footer from "./Footer";
import Commonbranches from "./Commonbranches";
function About(){
    return(
        
        <div  className="about">
        <Header />
        <Common 
         name="Welcome To About Page"
         pic="./images/pic2.png" 
         visit="/contact"
         dec="I have Talented Developer Team with profissional experience"
         btname="Get Started"
        />
        
        <AboutDes />
    <Commonbranches />
        <Footer />
        </div>
    )
}

export default About