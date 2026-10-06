import Header from "./Header"
import {Link} from "react-router-dom"
import {FaMapMarkerAlt, FaBriefcase} from "react-icons/fa"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
export default function CarrerCard3(){

 return <section>
<div>
    <Header/>
</div>
<div className="ContainerIntro-Ofrole">
<div className="Container-ForLinks-CarrerCard">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Carrer"className="Links">Carrer</Link>
      <p className="Line-about-CarrerCard">CRM / ERP Consultant</p>
      </div>  

   <div>
    <p className="TitleCardOfCareer">Digital Solutions</p>
    <h1 className="HeadingCardOfCareer">CRM / ERP Consultant</h1>
    <p className="paragraphCardOfCareer">Implement and customise Salesforce, Dynamics 365, and related platforms that help clients streamline operations and grow.</p>
       <div className="Wraper-OfCarrer-Card-Icons">
      <p className="Icons-CarrerCard"><FaMapMarkerAlt className="Icon-CarerCards"/>Parramatta, NSW (Hybrid)</p>
      <p  className="Icons-CarrerCard"><FaBriefcase className="Icon-CarerCards"/>Full-time</p>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL_vvkgcdPW3iEmewChmfHLOhDVCbh5-g-6VQegruZ-mAYAQ/viewform" className="Guide-Link-CarrerCard">Apply Now →</a>
    </div>
    </div> 

    <div className="AboutTheRole-CarrerCard">
        <h1 className="heading-About-The-Role">About The Role</h1>
        <p className="paragraph-About-The-Role">Join our CRM and ERP practice to translate business needs into practical platform solutions. You’ll gather requirements, configure systems, support integrations, and help clients get lasting value from Salesforce, Dynamics 365, Microsoft 365, HubSpot, and Monday.com.</p>
    </div>

     <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Responsibilities</h1>
        <li className="terms-OurConditions">Gather requirements and translate them into CRM/ERP configurations</li>
        <li className="terms-OurConditions">
Implement and customise Salesforce and/or Dynamics 365 solutions</li>
        <li className="terms-OurConditions">
Support integrations, data migration, testing, and user enablement</li>
        <li className="terms-OurConditions">
Identify automation opportunities that reduce manual work</li>
        <li className="terms-OurConditions">Provide post-go-live support and continuous improvement recommendations</li>
     </div>

      <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Requirements</h1>
        <li className="terms-OurConditions">2+ years experience implementing CRM or ERP platforms</li>
        <li className="terms-OurConditions">
Hands-on experience with Salesforce and/or Dynamics 365</li>
        <li className="terms-OurConditions">Strong discovery, stakeholder communication, and solution design skills</li>
        <li className="terms-OurConditions">
Ability to document processes and train end users</li>
        <li className="terms-OurConditions">A practical, outcomes-focused consulting mindset</li>
     </div>

      <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Nice to have</h1>
        <li className="terms-OurConditions">Experience with HubSpot, Monday.com, or Microsoft 365 automation</li>
        <li className="terms-OurConditions">
Platform certifications</li>
        <li className="terms-OurConditions">Background in professional services, education, or healthcare clients</li>
     </div>

     <div className="ApplyCard">
        <h1 className="heading-applyCard">Ready to apply?</h1>
        <p className="paragraph-applyCArd">Send your CV and a short note about why you're a fit for the IT Support Engineer role. Our team will get back to you shortly.</p>
        <div className="ApplyHere">
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL_vvkgcdPW3iEmewChmfHLOhDVCbh5-g-6VQegruZ-mAYAQ/viewform" className="Guide-Link-ApplyCard">Apply Now →</a>
          <Link to="/Carrer" className="Guide-Link-ApplyCard">View all roles </Link>
          </div>
     </div>

     <div className="Controll-Height-Consultation-Carrer">
                       <Consultation/>
                       </div>
          
                       <div  className="Controll-Height-LastSection-Carrer">
                       <LastSection/>
                       </div>
</section>
}