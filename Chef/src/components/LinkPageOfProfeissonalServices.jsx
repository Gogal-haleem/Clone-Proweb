import {Link} from "react-router-dom"
import Header from "./Header"
import T from "./T.png"
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
        <p className="TitleForLinks">Success Accounting</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Professional Services</p>
         <h1 className="ContainerInfoWebDevheading">Website and email marketing for a growing accounting firm</h1>
         <p className="ContainerInfoWebDevParagraph2">Proweb Technologies delivered website design, ongoing website management, and email marketing support to help Success Accounting present its services clearly and stay connected with clients.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Success Accounting</h1>

        <div className="ClientsLogo">
         <img src={T} alt="ClientsLogo" className="LogosOfClients" height="100px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Web Design & Development
</p>
        <p className="Link2InInfo">Website Management</p>
         <p className="Link3InInfo">Email Marketing</p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Professional website matched to accounting advisory standards</p>
        <p className="ReusedBox">Ongoing management that protects brand consistency</p>
        <p className="ReusedBox">Email marketing support for sustained client communication</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Growing accounting firms need a digital presence that reflects advisory quality—and a practical way to stay in touch with clients. Success Accounting needed both a professional website and email marketing support that would not overload the practice team.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Designed a website that reflects advisory credibility and service clarity</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Launched and continue managing the site so content and technical care stay current</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>
Set up practical email marketing support aligned to firm communications</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Helped the team stay connected with clients without adding heavy internal workload</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We designed and built the firm’s website, continue to manage it, and support email campaigns that share updates and useful information. The approach keeps brand presentation consistent while making client communication easier to sustain.</p>
      </div>

   
      
       <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">Success Accounting has a maintained website and email marketing capability that strengthen communication, professionalism, and client engagement over time.</p>
      </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Success Accounting.</p>
      <p className="ServicesDelivered1">Web Design & Development</p>
        <p className="ServicesDelivered2">Website Management</p>
          <p className="ServicesDelivered3">Email Marketing</p>
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