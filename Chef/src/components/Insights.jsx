
import Header from "./Header"
import data36 from "./data36"

import ImageForInsightCard from "./ImageForInsightCard.png"

import ImageForInsightPage from "./ImageForInsightPage.png"
import {Link} from "react-router-dom"



import Consultation from "./Consultation"
import LastSection from "./LastSection"


export default function ManagrdInfrastructure(){

   return <section >

     <div>
        <Header/>
    </div>

       
     
       <div className="New-Work-Contact">
            <img src={ImageForInsightPage} alt="ContactPageImage" className="ImageContact-Page" />
            <p className="Paragraph1-Contact-Page">Thinking</p>
            <h1 className="Heading-Contact-Page">Insights</h1>
            <p className="Paragraph2-Contact-Page">Practical ideas on managed IT, cloud, cyber security, AI, digital presence, and CRM written to help businesses make clearer technology decisions.</p>
           </div>
          
           
           < div className="CardOfInsight">
            <Link to="" className="LinkWraperForInsight">
            <img src={ImageForInsightCard} alt="ImageForInsightCard" className="ImageForInsightCard" />
            
            <div className="WrapTextOfInsightCard">
            <Link to="" className="AiIntegration">AI Integrations</Link>
            <p className="IssuedDate">
                24 July 2026
                  •
               5 min read</p>
             <h1 className="HeadingOfIsightCard">Where AI automation creates real business value</h1>
             <p className="explainIsightCard">The best AI opportunities are usually practical, repeatable, and measurable. Learn how to identify workflows where automation can save time without adding unnecessary complexity.</p>
             <Link to="/LinkPageOfReadArticle" className="ReadArticle">Read article</Link>
             </div>
             </Link>
           </div>



          <div className="Section-Managed-Infrastructure">

         <div className="Reusable-Cards-Data-wraper">
           {
               data36.map((props)=>{
          
               return <div className="Reusable-Cards-Data-2">
                <Link to={props.LinkCardto} className="CardsAsLink">
                <img src={props.img} className="Reusable-Cards-Data-img" />
                     <div className="WrapText">
                      <p className="TitleForInsightCards">{props.title}</p>
                       
                     
                       <h1 className="Reusable-Cards-Data-h1-Insight">{props.h1}</h1>
                       <p className="Reusable-Cards-Data-explanation">{props.p}</p>
                       <p className="Reusable-Cards-Data-Link">{props.date}</p>
                       </div>
                       </Link>
                      </div>
             })
           }
         </div>

          <div className="Insight-Guide">
               <h1 className="Guide-Header">Want advice for your business?
</h1>
               <p className="Guide-Paragraph">Talk with our team about managed IT, cloud, cyber security, or CRM and we'll help you choose a practical next step.</p>
               <Link to="/Contact" className="Guide-Link">Talk to an expert today →</Link>
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