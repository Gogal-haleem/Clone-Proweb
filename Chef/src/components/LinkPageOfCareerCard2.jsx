import Header from "./Header"
import {Link} from "react-router-dom"
import {FaMapMarkerAlt, FaBriefcase} from "react-icons/fa"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
export default function CarrerCard2(){

 return <section>
<div>
    <Header/>
</div>
<div className="ContainerIntro-Ofrole">
<div className="Container-ForLinks-CarrerCard">
      <Link to="\"className="Links">Home</Link>
      <Link to="/Carrer"className="Links">Carrer</Link>
      <p className="Line-about-CarrerCard">Cloud & Infrastructure Engineer</p>
      </div>  

   <div>
    <p className="TitleCardOfCareer">Infrastructure</p>
    <h1 className="HeadingCardOfCareer">Cloud & Infrastructure Engineer</h1>
    <p className="paragraphCardOfCareer">Design, implement, and support secure cloud and on-prem infrastructure for growing Australian businesses.</p>
       <div className="Wraper-OfCarrer-Card-Icons">
      <p className="Icons-CarrerCard"><FaMapMarkerAlt className="Icon-CarerCards"/>Parramatta, NSW (Hybrid)</p>
      <p  className="Icons-CarrerCard"><FaBriefcase className="Icon-CarerCards"/>Full-time</p>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL_vvkgcdPW3iEmewChmfHLOhDVCbh5-g-6VQegruZ-mAYAQ/viewform" className="Guide-Link-CarrerCard">Apply Now →</a>
    </div>
    </div> 

    <div className="AboutTheRole-CarrerCard">
        <h1 className="heading-About-The-Role">About The Role</h1>
        <p className="paragraph-About-The-Role">This role suits an engineer who enjoys solving infrastructure challenges and keeping environments resilient. You will work across cloud migrations, server management, networking, backup, and security hardening for Proweb clients.</p>
    </div>

     <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Responsibilities</h1>
        <li className="terms-OurConditions">Design and maintain Microsoft Azure and hybrid infrastructure solutions</li>
        <li className="terms-OurConditions">
Support server, network, backup, and disaster recovery environments</li>
        <li className="terms-OurConditions">Lead or assist cloud migrations and infrastructure modernisation projects</li>
        <li className="terms-OurConditions">
Improve monitoring, security posture, and operational reliability</li>
        <li className="terms-OurConditions">Collaborate with support and project teams to deliver stable outcomes</li>
     </div>

      <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Requirements</h1>
        <li className="terms-OurConditions">
3+ years experience in cloud, systems, or infrastructure engineering</li>
        <li className="terms-OurConditions">Hands-on experience with Microsoft Azure and Windows Server</li>
        <li className="terms-OurConditions">
Understanding of networking, identity, backup, and security fundamentals</li>
        <li className="terms-OurConditions">
Strong troubleshooting and documentation habits</li>
        <li className="terms-OurConditions">
Ability to work directly with clients in a professional consulting style</li>
     </div>

      <div className="OurConditions">
        <h1 className="Heading-of-OurConditions">Nice to have</h1>
        <li className="terms-OurConditions">Azure Administrator or equivalent certification
</li>
        <li className="terms-OurConditions">Experience with firewalls, virtualisation, or cyber security tooling</li>
        <li className="terms-OurConditions">Prior MSP or consulting experience</li>
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