import {Link} from "react-router-dom"
import Header from "./Header"
import CarrerRise from "./CR.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfCarrerRise(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">CareerRise</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Career Services</p>
         <h1 className="ContainerInfoWebDevheading">A clearer online journey for career support services</h1>
         <p className="ContainerInfoWebDevParagraph2">CareerRise gained a focused digital presence that makes its support services easier to understand and access.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">CareerRise</h1>

        <div className="ClientsLogo">
         <img src={CarrerRise} alt="ClientsLogo" className="LogosOfClients" height="60px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
        
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Faster understanding of career support offerings</p>
        <p className="ReusedBox">Less friction for diverse visitor audiences

</p>
        <p className="ReusedBox">Consistent professional presence for the organisation</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Career support audiences vary widely, and overloaded websites create friction. CareerRise needed to explain services clearly for different visitors without overwhelming them or burying contact pathways.

</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Mapped journeys for different career-support audiences</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>
Simplified service information into scannable website sections</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>
Designed accessible pathways to make contact</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Delivered a managed presence that stays consistent over time

</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We organised the website around clear user journeys, concise service information, and accessible contact paths—so visitors can self-select quickly and take the next step with confidence.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">Visitors understand available support faster, and the organisation benefits from a consistent, professionally managed digital presence.</p>
      </div>
      
       


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for CareerRise.</p>
      <p className="ServicesDelivered1">Web Design & Development</p>
        <p className="ServicesDelivered2">Website Management</p>
        
        <Link to="/Contact" className="ServicesDeliveredLink1">Start a similar project</Link>
        <Link to="/CaseStudies"className="ServicesDeliveredLink2">Browse all case studies</Link>

    </div>
      
        <div className="Controll-Height-Consultation">
                   <Consultation/>
                   </div>
      
                   <div  className="Controll-Height-LastSection">
                   <LastSection/>
                   </div>

    </section>
}