import {Link} from "react-router-dom"
import Header from "./Header"
import ComertialKitchen from "./CK.png"
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
        <p className="TitleForLinks">Commercial Kitcheneer</p>
      </div>
      
      <div className="ContainerInfoWebDev">
         <p className="ContainerInfoWebDevParagraph1">Commercial Kitchens</p>
         <h1 className="ContainerInfoWebDevheading">A stronger digital presence for a commercial kitchen specialist</h1>
         <p className="ContainerInfoWebDevParagraph2">A clear, professionally managed website helps Commercial Kitcheneer present its specialist capabilities and connect with commercial clients.</p>
      </div>

      <div className="InfoClientWebDev">
        <div className="allignment">
        <p className="Client">Client</p>
        <h1 className="ClientWeWorkedWith">Commercial Kitcheneer</h1>

        <div className="ClientsLogo">
         <img src={ComertialKitchen} alt="ClientsLogo" className="LogosOfClients" height="80px"/>
        </div>
        <div className="AllignmentLinksName">
           
           
        <p className="Link1InInfo">Web Design & Development</p>
        <p className="Link2InInfo">Website Management</p>
        
        
        </div>

        </div>
      </div>
       
       <div className="ReusedBoxesOfInfo">
       
        <p className="ReusedBox" >Clearer specialist positioning for commercial clients</p>
        <p className="ReusedBox">Stronger digital credibility for complex kitchen projects</p>
        <p className="ReusedBox">Managed presence that supports ongoing business development</p>
       </div>

       <div className="ContainerTheChallenge">
        <p className="TheChallengeTitle">The challenge</p>
        <h1 className="TheChallengeheading">What Stood In The Way</h1>
        <p className="TheChallengeparagraph">Specialist commercial kitchen capability is hard to communicate in a generic website. Commercial Kitcheneer needed an online presence that showed expertise clearly and made it easier for commercial clients to understand services and start a conversation.</p>
       </div>
       
      <div className="OurApproach">
         <p className="OurApproachparagraph">Our approach</p>

         <h1 className="OurApproachheading">How we delivered</h1>

         <p className="OurApproacshlabel"><span className="LabelsNo">01</span>
Positioned specialist commercial kitchen capability for online audiences</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">02</span>Designed clear service pathways and professional visual presentation</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">03</span>Built a responsive website suited to commercial enquiry journeys</p>

         <p className="OurApproacshlabel"><span className="LabelsNo">04</span>
Provide ongoing management to keep the site dependable and current</p>
      </div>

      <div className="TheSolution">
       <p className="TheSolutionTitle">The solution</p>
       <h1 className="TheSolutionHeading">What We Put In Place</h1>
       <p  className="TheSolutionParagraph">We delivered a focused business website with clear service pathways, strong visual presentation, and ongoing management. Content and structure were built around specialist capability rather than generic trade messaging.</p>
      </div>

      <div className="TheOutcome">
       <p className="TheOutcomeTitle">The outcome</p>
       <h1 className="TheOutcomeHeading">Results that matter</h1>
       <p  className="TheOutcomeParagraph">The business now has a polished digital presence that supports credibility, enquiries, and continued growth in a competitive commercial market.</p>
      </div>
      
       


    <div className="ServicesDelivered">
      <h1 className="ServicesDeliveredHeading">Services Delivered</h1>
      <p className="ServicesDeliveredparagraph">Capabilities used on this engagement for Commercial Kitcheneer.</p>
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