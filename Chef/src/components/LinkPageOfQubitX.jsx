import {Link} from "react-router-dom"
import Header from "./Header"
import Qubitx from "./QX.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfQubitX(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">QubitX Engineering Services</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Engineering</p>
         <h1 className="ContainerInfoWebDevheading">A professional digital platform for engineering services</h1>
         <p className="ContainerInfoWebDevParagraph2">A modern website helps QubitX Engineering Services communicate technical capability in a clear, accessible, and credible way.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">QubitX Engineering Services</h1>

        <div className="ClientsLogo">
         <img src={Qubitx} alt="ClientsLogo" className="LogosOfClients" height="100px"/>
        </div>
        <div className="AllignmentLinksName">
         
         
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Digital Presence</p>
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Clearer communication of complex engineering services</p>
        <p className="ReusedBox">Stronger credibility with clients and project partners</p>
        <p className="ReusedBox">Digital foundation that supports business development</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Engineering capability is complex, and websites often become either too shallow or too technical. QubitX needed a digital presence that translated expertise into clear information for clients and project partners without losing credibility.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Translated engineering capability into clear website information architecture</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>
Balanced technical depth with accessible navigation and messaging</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Designed a professional, responsive platform for client and partner audiences</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>
Prepared the site for ongoing content and capability updates</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We developed a structured, responsive website that balances technical detail with straightforward navigation. Content hierarchy and presentation were designed so technical audiences and commercial stakeholders can both find what they need.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">QubitX has a stronger platform for presenting expertise, supporting business development, and building confidence with prospective clients.</p>
      </div>

    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for QubitX Engineering Services</p>
      <p className="ServicesDelivered1">Web Design & Development</p>
        <p className="ServicesDelivered2">Digital Presence</p>
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