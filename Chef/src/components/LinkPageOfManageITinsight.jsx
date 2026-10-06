import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import data40 from "./data40"
import{Link} from "react-router-dom"
import ManageInfrastructure from "./ManageInfrastructure.png"

export default function ReadArticle(){

   return <>
    <div>
  <Header/>
    </div>

     <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Insights"className="Links">Insights</Link>

      <p className="Line-about-service">Why managed IT matters for growing SMEs</p>
      </div>  
    
       <img src={ManageInfrastructure} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">Managed IT</p>
      <h1 className="Services-Headings-Cloud">Why managed IT matters for growing SMEs</h1>
      <p className="Services-Paragraph-Lines">As businesses grow, reactive IT support quickly becomes a bottleneck. Here’s why a managed approach creates more stability, security, and room to scale.</p>

      <span>12 June 2026
•
4 min read</span>
    
      
      </div>
      </div>

      <div className="WhatIsInTheArticleInsight">
         <p className="PointsHeading">In this article</p>
        <span className="NoOfPoints">01</span> <p className="Points">
Growth changes the support requirement</p>
          <span className="NoOfPoints">02</span>  <p className="Points">Move from reactive fixes to prevention</p>
         <span className="NoOfPoints">03</span>  <p className="Points">Create clear ownership</p>
         <span className="NoOfPoints">04</span>  <p className="Points">
Use technology planning to support growth</p>
          <p className="DateTimeForPoints">12 June 2026</p>
          <p className="DateTimeForPoints">4 min read</p>
      </div>

      {
        data40.map(props=>{
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