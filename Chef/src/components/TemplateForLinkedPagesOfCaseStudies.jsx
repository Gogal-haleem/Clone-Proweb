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
        <p className="TitleForLinks"></p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1"></p>
         <h1 className="ContainerInfoWebDevheading"></h1>
         <p className="ContainerInfoWebDevParagraph2"></p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith"></h1>

        <div className="ClientsLogo">
         <img src={T} alt="ClientsLogo" className="LogosOfClients" height="100px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo"></p>
        <p className="Link2InInfo"></p>
         <p className="Link3InInfo"></p>
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" ></p>
        <p className="ReusedBox"></p>
        <p className="ReusedBox"></p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph"></p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span></p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span></p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span></p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span></p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph"></p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph"></p>
      </div>
      
       <div className="ClientReview">
          <p className="ClientWords"></p>
          <p className="ClientInfo"></p>
       </div>


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph"></p>
      <p className="ServicesDelivered1"></p>
        <p className="ServicesDelivered2"></p>
          <p className="ServicesDelivered3"></p>
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