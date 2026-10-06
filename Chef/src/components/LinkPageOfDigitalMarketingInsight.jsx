import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import data39 from "./data39"
import{Link} from "react-router-dom"
import ImageForDigatalMarketingCard from "./ImageForDigatalMarketingCard.png"
export default function ReadArticle(){

   return <>
    <div>
  <Header/>
    </div>

     <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Insights"className="Links">Insights</Link>

      <p className="Line-about-service">How to make email marketing useful, not intrusive</p>
      </div>  
    
       <img src={ImageForDigatalMarketingCard} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">Digital Marketing</p>
      <h1 className="Services-Headings-Cloud">How to make email marketing useful, not intrusive</h1>
      <p className="Services-Paragraph-Lines">Relevant email campaigns strengthen customer relationships when they are timely, focused, and built around information people genuinely value.</p>

      <span>26 June 2026
•
4 min read </span>
    
      
      </div>
      </div>

      <div className="WhatIsInTheArticleInsight">
         <p className="PointsHeading">In this article</p>
        <span className="NoOfPoints">01</span> <p className="Points">
Give every campaign a purpose</p>
          <span className="NoOfPoints">02</span>  <p className="Points">
Send relevant information</p>
         <span className="NoOfPoints">03</span>  <p className="Points">Make the next step obvious</p>
         <span className="NoOfPoints">04</span>  <p className="Points">mprove using meaningful results</p>
          <p className="DateTimeForPoints">26 June 2026</p>
          <p className="DateTimeForPoints">4 min read</p>
      </div>

      {
        data39.map(props=>{
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