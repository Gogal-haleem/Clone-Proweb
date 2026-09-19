

 




import Header from "./Header";
import data21 from "./data21"
import WhyChooseUs from "./WhyChooseUs";
import Consultation from "./Consultation"
import LastSection from "./LastSection"

import {Link} from "react-router-dom"
import WebsiteManagment from "./WebsiteManagment.png"


export default function WebsiteManagement(){
return <section>
    <div>
        <Header/>
    </div>

    <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Services"className="Links">Services </Link>
       <Link to="/DigitalPresenceAndMarketing" className="Links">Digital Presence & Marketing</Link>
      <p className="Line-about-service">Website Management</p>
      </div>  
    
       <img src={WebsiteManagment} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">Digital Presence & Marketing</p>
      <h1 className="Services-Headings-Cloud">Website Management</h1>
      <p className="Services-Paragraph-Lines">We manage websites after launch so content updates, security patches, backups, and performance monitoring stay handled without adding pressure to your team.</p>
    
      <Link to="/Contact" className="Links-Services">Get in touch </Link>
      <a href="#Reusebale-ServiceContainer" className="Links-Services2">View features</a>
      </div>

    </div>

    <div className="Reusebale-ServiceContainer" id="Reusebale-ServiceContainer">
        <p className="Reusebale-ServiceContainer-P">What we deliver</p>
        <h1 className="Reusebale-ServiceContainer-h1">Our Website Management features</h1>
        <p className="Reusebale-ServiceContainer-P2">Three practical areas of delivery, each planned around your organisation and supported by our specialist team.</p>

          </div>
       
       <div className="Reusebale-Service-wraper">
        {
         data21.map((props)=>{
            return<div className="Reusebale-Service">
                <img src={props.img} alt="Image" className="Reusebale-Service-Image2"/>
                 
                 <div className="Wraper-Services">

                 <p className="Reusebale-Service-capabilities"> {props.capability}</p>
                <h1 className="Reusebale-Service-title-4">{props.heading}</h1>
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

