import Header from "./Header"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import data41 from "./data41"
import{Link} from "react-router-dom"
import CloudService from "./CloudService.png"
export default function Cloud(){

   return <>
    <div>
  <Header/>
    </div>

     <div className="ServicesLinkContainer">


      <div className="ServiceslinksContainer">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Insights"className="Links">Insights</Link>

      <p className="Line-about-service">Cloud migration without the chaos</p>
      </div>  
    
       <img src={CloudService} alt="Services Image" className="ManageImage"/>



       <div className="Services-Information">
       
      <p className="Services-paragraph-title">Cloud</p>
      <h1 className="Services-Headings-Cloud">Cloud migration without the chaos</h1>
      <p className="Services-Paragraph-Lines">A successful cloud move is less about tools and more about preparation. These are the practical steps that keep migrations calm, clear, and controlled.</p>

      <span>28 May 2026
•
5 min read</span>
    
      
      </div>
      </div>

      <div className="WhatIsInTheArticleInsight">
         <p className="PointsHeading">In this article</p>
        <span className="NoOfPoints">01</span> <p className="Points">
Understand the current environment</p>
          <span className="NoOfPoints">02</span>  <p className="Points">Choose the right destination</p>
         <span className="NoOfPoints">03</span>  <p className="Points">Migrate in controlled stages</p>
         <span className="NoOfPoints">04</span>  <p className="Points">Optimise after the move</p>
          <p className="DateTimeForPoints">28 May 2026</p>
          <p className="DateTimeForPoints">5 min read</p>
      </div>

      {
        data41.map(props=>{
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