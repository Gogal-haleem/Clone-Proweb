import {Link} from "react-router-dom"
import Header from "./Header"
import CNP from "./CNp.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfCNPsecurity(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">CNP Security</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Security Services</p>
         <h1 className="ContainerInfoWebDevheading">Modernising IT infrastructure for growth and compliance</h1>
         <p className="ContainerInfoWebDevParagraph2">Proweb Technologies transformed CNP Security’s IT infrastructure with cloud expertise and ongoing support, strengthening operations and supporting their path to ISO compliance.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">CNP Security</h1>

        <div className="ClientsLogo">
         <img src={CNP} alt="ClientsLogo" className="LogosOfClients" height="100px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Cloud Services</p>
        <p className="Link2InInfo">Managed Infrastructure</p>
         <p className="Link3InInfo">Cyber Security</p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Stronger operational reliability for day-to-day security services</p>
        <p className="ReusedBox">Clearer controls and documentation path toward ISO readiness</p>
        <p className="ReusedBox">Reduced reactive IT disruption through proactive managed support</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">CNP Security operates in an environment where uptime, access control, and audit readiness matter every day. Their existing technology setup made it harder to scale securely, respond quickly to incidents, and prepare for ISO-aligned controls without disrupting field and office teams. They needed a more reliable foundation that could support growth while reducing operational risk.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Assessed existing infrastructure, security gaps, and operational pain points with leadership and technical stakeholders</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Modernised core infrastructure with cloud-aligned architecture, stronger networking, and clearer system ownership</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>
Implemented monitoring, backup, and access controls suited to security-service operations</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Established ongoing managed support so systems stay current, secure, and ready for compliance evidence</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We redesigned their infrastructure around clearer cloud and network patterns, strengthened monitoring and security controls, and introduced managed support rhythms so issues were handled before they became outages. Configuration, access, and backup practices were aligned to the controls they would need for compliance work, without forcing the business into an overly complex stack.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">CNP Security now runs on a more stable, supportable platform with stronger day-to-day visibility. The team has a clearer path toward ISO compliance, fewer reactive firefights, and an environment that can absorb growth without reinventing core systems each time the business expands.</p>
      </div>
      
       <div className="ClientReview">
          <p className="ClientWords">“Proweb Technologies has been instrumental in transforming our IT infrastructure. Their expertise in cloud solutions and unwavering support have significantly improved our operations and set us on the path to ISO compliance.”</p>
          <p className="ClientInfo">Rizwan Mehmood, Owner, CNP Security</p>
       </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for QubitX Engineering Services</p>
      <p className="ServicesDelivered1">Cloud Services</p>
        <p className="ServicesDelivered2">Managed Infrastructure</p>
          <p className="ServicesDelivered3">Cyber Security</p>
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