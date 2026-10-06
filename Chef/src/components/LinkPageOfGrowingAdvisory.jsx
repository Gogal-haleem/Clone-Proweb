import {Link} from "react-router-dom"
import Header from "./Header"
import GrowingAdvisory from "./GrowingAdvisory.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfGrowingAdvisory(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">Gowing Advisory</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Professional Services</p>
         <h1 className="ContainerInfoWebDevheading">Salesforce automation for smoother client management</h1>
         <p className="ContainerInfoWebDevParagraph2">A customised Salesforce solution helped Gowing Advisory replace fragmented workflows with automated operations and clearer client tracking.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Gowing Advisory</h1>

        <div className="ClientsLogo">
         <img src={GrowingAdvisory } alt="ClientsLogo" className="LogosOfClients" height="60px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">CRM & ERP</p>
        <p className="Link2InInfo">Salesforce</p>
         <p className="Link3InInfo">Process Automation</p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Unified client stages in one CRM workspace</p>
        <p className="ReusedBox">Fewer fragmented handovers between advisors and support staff</p>
        <p className="ReusedBox">Faster visibility into engagement progress and next actions</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Advisory work depends on knowing where every client sits in the engagement lifecycle. Gowing Advisory was managing progress across fragmented tools and manual follow-ups, which slowed delivery, created inconsistent handovers, and made it harder for the team to see what needed attention next.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>
Mapped advisory stages, handovers, and reporting needs with the practice team</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Configured Salesforce objects, pipelines, and automation around real client journeys</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Automated key operational updates that previously relied on manual follow-up</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>
Trained the team on day-to-day use so adoption stuck beyond go-live

</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We implemented and tailored Salesforce around their real advisory stages—capturing client status, automating repetitive updates, and giving the team one place to track work. Processes that previously lived in spreadsheets or inboxes were moved into structured workflows with clearer ownership and visibility.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">Client management became more consistent and scalable. The team spends less time chasing status updates and more time delivering advice, with a shared view of engagements from first conversation through ongoing work.</p>
      </div>
      
       <div className="ClientReview">
          <p className="ClientWords">“We struggled with fragmented workflows and tracking client progress across different stages. Proweb Technologies delivered a customized Salesforce solution that automated our operations and significantly improved client management. Their deep understanding of our needs was impressive.”</p>
          <p className="ClientInfo">Gowing Advisory Representative</p>
       </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Gowing Advisory.</p>
      <p className="ServicesDelivered1">CRM & ERP</p>
        <p className="ServicesDelivered2">Salesforce</p>
          <p className="ServicesDelivered3">Process Automation</p>
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