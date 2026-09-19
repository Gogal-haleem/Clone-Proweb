
import Header from "./Header"
import data12 from "./data12"


import ManageInfrastructure from "./ManageInfrastructure.png"
import {Link} from "react-router-dom"

import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function ManagrdInfrastructure(){

   return <section >

     <div>
        <Header/>
    </div>

       
     
       <div className="New-Work-Contact">
            <img src={ManageInfrastructure } alt="ContactPageImage" className="ImageContact-Page" />
            <p className="Paragraph1-Contact-Page">Managed infrastructure</p>
            <h1 className="Heading-Contact-Page">Secure, Reliable IT Infrastructure</h1>
            <p className="Paragraph2-Contact-Page">From networks and servers to cloud, cyber security, and 24/7 support, we design and manage infrastructure that fits your business.</p>
            < a className="Contact-Link1" href="">View services</a>
            <br></br>
            <br></br>
             <Link to="/Contact" className="Contact-Link2" >Talk to us</Link>
           </div>
          
          <div className="Section-Managed-Infrastructure">

        <div className="Reuseable-Cards">
         <p className="Reuseable-Cards-p1">What we offer</p>
         <h1 className="Reuseable-Cards-h1">Infrastructure services </h1>
         <p className="Reuseable-Cards-p2">Choose a focused service or combine capabilities into a managed technology environment supported by one accountable team.</p>
         </div>

         <div className="Reusable-Cards-Data-wraper">
           {
             data12.map((props)=>{
             const  Icon=props.img
               return <div className="Reusable-Cards-Data">
                      
                       <Icon size={30} className="Reusable-Cards-Data-img"/>
                     
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