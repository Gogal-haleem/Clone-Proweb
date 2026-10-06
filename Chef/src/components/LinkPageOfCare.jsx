import {Link} from "react-router-dom"
import Header from "./Header"
import Care from "./Care.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfCare(){

 
    return <  section   className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">Care Pharma</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Healthcare / Pharmacy</p>
         <h1 className="ContainerInfoWebDevheading">Innovative systems for modern pharmacy operations</h1>
         <p className="ContainerInfoWebDevParagraph2">Innovative technology solutions helped Care Pharma transform pharmacy operations with a stronger focus on service excellence.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Care Pharma</h1>

        <div className="ClientsLogo">
         <img src={Care} alt="ClientsLogo" className="LogosOfClients" height="80px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Technology Solutions
</p>
        <p className="Link2InInfo">Managed IT Services</p>
         <p className="Link3InInfo">Support</p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >More reliable systems behind pharmacy operations</p>
        <p className="ReusedBox">Technology aligned to customer service priorities</p>
        <p className="ReusedBox">Ongoing support that protects day-to-day continuity</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Pharmacy operations combine customer service, compliance, and fast-moving workflows. Care Pharma needed systems and support that kept the pharmacy efficient and reliable without sacrificing the customer experience patients expect.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Understood pharmacy workflows, peak-period pressure points, and service goals</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Implemented technology improvements that support efficient counter and back-of-house operations</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Hardened reliability and support so issues do not interrupt patient-facing service</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Maintained ongoing partnership focused on excellence and continuous improvement</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We introduced practical technology improvements around pharmacy operations and backed them with responsive support. The work focused on reliability, service continuity, and tools that fit how the pharmacy team serves customers every day.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">Care Pharma operates with a stronger technology backbone and a partner known for commitment to excellence—supporting smoother operations and better customer service.</p>
      </div>
      
       <div className="ClientReview">
          <p className="ClientWords">“Proweb Technologies transformed our pharmacy operations with their innovative solutions. Their commitment to excellence and customer service is unmatched.”</p>
          <p className="ClientInfo">Care Pharma Representative</p>
       </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Care Pharma.</p>
      <p className="ServicesDelivered1">Technology Solutions</p>
        <p className="ServicesDelivered2">Managed IT Services</p>
          <p className="ServicesDelivered3">Support</p>
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
