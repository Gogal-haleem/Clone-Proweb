
import Header from "./Header"
import data17 from "./data17"
import AiIntegrationCard3 from "./AiIntegration-Card3"

import AiIt from "./AiIt.png"
import {Link} from "react-router-dom"

import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function AiIntegration(){

   return <section >

     <div>
        <Header/>
    </div>

       
     
       <div className="New-Work-Contact">
            <img src={AiIt} alt="ContactPageImage" className="ImageContact-Page" />
            <p className="Paragraph1-Contact-Page">Enterprise AI · Governance-first</p>
            <h1 className="Heading-Contact-Page">AI That Knows Your Business, Not Everyone Else's</h1>
            <p className="Paragraph2-Contact-Page">Integrate AI and Microsoft Copilot into your systems with role-based access so every answer respects department, seniority, and data sensitivity. Zero-trust replies—access is verified before answering, never after.</p>
            < a className="Contact-Link1" href="">View services</a>
            <br></br>
            <br></br>
             <Link to="/Contact" className="Contact-Link2" >Book free AI readiness consult</Link>
           </div>
          
          <div className="Section-Managed-Infrastructure">

        <div className="Reuseable-Cards">
         <p className="Reuseable-Cards-p1">The problem</p>
         <h1 className="Reuseable-Cards-h1-2">Every Company Wants AI. Few Ask: Who Should It Talk To?</h1>
         <p className="Reuseable-Cards-p2">Without a permission layer, chatbots and Copilot answer first and check access never. Default AI tools skip the last check. We run it before every response—so restricted data stays restricted.</p>
         </div>
             
         <div className="Reusable-Cards-Data-wraper">
           {
             data17.map((props)=>{
             const  Icon=props.img
               return <div className="Reusable-Cards-Data">
                      
                       <Icon size={30} className="Reusable-Cards-Data-img"/>
                     
                       <h1 className="Reusable-Cards-Data-h1">{props.h1}</h1>
                       <p className="Reusable-Cards-Data-explanation">{props.p}</p>
                      

                      </div>
             })
           }
         </div>

         <div className="AiIntegrationCard-3">
            <p className="AiIntegrationCard-3-p">Two paths. One standard</p>
            <h1 className="AiIntegrationCard-3-h1">Every Company Wants AI. Few Ask: Who Should It Talk To?</h1>
            <p className="AiIntegrationCard-3-p2">Without a permission layer, chatbots and Copilot answer first and check access never. Default AI tools skip the last check. We run it before every response—so restricted data stays restricted.</p>
         </div>


           <div className="WraperofCards-in3">
             {
              AiIntegrationCard3.map((props)=>{
                const Icon=props.img
                return<div className="Cards-in3">
                         <Icon size={30} className="Cards-in3-img"/>
                         <h1 className="Cards-in3-h1">{props.heading}</h1>
                         <p className="Cards-in3-p">{props.paragraph}</p>
                         <Link className="Cards-in3-Link">{props.Link}</Link>
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