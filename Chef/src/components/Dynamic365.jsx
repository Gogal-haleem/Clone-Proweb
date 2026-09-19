

 




import Header from "./Header";
import data33 from "./data33"
import WhyChooseUs from "./WhyChooseUs";
import Consultation from "./Consultation"
import LastSection from "./LastSection"

import {Link} from "react-router-dom"
import Dynamic365It from "./Dynamic365It.png"


export default function Salesforce(){
return <section>
    <div>
        <Header/>
    </div>

    <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Services"className="Links">Services </Link>
      <Link to="/CRM and ERP" className="Links">CRM & ERP Services</Link>
      <p className="Line-about-service">Dynamics 365</p>
      </div>  
    
       <img src={Dynamic365It} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">CRM & ERP</p>
      <h1 className="Services-Headings-Cloud">Dynamics 365</h1>
      <p className="Services-Paragraph-Lines">With Dynamics 365, you have access to a portfolio of intelligent business apps, which enables everyone to provide operational excellence and create more engaging customer experiences.</p>
    
      <Link to="/Contact" className="Links-Services">Get in touch </Link>
      <a href="#Reusebale-ServiceContainer" className="Links-Services2">View features</a>
      </div>

    </div>

    <div className="Reusebale-ServiceContainer" id="Reusebale-ServiceContainer">
        <p className="Reusebale-ServiceContainer-P">What we deliver</p>
        <h1 className="Reusebale-ServiceContainer-h1">Our Dynamics 365 features</h1>
        <p className="Reusebale-ServiceContainer-P2">Three practical areas of delivery, each planned around your organisation and supported by our specialist team.</p>

          </div>
       
       <div className="Reusebale-Service-wraper">
        {
         data33.map((props)=>{
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

