import {Link} from "react-router-dom"
import Header from "./Header"
import Nepean from "./Np.png"
import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function LinkPageOfNepean(){
    return<section className="SectionForWebDesign">
      <div>
      <Header/>
      </div>

      <div className="ContainerForLinksWebDev">
       <Link to="/" className="LinktoHome">Home</Link>
       <Link to="/CaseStudies" className="LinktoCaseStudies">Case studies</Link>
        <p className="TitleForLinks">Nepean Advanced Rehab</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Healthcare / Allied Health</p>
         <h1 className="ContainerInfoWebDevheading">A clearer digital presence for allied health care</h1>
         <p className="ContainerInfoWebDevParagraph2">Proweb Technologies designed, built, and continues to manage the website for Nepean Advanced Rehab so patients and referring partners can find services with clarity and confidence.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Nepean Advanced Rehab</h1>

        <div className="ClientsLogo">
         <img src={Nepean} alt="ClientsLogo" className="LogosOfClients" height="80px"/>
        </div>
        <div className="AllignmentLinksName">
         
         
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox">Clearer presentation of allied health services online</p>
        <p className="ReusedBox">Professional presence that supports patient and referrer confidence</p>
        <p className="ReusedBox">Actively managed website as offerings evolve</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Allied health practices need patients and referrers to understand services quickly. Nepean Advanced Rehab needed a professional website that explained offerings clearly, supported enquiries, and stayed maintainable as programs and content evolved.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>Clarified service information architecture for patients and referring partners</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed and developed a clean, responsive allied-health website</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Built clear enquiry pathways without cluttering clinical messaging</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>Provide ongoing website management for content and technical care</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We designed and developed a professional insurance website focused on clarity and enquiry pathways, then provided ongoing management so content and technical upkeep remain handled. Messaging was organised to reduce confusion without oversimplifying coverage conversations.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">The centre now presents its allied health services professionally online, with a managed digital presence that stays current as the practice grows.</p>
      </div>

    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Nepean Advanced Rehab.</p>
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