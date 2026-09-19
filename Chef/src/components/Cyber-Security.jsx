
import Header from "./Header";
import data14 from "./data14"
import WhyChooseUs from "./WhyChooseUs";
import Consultation from "./Consultation"
import LastSection from "./LastSection"

import {Link} from "react-router-dom"
import CyberSecurityImage from "./CyberSecurityIt.png"

export default function CyberSecurity(){
return <section>
    <div>
        <Header/>
    </div>

    <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Services"className="Links">Services </Link>
      <Link to="/Managed-Infrastructure" className="Links">Managed infrastructure</Link>
      <p className="Line-about-service">Managed IT Services</p>
      </div>  
    
       <img src={CyberSecurityImage} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">Managed infrastructure</p>
      <h1 className="Services-Headings-Cloud">Cyber Security</h1>
      <p className="Services-Paragraph-Lines">We can help you protect your business from cyber threats with comprehensive security services. Our cyber security solutions include assessments, managed security services, and incident response to safeguard your data and operations.</p>
    
      <Link to="/Contact" className="Links-Services">Get in touch </Link>
      <a href="#Reusebale-ServiceContainer" className="Links-Services2">View features</a>
      </div>

    </div>

    <div className="Reusebale-ServiceContainer" id="Reusebale-ServiceContainer">
        <p className="Reusebale-ServiceContainer-P">What we deliver</p>
        <h1 className="Reusebale-ServiceContainer-h1">Our Cyber Security features</h1>
        <p className="Reusebale-ServiceContainer-P2">Three practical areas of delivery, each planned around your organisation and supported by our specialist team.</p>

          </div>
       
       <div className="Reusebale-Service-wraper">
        {
         data14.map((props)=>{
            return<div className="Reusebale-Service">
                <img src={props.img} alt="Image" className="Reusebale-Service-Image2"/>
                 
                 <div className="Wraper-Services">

                 <p className="Reusebale-Service-capabilities"> {props.capability}</p>
                <h1 className="Reusebale-Service-title">{props.heading}</h1>
                <p className="Reusebale-Service-explanation">{props. explanation}</p>
                <p className="Reusebale-Service-Included">{props.included}</p>
                </div>
                </div>
         })
        }
       </div>
             < WhyChooseUs/>
             <div className="Controll-Height-Consultation">
             <Consultation/>
             </div>

             <div  className="Controll-Height-LastSection">
             <LastSection/>
             </div>
</section>

}
