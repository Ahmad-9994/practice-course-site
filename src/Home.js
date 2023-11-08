import "./style.css"
import Header from "./Header"
import Common from "./Common"
import Team from "./Team"
import ServiceCommon from "./ServiceCommon"
import Commonbranches from "./Commonbranches"
import Footer from "./Footer"
function Home() {
    return (
        <div className="home">
            <Header />
            <Common
                name="Grow Your Bussines With"
                pic="./images/pic.png"
                visit="./service"
                dec="I have Talented Developer Team with profissional experience"
                btname="Our Services"
            />




            <div className="sec-3">
                <h2>If you are Looking for Website Development Services in Nashik and want to launch your own website we can help you, to know more call us at:+91 8208156654 or +91 9766362403 or you can email us at: sales@dotphi.com</h2>
            </div>
            <br></br>
 
             <Commonbranches />

            <div className="team">
                <h1 style={{ color: " #1fc9ad", fontSize: "50px" }}>Our Team</h1>

                <div className="team-display">
                    <Team devpic="./images/dev1.jpg" name="ahmad ali" />
                    <Team devpic="./images/dev3.jpg" name=" hussain ahmad" />
                    <Team devpic="./images/dev2.jpg" name="sufyan" />
                </div>

            </div>

           <br></br>
           <br></br>

                              <div className="ServiceCommon-display">

                              <ServiceCommon />
                              <ServiceCommon />
                              <ServiceCommon />
                              <ServiceCommon />

                              </div>

      <Footer />
        </div>
    )
}

export default Home