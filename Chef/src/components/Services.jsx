import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

import ServiceImage  from "./Service.png"
import data10 from "./data10"
import {Link} from "react-router-dom"
export default function Services (){

    return<section>
              <div>
                <Header/>
              </div>
            
            <div className="NewService-Container">
            <img className="NewService-Image" src={ServiceImage} alt="Image" />
            <p className="NewService-paragraph">What we deliver</p>
            <h1 className="NewService-heading">Services</h1>
            <p className="NewService-paragraph2">From managed infrastructure and AI integrations to digital presence, cloud, and CRM platforms, we help you plan, implement, and support the technology your business relies on. Every engagement includes clear advice, practical delivery, secure integration, and ongoing support aligned with your operations</p>
            <Link to="/Contact"  className="NewService-link1" >Talk to an expert →</Link>
            <Link to="/CaseStudies" className="NewService-link2" href="">View case studies</Link>
            </div>

            <div className="Wraper">
              {                                          
                data10.map((props)=>{
              
                 return<div className="PropsDiv">
                    
                         <img src={props.img} alt="ImageOfServices" className="Image-Service2"/>
                         <div className="wraper">
                          <h1 className="HeadingServices2">{props.heading}</h1>
                          <p className="ParagraphServices">{props.text}</p>

                          <div className="LinksDivService2">
                          <Link to={props.LinKto} className="linkServices" >{props.link1}</Link>
                          <Link to={props.Linkto1} className="linkServices" >{props.link2}</Link>
                          {props.Linkto2 &&<Link to={props.Linkto2} className="linkServices" >{props.link3}</Link>}
                          {props.Linkto3 && <Link to={props.Linkto3}className="linkServices" >{props.link4}</Link>} 
                          {props.Linkto4 &&<Link to={props.Linkto4} className="linkServices">{props.link5}</Link>}
                          <Link to={props.LinktoPage} className="LinkServices" >{props.Link}</Link>
                          </div>
                 </div>
                 </div>
                })
              }
            </div>

            


             <div className="Service-Guide">
               <h1 className="Guide-Header">Not Sure Where To Start?</h1>
               <p className="Guide-Paragraph">Tell us your goals and we'll recommend the right mix of infrastructure, AI, digital presence, and business platforms.</p>
               <Link to="/Contact" className="Guide-Link">Talk to an expert today →</Link>
              </div>

              <div className="Let-Start-Background">
              <div className="Let-Start">
               <Consultation/>
              </div>
              </div>

             <div className="Last-Section03-Background">
             <div className="Last-Section03">
              < LastSection/>
             </div>
             </div>

        

          </section>

}