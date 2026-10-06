import Header from "./Header"
import {Link} from "react-router-dom"
import {FaMapMarkerAlt, FaBriefcase} from "react-icons/fa"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
export default function CarrerCard1(){

 return <section>
<div>
    <Header/>
</div>
<div className="ContainerIntro-Ofrole">
<div className="Container-ForLinks-CarrerCard">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Carrer"className="Links">Carrer</Link>
      <p className="Line-about-CarrerCard">IT Support Engineer</p>
      </div>  

   <div>
    <p className="TitleCardOfCareer">Managed Services</p>
    <h1 className="HeadingCardOfCareer">IT Support Engineer</h1>
    <p className="paragraphCardOfCareer">Help our clients stay productive with responsive, high-quality IT support across managed infrastructure, cloud, and workplace technology.</p>
       <div className="Wraper-OfCarrer-Card-Icons">
      <p className="Icons-CarrerCard"><FaMapMarkerAlt className="Icon-CarerCards"/>Parramatta, NSW (Hybrid)</p>
      <p  className="Icons-CarrerCard"><FaBriefcase className="Icon-CarerCards"/>Full-time</p>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL_vvkgcdPW3iEmewChmfHLOhDVCbh5-g-6VQegruZ-mAYAQ/viewform" className="Guide-Link-CarrerCard">Apply Now →</a>
    </div>
    </div> 

    <div className="AboutTheRole-CarrerCard">
        <h1 className="heading-About-The-Role">About The Role</h1>
        <p className="paragraph-About-The-Role">As an IT Support Engineer at Proweb Technologies, you will be a trusted first line of support for client environments. You’ll diagnose issues, resolve tickets efficiently, and work closely with senior engineers on infrastructure, security, and continuous improvement.</p>
    </div>

     <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Responsibilities</h1>
        <li className="terms-OurConditions">
Provide timely Level 1–2 support across Windows, Microsoft 365, networking, and endpoint environments</li>
        <li className="terms-OurConditions">Monitor systems, respond to incidents, and document resolutions clearly</li>
        <li className="terms-OurConditions">
Assist with onboarding, hardware setup, user administration, and service requests</li>
        <li className="terms-OurConditions">
Escalate complex issues with strong notes and recommended next steps</li>
        <li className="terms-OurConditions">
Contribute to process improvements that make support faster and more reliable</li>
     </div>

      <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Requirements</h1>
        <li className="terms-OurConditions">1–3+ years experience in IT support or helpdesk roles</li>
        <li className="terms-OurConditions">
Strong knowledge of Microsoft 365, Active Directory, and Windows environments</li>
        <li className="terms-OurConditions">
Clear communication skills with both technical and non-technical users</li>
        <li className="terms-OurConditions">Ability to prioritise tickets and work calmly under pressure</li>
        <li className="terms-OurConditions">
Willingness to learn managed services tooling and client environments</li>
     </div>

      <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Nice to have</h1>
        <li className="terms-OurConditions">
Experience in an MSP environment</li>
        <li className="terms-OurConditions">
Familiarity with Azure, networking fundamentals, or RMM tools</li>
        <li className="terms-OurConditions">Relevant certifications such as Microsoft Fundamentals or CompTIA A+</li>
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