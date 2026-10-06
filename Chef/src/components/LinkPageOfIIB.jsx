import {Link} from "react-router-dom"
import Header from "./Header"
import IIB from "./IIB.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfIIB(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">Ideal Insurance Brokers</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Insurance</p>
         <h1 className="ContainerInfoWebDevheading">A managed website built for insurance trust and clarity</h1>
         <p className="ContainerInfoWebDevParagraph2">Proweb Technologies built and manages the Ideal Insurance Brokers website so prospective clients can understand coverage options and contact the team with confidence.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Ideal Insurance Brokers</h1>

        <div className="ClientsLogo">
         <img src={IIB} alt="ClientsLogo" className="LogosOfClients" height="80px"/>
        </div>
        <div className="AllignmentLinksName">
         
         
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Clearer insurance service communication online</p>
        <p className="ReusedBox">Stronger first impression of trust and professionalism</p>
        <p className="ReusedBox">Managed site that stays current as offerings change</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Insurance decisions start with trust. Ideal Insurance Brokers needed a polished website that explained services clearly, felt credible, and stayed accurate as products and business details changed.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Structured service pages for clarity around insurance offerings and contact paths</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed a trust-led visual and content experience for prospective clients</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Developed a responsive site optimised for enquiry conversion</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Continue website management so information stays accurate and current</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We designed and developed a professional insurance website focused on clarity and enquiry pathways, then provided ongoing management so content and technical upkeep remain handled. Messaging was organised to reduce confusion without oversimplifying coverage conversations.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">The brokerage presents itself professionally online and keeps its digital presence actively managed—supporting confidence from first visit through enquiry.</p>
      </div>

    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Ideal Insurance Brokers.</p>
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