import {Link} from "react-router-dom"
import Header from "./Header"
import IdealCover from "./IdealCover.png"
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
        <p className="TitleForLinks">Ideal Cover</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Insurance</p>
         <h1 className="ContainerInfoWebDevheading">A clear digital experience for modern insurance enquiries</h1>
         <p className="ContainerInfoWebDevParagraph2">Ideal Cover gained a professional digital presence that explains insurance options clearly and gives customers a straightforward path to make an enquiry.

</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Ideal Cover</h1>

        <div className="ClientsLogo">
         <img src={IdealCover} alt="ClientsLogo" className="LogosOfClients" height="30px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
        
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Clearer path from insurance research to enquiry</p>
        <p className="ReusedBox">Stronger trust and professionalism online</p>
        <p className="ReusedBox">Actively maintained digital platform</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Insurance products can feel complex online. Ideal Cover needed an experience that communicated trust, reduced confusion, and helped visitors move confidently from research to enquiry.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>
Simplified insurance messaging into clear, trustworthy website pathways</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed prominent enquiry points without overwhelming product detail</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>
Built a responsive site optimised for research-to-contact journeys</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Continue website management as products and business details change</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We designed and developed a responsive website with clear service pathways, concise content, and prominent enquiry points, then supported ongoing website management so information and technical care stay current.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">Ideal Cover has a dependable digital platform that presents services professionally, supports customer confidence, and remains actively maintained as the business evolves.</p>
      </div>
      
       


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Ideal Cover.</p>
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