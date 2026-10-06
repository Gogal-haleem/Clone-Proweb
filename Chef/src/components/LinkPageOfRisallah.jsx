import {Link} from "react-router-dom"
import Header from "./Header"
import RISSALAH from "./RISSALAH.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfRisallah(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">Rissalah College</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Education</p>
         <h1 className="ContainerInfoWebDevheading">Strengthening school IT systems for everyday learning</h1>
         <p className="ContainerInfoWebDevParagraph2">Proweb Technologies modernised Rissalah College’s IT systems so staff and students could rely on more stable, effective technology day to day.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Rissalah College</h1>

        <div className="ClientsLogo">
         <img src={ RISSALAH } alt="ClientsLogo" className="LogosOfClients" height="100px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Managed IT Services</p>
        <p className="Link2InInfo">IT Support</p>
         <p className="Link3InInfo">Infrastructure</p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >More dependable systems for teaching and administration</p>
        <p className="ReusedBox">Fewer disruptive technology interruptions during school hours</p>
        <p className="ReusedBox">Practical support model suited to an education environment</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Schools depend on technology that simply works—classrooms, administration, and communication cannot stop for unstable systems. Rissalah College needed stronger IT foundations and support so teaching and operations were not disrupted by unreliable infrastructure or slow responses.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Reviewed classroom, admin, and network pain points with school leadership</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>
Stabilised and improved core IT systems used across teaching and operations</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Strengthened support pathways so staff can get help quickly during the school day</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Aligned improvements with education priorities rather than one-size-fits-all IT</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We modernised critical school systems, improved reliability where it mattered most, and put practical support in place for staff. Changes were sequenced around the school calendar so improvements landed without creating classroom disruption.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">The college gained more dependable day-to-day technology. Staff can focus on teaching and administration with greater confidence that core systems will hold up under normal school demand.</p>
      </div>
      
       <div className="ClientReview">
          <p className="ClientWords">“Proweb Technologies has been instrumental in transforming our IT systems. Their expertise has made a significant difference in our school's operations.”</p>
          <p className="ClientInfo">Representative, Rissalah College</p>
       </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Rissalah College.</p>
      <p className="ServicesDelivered1">Managed IT Services</p>
        <p className="ServicesDelivered2">IT Support</p>
          <p className="ServicesDelivered3">Infrastructure</p>
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