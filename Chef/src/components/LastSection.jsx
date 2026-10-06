import logo from "./logo.png"
import {FaFacebook, FaLinkedin} from "react-icons/fa"
import {FaMapMarkerAlt,FaPhoneAlt,FaEnvelope} from "react-icons/fa"
import {Link} from "react-router-dom"
export default function LastSection(){
    return <section className="LastSection-container">

        <div className="LogoContainer">
         <img src={logo} alt="prowebLogo" height="100px"/>
          <p>Proweb Technologies help businesses with Managed IT Services, websites, apps, CRM & ERP implementation, and digital solutions built for growth.</p>
          <p>Doing business as Proweb Technologies

ABN 64 631 335 923</p>
     <a href="https://www.facebook.com/people/Proweb/100075814934889/#" target="_blank" rel="noreferrer">< FaFacebook size={30}/></a>
     <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEi6ATgUz2ZMgAAAaBiQflwcPqgtOB6KB0UXLCukwtKa-kvcYkiGHbkR09EAVkRUHlQ9opNGj7PC-ybmCtbROdP_jOMiPOt3paK8PlRaEJ9e1OtH_zi6A8iKHKojeAaKNsLPGw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fprowebau%2Fposts%2F%3FfeedView%3Dall" target="blank" rel="noreferrer"> <FaLinkedin size={30}/> </a>
        </div>


      
        <div className="CompanyContainer">
        <h2 className="h2LastSection">Company
</h2>
          <br></br>
          <Link to="/Services"className="link-LastSection" href="">Services</Link>
          <br></br>
          <Link to="/CaseStudies" className="link-LastSection" href="">Case studies</Link>
          <br></br>
          <Link to="/AboutUs" className="link-LastSection" href="">About us</Link>
          <br></br>
          <Link to="/Carrer" className="link-LastSection" href="">Careers</Link>
          <br></br>
          <Link to="/ourTeam" className="link-LastSection" href="">Team</Link>
        </div>


          <div className="ServiceContainer">
          <h2 className="h2LastSection" >Services</h2>
          <br></br>
          <Link to="/Managed-Infrastructure" className="link-LastSection"href="">Managed InfrastructureI</Link>
          <br></br>
          <Link to="/Ai Integration"  className="link-LastSection" href="">AI Integrations</Link>
          <br></br>
          <Link to="/DigitalPresenceAndMarketing"  className="link-LastSection"href="">Digital Presence & Marketing</Link>
          <br></br>
          <Link to="/ITSupport"  className="link-LastSection" href="">Technology Solutions</Link>
          <br></br>
          <Link to="/CRM and ERP"  className="link-LastSection" href=""> CRM, ERP & BI</Link>
        </div>

        <div className="ContactContainer">
         <h2>Contact</h2>
        <p className="Contact-of-Lastsection"><FaMapMarkerAlt/>
        3/411 Church St,Parramatta NSW 2150 </p>
        <p className="Contact-of-Lastsection"><FaPhoneAlt/>(02) 9897 2245</p>
        <p className="Contact-of-Lastsection"><FaEnvelope/>support@prowb.com.au
        </p>
        
        </div>

        <div className="Owner-of-Site">
            <p className="p-owoner">This site is owned and operated by Proweb Technologies</p>
            <p className="p2-owoer">© 2026 All rights reserved.</p>
        </div>
    </section>
}