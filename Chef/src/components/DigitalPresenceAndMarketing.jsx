
import Header from "./Header"
import data24 from "./data24"


import DigitalPresenceThatSupportGrowth from "./DigitalPresenceThatSupportGrowth.png"
import {Link} from "react-router-dom"

import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function DigitalPresenceAndMarketing(){

   return <section >

     <div>
        <Header/>
    </div>

       
     
       <div className="New-Work-Contact">
            <img src={DigitalPresenceThatSupportGrowth} alt="ContactPageImage" className="ImageContact-Page" />
            <p className="Paragraph1-Contact-Page">Digital Presence & Marketing</p>
            <h1 className="Heading-Contact-Page">Build A Digital Presence That Supports Real Growth</h1>
            <p className="Paragraph2-Contact-Page">From websites and ongoing management to SEO, email marketing, and campaigns, we help businesses look professional online and stay connected with customers.</p>
            < a className="Contact-Link1" href="">View services</a>
            <br></br>
            <br></br>
             <Link to="/Contact" className="Contact-Link2" >Talk to us</Link>
           </div>
          
          <div className="Section-Managed-Infrastructure">

        <div className="Reuseable-Cards">
         <p className="Reuseable-Cards-p1">Capabilities</p>
         <h1 className="Reuseable-Cards-h1-2">Services that keep your brand visible</h1>
         <p className="Reuseable-Cards-p2">Whether you need a new website, reliable management, or marketing support, we deliver digital services that stay aligned with your business goals.</p>
         </div>
             
         <div className="Reusable-Cards-Data-wraper">
           {
             data24.map((props)=>{
             const  Icon=props.img
               return <div className="Reusable-Cards-Data">
                      
                       <Icon size={26} className="Reusable-Cards-Data-img"/>
                     
                       <h1 className="Reusable-Cards-Data-h1">{props.h1}</h1>
                       <p className="Reusable-Cards-Data-explanation">{props.p}</p>
                       <Link className="LinkofDigitalMarketingCards">{props.Link}</Link>

                      </div>
             })
           }
         </div>

         
           <div className="Controll-Height-Consultation">
                      <Consultation/>
                      </div>
         
                      <div  className="Controll-Height-LastSection">
                      <LastSection/>
                      </div>
           
   </div>
</section>
}