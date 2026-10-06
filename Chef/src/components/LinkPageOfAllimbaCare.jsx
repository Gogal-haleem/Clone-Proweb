import {Link} from "react-router-dom"
import Header from "./Header"
import AC from "./AC.png"
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
        <p className="TitleForLinks">Allambi Care</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Allambi Care</p>
         <h1 className="ContainerInfoWebDevheading">Automating manual workloads across care operations</h1>
         <p className="ContainerInfoWebDevParagraph2">Process automation reduced overwhelming manual work for Allambi Care, cutting hours of repetitive effort and reducing operational errors.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Allambi Care</h1>

        <div className="ClientsLogo">
         <img src={AC} alt="ClientsLogo" className="LogosOfClients" height="80px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Technology Solutions</p>
        <p className="Link2InInfo">Process Automation</p>
         <p className="Link3InInfo">IT Support</p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Hours reclaimed from repetitive administrative work</p>
        <p className="ReusedBox">Lower risk of process errors in day-to-day operations</p>
        <p className="ReusedBox">More sustainable operating rhythm for growing care teams</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Care organisations carry heavy administrative load alongside frontline delivery. At Allambi Care, repetitive manual processes were consuming staff time, increasing the chance of errors, and making it harder to keep operations consistent as demand grew.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>
Audited manual processes across teams to find the highest cost and highest-risk work</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed automation around real care-operation workflows rather than generic templates</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Implemented reliable process improvements with clear ownership and fallback paths</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Provided ongoing technical support so automation stayed useful as needs evolved</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We identified the highest-friction workflows, designed practical automations around how the teams already worked, and put reliable technical support behind the change. The focus was not technology for its own sake—it was reclaiming hours and reducing avoidable mistakes in everyday operations.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">Staff regained time previously lost to repetitive tasks, operational errors dropped, and the organisation gained a more sustainable way to run core processes without burning out the team.</p>
      </div>
      
       <div className="ClientReview">
          <p className="ClientWords">“The manual workload in our organization was overwhelming until Proweb Technologies stepped in. They automated our key processes, saving us countless hours and reducing errors. Their technical expertise and support made all the difference.”</p>
          <p className="ClientInfo">Allambi Care</p>
       </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Allambi Care.</p>
      <p className="ServicesDelivered1">Technology Solutions</p>
        <p className="ServicesDelivered2">Process Automation</p>
          <p className="ServicesDelivered3">IT Support</p>
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