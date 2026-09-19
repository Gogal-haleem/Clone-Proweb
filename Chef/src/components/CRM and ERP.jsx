
import Header from "./Header"
import data32 from "./data32"


import CRMandERPIt from "./CRMandERPIt.png"
import {Link} from "react-router-dom"

import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function CRMandERP(){

   return <section >

     <div>
        <Header/>
    </div>

       
     
       <div className="New-Work-Contact">
            <img src={CRMandERPIt} alt="ContactPageImage" className="ImageContact-Page" />
            <p className="Paragraph1-Contact-Page">CRM and ERP</p>
            <h1 className="Heading-Contact-Page">CRM and ERP services</h1>
            <p className="Paragraph2-Contact-Page">Implement, customise, and integrate the platforms your business relies on Salesforce, Dynamics 365, and Microsoft 365.</p>
            < a className="Contact-Link1" href="">View platforms</a>
            <br></br>
            <br></br>
             <Link to="/Contact" className="Contact-Link2" >Talk to us</Link>
           </div>
          
          <div className="Section-Managed-Infrastructure">

        <div className="Reuseable-Cards">
         <p className="Reuseable-Cards-p1">Platforms</p>
         <h1 className="Reuseable-Cards-h1">Choose your platform</h1>
         <p className="Reuseable-Cards-p2">Get implementation, migration, integration, automation, and ongoing support tailored to the platform your teams rely on.</p>
         </div>

         <div className="Reusable-Cards-Data-wraper">
           {
             data32.map((props)=>{
           
               return <div className="Reusable-Cards-Data">
                      <img src={props.img2} className="ImageForCRMandERP"/>
                       <img src={props.img} className="IconsforCRMandERP"  />
                     
                       <h1 className="Reusable-Cards-Data-h1">{props.h1}</h1>
                       <p className="Reusable-Cards-Data-explanation">{props.p}</p>
                       <Link className="Reusable-Cards-Data-Link">{props.link}</Link>

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