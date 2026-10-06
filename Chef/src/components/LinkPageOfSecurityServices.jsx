import {Link} from "react-router-dom"
import Header from "./Header"
import SecurityService from "./Ir.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfProfessionalServices(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">SmartGuard</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Security Services</p>
         <h1 className="ContainerInfoWebDevheading">A trustworthy digital presence for security services</h1>
         <p className="ContainerInfoWebDevParagraph2">SmartGuard’s digital presence was shaped to communicate trust, capability, and clear service pathways for prospective customers.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">SmartGuard</h1>

        <div className="ClientsLogo">
         <img src={SecurityService} alt="ClientsLogo" className="LogosOfClients" height="100px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
         
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Stronger trust signals for security-conscious customers</p>
        <p className="ReusedBox">Easier discovery of key security services</p>
        <p className="ReusedBox">Professional digital foundation for brand growth</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">In security services, trust is the product before the contract. SmartGuard needed a professional online experience that reflected that seriousness and made key services easy to find and enquire about.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Framed messaging around trust, capability, and clear service offerings</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed a professional responsive experience for security buyers</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>
Made service discovery and enquiry pathways obvious</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>
Supported ongoing website care for brand consistency</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We created a clear, responsive website experience focused on credibility, service discovery, and direct customer pathways—keeping the tone professional and the next step obvious.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">SmartGuard now has a polished digital foundation that supports its brand and helps customers engage with greater confidence.</p>
      </div>
      
     


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for SmartGuard.</p>
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