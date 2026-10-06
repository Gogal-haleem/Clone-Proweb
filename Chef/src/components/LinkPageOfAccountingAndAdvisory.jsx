import {Link} from "react-router-dom"
import Header from "./Header"
import AZ from "./AZ.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfAccountingAndAdvisory(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">AZ Accounts Partners</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Accounting & Advisory</p>
         <h1 className="ContainerInfoWebDevheading">A clear and credible website for an accounting practice</h1>
         <p className="ContainerInfoWebDevParagraph2">A professional website gives AZ Accounts Partners a clearer way to explain its accounting services and build trust with prospective clients.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">AZ Accounts Partners</h1>

        <div className="ClientsLogo">
         <img src={AZ } alt="ClientsLogo" className="LogosOfClients" height="50px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
        
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox">Easier understanding of accounting services for new visitors</p>
        <p className="ReusedBox">Stronger online credibility for the practice</p>
        <p className="ReusedBox">Simpler path from research to enquiry</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Prospective accounting clients look for clarity and credibility first. AZ Accounts Partners needed a modern website that made services easy to understand while reflecting the professionalism expected from an accounting partner.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Organised accounting services into clear, scannable website sections</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed a professional visual system that signals trust and competence</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Built responsive enquiry pathways for prospective clients</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Set the site up for ongoing management and content updates</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We structured and delivered a clean, responsive website around service clarity, trust signals, and straightforward enquiry pathways—avoiding clutter that often confuses visitors on professional-services sites.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">The practice has a dependable online presence that communicates value clearly and supports new client conversations with less friction.</p>
      </div>
      
    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for AZ Accounts Partners.</p>
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