import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import data42 from "./data42"
import{Link} from "react-router-dom"
import CloudService from "./CloudService.png"
export default function CRM(){

   return <>
    <div>
  <Header/>
    </div>

     <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Insights"className="Links">Insights</Link>

      <p className="Line-about-service">Salesforce that fits the way you work</p>
      </div>  
    
       <img src={CloudService} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">CRM</p>
      <h1 className="Services-Headings-Cloud">Salesforce that fits the way you work</h1>
      <p className="Services-Paragraph-Lines">Out-of-the-box CRM rarely matches real client journeys. Customisation and automation are what turn Salesforce into an operational advantage.

</p>

      <span>9 May 2026
•
4 min read</span>
    
      
      </div>
      </div>

      <div className="WhatIsInTheArticleInsight">
         <p className="PointsHeading">In this article</p>
        <span className="NoOfPoints">01</span> <p className="Points">
Map the real customer journey first</p>
          <span className="NoOfPoints">02</span>  <p className="Points">
Configure around useful work</p>
         <span className="NoOfPoints">03</span>  <p className="Points">Automate repeatable actions</p>
         <span className="NoOfPoints">04</span>  <p className="Points">Build reporting people can trust</p>
          <p className="DateTimeForPoints">9 May 2026</p>
          <p className="DateTimeForPoints">4 min read</p>
      </div>

      {
        data42.map(props=>{
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