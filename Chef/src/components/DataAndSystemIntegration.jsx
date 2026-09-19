 




import Header from "./Header";
import data19 from "./data19"
import WhyChooseUs from "./WhyChooseUs";
import Consultation from "./Consultation"
import LastSection from "./LastSection"

import {Link} from "react-router-dom"
import  DataAndSystemIntegrationIt from "./DataAndSystemIntegrationIt.png"


export default function DataAndSystemIntegration(){
return <section>
    <div>
        <Header/>
    </div>

    <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Services"className="Links">Services </Link>
      <Link to="/Ai Integration" className="Links">AI Integrations</Link>
      <p className="Line-about-service">AI Integrations</p>
      </div>  
    
       <img src={DataAndSystemIntegrationIt} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">AI Integrations</p>
      <h1 className="Services-Headings-Cloud">Data & System Integrations</h1>
      <p className="Services-Paragraph-Lines">Bring AI into whatever you already run—Salesforce, HubSpot, Dynamics, custom ERP, ticketing, or proprietary databases—with the right model, architecture, and access locked before go-live.</p>
    
      <Link to="/Contact" className="Links-Services">Get in touch </Link>
      <a href="#Reusebale-ServiceContainer" className="Links-Services2">View features</a>
      </div>

    </div>

    <div className="Reusebale-ServiceContainer" id="Reusebale-ServiceContainer">
        <p className="Reusebale-ServiceContainer-P">What we deliver</p>
        <h1 className="Reusebale-ServiceContainer-h1">Our Data & System Integrations features</h1>
        <p className="Reusebale-ServiceContainer-P2">Three practical areas of delivery, each planned around your organisation and supported by our specialist team.</p>

          </div>
       
       <div className="Reusebale-Service-wraper">
        {
         data19.map((props)=>{
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

