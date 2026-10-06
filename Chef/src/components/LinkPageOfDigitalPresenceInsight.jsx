import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import data38 from "./data38"
import{Link} from "react-router-dom"
import ImageforDigitalPresencePage from "./ImageforDigitalPresencePage.png"
export default function DigitalPresence(){

   return <>
    <div>
  <Header/>
    </div>

     <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Insights"className="Links">Insights</Link>

      <p className="Line-about-service">What a professional website needs to support growth</p>
      </div>  
    
       <img src={ImageforDigitalPresencePage} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">Digital Presence</p>
      <h1 className="Services-Headings-Cloud">What a professional website needs to support growth</h1>
      <p className="Services-Paragraph-Lines">A strong website needs more than attractive design. Clear messaging, fast performance, accessible navigation, and ongoing care all influence whether visitors become customers.</p>

      <span>10 July 2026
•
5 min read</span>
    
      
      </div>
      </div>

      <div className="WhatIsInTheArticleInsight">
         <p className="PointsHeading">In this article</p>
        <span className="NoOfPoints">01</span> <p className="Points">
Clarity comes before decoration</p>
          <span className="NoOfPoints">02</span>  <p className="Points">Design around real customer journeys</p>
         <span className="NoOfPoints">03</span>  <p className="Points">3
Performance and accessibility matter</p>
         <span className="NoOfPoints">04</span>  <p className="Points">Treat launch as the beginning</p>
          <p className="DateTimeForPoints">10 July 2026</p>
          <p className="DateTimeForPoints">5 min read</p>
      </div>

      {
        data38.map(props=>{
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