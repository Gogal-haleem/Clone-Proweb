import {Link} from "react-router-dom"
import Header from "./Header"
import Westren from "./Westren.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfWestrenEducation(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">Western Grammar</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Education</p>
         <h1 className="ContainerInfoWebDevheading">Elevating school capability through technology partnership</h1>
         <p className="ContainerInfoWebDevParagraph2">A close technology partnership helped Western Grammar lift its operational and digital capability across the school.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Western Grammar</h1>

        <div className="ClientsLogo">
         <img src={ Westren} alt="ClientsLogo" className="LogosOfClients" height="100px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Managed IT Services</p>
        <p className="Link2InInfo">Technology Solutions</p>
         <p className="Link3InInfo">Support</p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox">Elevated school technology capability through partnership</p>
        <p className="ReusedBox">More consistent support for staff and operations</p>
        <p className="ReusedBox">Practical upgrades aligned to education outcomesThe challenge</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Western Grammar needed more than occasional IT fixes. The school wanted a partner who understood education operations and could raise overall technology capability—systems, support, and day-to-day reliability—in a coordinated way.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>
Established a partnership model with clear priorities for school operations</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Improved systems reliability and digital tooling used by staff and students</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Strengthened ongoing support so issues are handled quickly and consistently</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Guided staged capability improvements rather than disruptive big-bang change</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We worked as an ongoing technology partner: improving core systems, clarifying support, and guiding practical upgrades that matched how the school actually runs. The relationship focused on capability over time, not a single project handoff.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">The school’s technology foundation and support model improved, giving staff and students a more capable environment for learning and administration.</p>
      </div>
      
       <div className="ClientReview">
          <p className="ClientWords">“Working with Proweb Technologies has been a remarkable experience. Their expertise has truly elevated our school's capabilities”</p>
          <p className="ClientInfo">Humayoon Akhter</p>
       </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Western Grammar.</p>
      <p className="ServicesDelivered1">Managed IT Services</p>
        <p className="ServicesDelivered2">Technology Solutions</p>
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