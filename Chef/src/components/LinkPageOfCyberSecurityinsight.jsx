import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import data43 from "./data43"
import{Link} from "react-router-dom"
import CyberSecurityIt from "./CyberSecurityIt.png"
export default function ReadArticle(){

   return <>
    <div>
  <Header/>
    </div>

     <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Insights"className="Links">Insights</Link>

      <p className="Line-about-service">Cyber security basics every business should review</p>
      </div>  
    
       <img src={CyberSecurityIt} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">Cyber Security</p>
      <h1 className="Services-Headings-Cloud">Cyber security basics every business should review</h1>
      <p className="Services-Paragraph-Lines">You don’t need enterprise complexity to raise your security posture. Start with identity, backups, patching, and monitoring that actually get maintained.</p>

      <span>18 April 2026
•
6 min read</span>
    
      
      </div>
      </div>

      <div className="WhatIsInTheArticleInsight">
         <p className="PointsHeading">In this article</p>
        <span className="NoOfPoints">01</span> <p className="Points">Protect identities first</p>
          <span className="NoOfPoints">02</span>  <p className="Points">Keep devices and applications current</p>
         <span className="NoOfPoints">03</span>  <p className="Points">
Prepare for recovery</p>
         <span className="NoOfPoints">04</span>  <p className="Points">
Make security an operating disciplin</p>
          <p className="DateTimeForPoints">18 April 2026</p>
          <p className="DateTimeForPoints">6 min read</p>
      </div>

      {
        data43.map(props=>{
            return<div className="pointsExplanationContainer">
              <p className="pointsNumering">{props.pointno}</p>
              <h1 className="PointsHeadingInArticle">{props.heading}</h1>
              <p className="PointsExplainedInArticle">{props.paragraph}</p>
              {props.purpose && <p className="PurposeOfPoints">{props. purpose}</p>}
            </div>
        })
      }
     
       <div className="Controll-Height-Consultation">
                           <Consultation/>
                           </div>
              
                           <div  className="Controll-Height-LastSection">
                           <LastSection/>
                           </div>

           

           <div className="Controll-For-ReadArticle">
        <p className="Consultation-p1">Practical guidance</p>
        <h1 className="Consultation-h1">Apply These Ideas To Your Business</h1>
        <p className="Consultation-p2">Talk with our team about your current environment, priorities, and the most practical next step.</p>
        <Link  to="/Contact" className="TalkToAnExpertButton" >Talk to an expert today ⟶</Link>
    </div>


    </>
    
}