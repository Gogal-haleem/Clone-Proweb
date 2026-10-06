import {Link} from "react-router-dom"
import Header from "./Header"
import ProKitchen from "./PK.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfProKitchen(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">Pro Kitchen</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Commercial Kitchens</p>
         <h1 className="ContainerInfoWebDevheading">Showcasing commercial kitchen capability online</h1>
         <p className="ContainerInfoWebDevParagraph2">Pro Kitchen gained a modern, managed website that presents its commercial kitchen services with clarity and visual impact.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Pro Kitchen</h1>
         <img src={ProKitchen} alt="ClientsLogo" className="ClientsLogo" height="100px"/>
        
        <div className="AllignmentLinksName">

        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" > Clearer showcase of commercial kitchen capability</p>
        <p className="ReusedBox">  Stronger visual impact for project-led buyers</p>
        <p className="ReusedBox">  Managed digital presence beyond launch day</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Commercial kitchen buyers need to see capability quickly. Pro Kitchen needed a stronger way to showcase expertise, explain services, and convert online interest into qualified conversations.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Defined service storytelling suited to commercial kitchen buyers</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed a visually strong, responsive website experience</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>
Structured content for fast scanning and enquiry conversion</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>
           Provide ongoing management after launch</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We created a responsive website with clear information structure and professional visual presentation, supported by ongoing website management so the digital presence stays sharp after launch.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">Customers get a clearer view of Pro Kitchen’s expertise and a simpler path to start a project conversation.</p>
      </div>

    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Pro Kitchen.</p>
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