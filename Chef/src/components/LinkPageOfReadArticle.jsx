import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import data37 from "./data37"
import{Link} from "react-router-dom"
import ReadArticleInsights from "./ReadArticleInsights.png"
export default function ReadArticle(){

   return <>
    <div>
  <Header/>
    </div>

     <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Insights"className="Links">Insights</Link>

      <p className="Line-about-service">Where AI automation creates real business value</p>
      </div>  
    
       <img src={ReadArticleInsights} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">AI Integrations</p>
      <h1 className="Services-Headings-Cloud">Where AI automation creates real business value</h1>
      <p className="Services-Paragraph-Lines">The best AI opportunities are usually practical, repeatable, and measurable. Learn how to identify workflows where automation can save time without adding unnecessary complexity.</p>

      <span> 24 July 2026
        •
        5 min read</span>
    
      
      </div>
      </div>

      <div className="WhatIsInTheArticleInsight">
         <p className="PointsHeading">In this article</p>
        <span className="NoOfPoints">01</span> <p className="Points">Start with the operational problem</p>
          <span className="NoOfPoints">02</span>  <p className="Points">Assess the process and the data</p>
         <span className="NoOfPoints">03</span>  <p className="Points">Build a controlled first use case</p>
         <span className="NoOfPoints">04</span>  <p className="Points">Scale from evidence</p>
          <p className="DateTimeForPoints">24 July 2026</p>
          <p className="DateTimeForPoints">5 min read</p>
      </div>

      {
        data37.map(props=>{
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