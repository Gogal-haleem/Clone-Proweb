
import {Link} from "react-router-dom"
import Header from "./Header"
import data35 from "./data35"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function CaseStudies(){
 


    return <section className="SectionForCaseStudies">

     <Header/>

     <div className="ContainerForCaseStudies">

      <p className="ParagraphForCaseStudies">Case studies</p>
      <h1 className="headingForCaseStudies">Real Partnerships. Practical Technology Outcomes.</h1>
      <p  className="paragraph2ForCaseStudies">See how Australian organisations use our infrastructure, cloud, CRM, automation, websites, and digital marketing expertise to solve everyday challenges and build lasting capability.</p>
      <a href="" className="link1ForCaseStudies">View client stories</a>
      <Link to="/Contact" className="link2ForCaseStudies">Start a conversation</Link>
     </div>

     <div className="Container2ForCaseStudies">

        <div className="Card1ofContainer2">
          <p className="paragraph1Card1">Client work</p>
          <h1 className="headingCard1">Solutions Designed For Lasting Value</h1>
          <p className="paragraph2Card1">Every engagement begins with the business need, followed by clear delivery and dependable ongoing support.</p>
        </div>
       

     return<div className="WraperCaseStudies">
      {data35.map((props)=>{

        return <Link to={props.LinkToThePage} className="LinktoPageInCaseStudies" >
           <div className="CardsForCaseStudies">
                <img src={props.img} alt="images"  className="imagesofCaseStudies" height="50px"/>
                <p className="TitleOfCaseStudies">{props.title}</p>
                <h1 className="headingCaseStudies">{props.heading}</h1>
                <p className="paragraphCaseStudies">{props.paragraph}</p>
                <Link to={props.Link1to} className="LinksCaseStudies1">{props.link1}</Link>
                <Link to={props.Linkto2}className="LinksCaseStudies2">{props.link2}</Link>
              { props.link3 && <Link to={props.Linkto3} className="LinksCaseStudies3">{props.link3}</Link>}
                </div>
        </Link>
      
      
          })}
          
         </div>
          </div>
     

      
                  <div className="Controll-Height-Consultation">
                  <Consultation/>
                  </div>
     
                  <div  className="Controll-Height-LastSection">
                  <LastSection/>
                  </div>
    </section>
}