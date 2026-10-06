import {FaServer, FaMagic, FaGlobe} from "react-icons/fa"
import {Link} from "react-router-dom"
import Header from "./Header"
export default function dropDown(){

  return<section className="Section-DropDown">
     
   

    <div className="Drop-down-Cotainer">
        <div className="DropDown1">
      <p className="Heading-DropDown"><FaServer className="Drop-downIcons"/>Managed Infrastructure</p>  
      <p className="intro-DropDown">Secure, reliable systems for everyday operations.</p>
      <p>Managed IT Services</p>
      <p>Cloud Services</p>
      <p>Cyber Security</p>
      <p>Network Services</p>
      <p>Server Management</p>
      <p>Backup & Disaster Recovery</p>

      </div>

        <div className="DropDown2">
      <p className="Heading-DropDown"><FaMagic className="Drop-downIcons"/>AI Integrations</p>  
      <p className="intro-DropDown">Permission-aware AI, Copilot, and secure system integrations.</p>
      <p>AI Strategy & Readiness</p>
      <p>Intelligent Assistants</p>
      <p>Workflow Automation</p>
      <p>Data & System Integrations</p>
      </div>


        <div className="DropDown3">
      <p className="Heading-DropDown"><FaGlobe className="Drop-downIcons"/>Digital Presence & Marketing</p>  
      <p className="intro-DropDown">Websites, management, SEO, email, and campaigns.</p>
      <p>Web Design & Development</p>
      <p>Website Management</p>
      <p>SEO & Content</p>
      <p>Email Marketing</p>
      <p>Social Media Management</p>
      </div>

    </div>

    <div className="Solution-dropDown">
    <p className="LookingForSolution-P">Looking for the right solution for your business?</p>
    <Link className="DropDown-Links" to="/Services">View all services</Link>
    <Link className="DropDown-Links" to="/Contact">Talk to expert</Link>
    </div>
  </section>
}