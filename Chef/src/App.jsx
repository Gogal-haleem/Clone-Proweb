import {Routes,Route} from "react-router-dom"


import "./index.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HeroContent from "./components/HeroContent"
import Centered from "./components/centered"
import Logos from "./components/logs"
import data from "./components/data"
import data1 from "./components/data1"
import Static from "./components/reusable1"
import Motion from "./components/motion"
import data2 from "./components/data2"
import Partners from "./components/partners"
import Item from "./components/item"


import TechnologyPartners from "./components/YourDigitalTechnologyPartner"
import Care from "./components/CareAbout"
import OurCoustomer from "./components/OurCoustomer"
import Consultation from "./components/Consultation"
import LastSection  from "./components/LastSection"
import Contact from "./components/Contact"
import Services from "./components/Services"
import ManagedIT  from "./components/Managed IT Services"
import ManagrdInfrastructure from "./components/Managed-Infrastructure"
import CloudServices from "./components/Cloud-Services"
import CyberSecurity from "./components/Cyber-Security"
import NetworkServices from "./components/Network-Services"
import AiStrategy from "./components/Ai Strategy & Readlines"
import IntelligentAssistants from "./components/Intelligent Assistants"
import AiIntegration from "./components/Ai Integration"
import WorkflowAutomation from "./components/Workflow-Automation"
import DataAndSystemIntegration from "./components/DataAndSystemIntegration"
import WebDesignAndDevolpment from "./components/WebDesignAndDevolpment"
import WebsiteManagement from "./components/WebsiteManagment"
import EmailMarketing from "./components/EmailMarketing"
import SEOContent from "./components/SEO&Content"
import SocialMediaManagment from "./components/SocialMediaManagment"
import DigitalPresenceAndMarketing from "./components/DigitalPresenceAndMarketing"

import ITSupport from "./components/ITSupport "
import ApplicationManagement from "./components/Application Management"
import DataCenter from "./components/Data Center"
import ServerManagement from "./components/Server Management"
import CloudService from "./components/Cloud Service"
import BackupDisasterRecovery from "./components/Backup & Disaster Recovery"
import Salesforce from "./components/Salesforce"
import CRMandERP from "./components/CRM and ERP"
import Dynamic365 from "./components/Dynamic365"
import Microsoft365 from "./components/Microsoft365"



import CaseStudies from "./components/CaseStudies"
import LinkPageOfProKitchen from "./components/LinkPageOfProKitchen"
import LinkPageOfQubitX from "./components/LinkPageOfQubitX"
import LinkPageOfCNPsecurity from "./components/LinkPageOfCNPsecurity"
import LinkPageOfIIB from "./components/LinkPageOfIIB"
import LinkPageOfNepean from "./components/LinkPageOfNepean"
import LinkPageOfWestrenEducation from "./components/LinkPageOfWestrenEducation"
import LinkPageOfProfeissonalServices from "./components/LinkPageOfProfeissonalServices"
import LinkPageOfRisallah from "./components/LinkPageOfRisallah"
import LinkPageOfGrowingAdvisory from "./components/LinkPageOfGrowingAdvisory"
import LinkPageOfCare from "./components/LinkPageOfCare"
import LinkPageOfAccountingAndAdvisory from "./components/LinkPageOfAccountingAndAdvisory"
import LinkPageOfAllimbaCare from "./components/LinkPageOfAllimbaCare"
import LinkPageOfCarrerRise from "./components/LinkPageOfCarrerRise"
import LinkPageOfComertialKitchen from "./components/LinkPageOfComertialKitchen"
import LinkPageOfIdealCover from "./components/LinkPageOfIdealCover"
import LinkPageOfSecurityServices from "./components/LinkPageOfSecurityServices"
import LinkPageOfReadArticle from "./components/LinkPageOfReadArticle"


import Insights from "./components/Insights"
import LinkPageOfDigitalPresenceInsight from "./components/LinkPageOfDigitalPresenceInsight"
import LinkPageOfDigitalMarketingInsight from "./components/LinkPageOfDigitalMarketingInsight"
import LinkPageOfManageITinsight from "./components/LinkPageOfManageITinsight"
import LinkPageOfCloudCardinsight from "./components/LinkPageOfCloudCardinsight"
import LinkPageOfCRMinsight from "./components/LinkPageOfCRMinsight"
import LinkPageOfCyberSecurityinsight from "./components/LinkPageOfCyberSecurityinsight"
import LinkPageOfCRMandERP from "./components/LinkPageOfCRMandERP"


import AboutUs from "./components/AboutUs"

import Carrer from "./components/Carrer"
import LinkPageOfCarrerCard1 from "./components/LinkPageOfCarrerCard1"
import LinkPageOfCareerCard2 from "./components/LinkPageOfCareerCard2"
import LinkPageOfCarrerCard3 from "./components/LinkPageOfCarrerCard3"
import DropDown from "./components/DropDown"
import  OurTeam from "./components/OurTeam"


import Education from "./components/Education.png"
import EduIcon from "./components/EduIcon.png"

import Government from "./components/Government.png"
import GovernmentIcon from "./components/GovernmentIcon.png"


import GrowthSmes from "./components/GrowthSMEs.png"
import GrowthIcon from "./components/GrowthIcon.png"



import Health from "./components/Health.png"
import HealthIcon from "./components/HealthIcon.png"

import Network from "./components/NetworkSecurity.png"
import NetworkIcon from "./components/NetworkIcon.png"

import Professional from "./components/Professional.png"
import ProfessionalIcon from "./components/ProfessionalIcon.png"


import New from "./components/new"

import Client from "./components/Client"

import data3 from "./components/data3"
import ClientLogos from "./components/Client-Logos"

import data4 from "./components/data4"
import ClientLogos2 from "./components/Client-logos2"

import Explore from "./components/expolre"

import Help from "./components/How-we-can-help"



export default function App(){

  return <Routes>
  <Route
  path="/"
  element={
  <div className="All">
  <Header/>
   <Hero/>
   <HeroContent/>
   <Centered/>

   {data.map((entry,index)=>{
    return <Logos
      key={index}
        {...entry}
        className={`logo-${index}`}
        />
   })
  
}

<div className="Wrappers">
{data1.map((entry1,index1)=>{
return < Static
       key={index1}
        {...entry1}
        className={`Static-${index1}`}
        />
})}
</div>
< Motion/>

<div className="div-partners">
{
  data2.map((entry,index)=>{
  return<Partners
  key={index}
     {...entry}
     />
  })
}
</div>

<New/>

<div className="Manage-item">
<Item
  img={Education}
  img1={EduIcon}
  h1="Education"
  p="We collaborate with schools and education providers to strengthen IT systems, improve reliability, and support everyday teaching and administration."
  a="See related work"
  />

  <Item
  img={Government}
  img1={ GovernmentIcon}
  h1="Government & PublicSector"
  p="We partner with public-sector organisations to deliver reliable infrastructure, support, and digital systems that meet operational and compliance needs."
  a="See related work"
  />

  <Item
  img={GrowthSmes}
  img1={GrowthIcon}
  h1="Growing SMEs"
  p="Whether it’s a large-scale project or everyday managed IT, we deliver tailored solutions that help small and mid-sized businesses grow with confidence."
  a="See related work"
  />

   <Item
  img={Health}
  img1={HealthIcon}
  h1="Healthcare & Care"
  p="We support pharmacies, care providers, and health-related organisations with secure, practical technology that reduces manual work and improves operations."
  a="See related work"
  />

 <Item
  img={Network}
  img1={NetworkIcon}
  h1="Security Services"
  p="We help security-focused businesses modernise infrastructure, strengthen cloud environments, and prepare for higher compliance standards."
  a="See related work"
  />

   <Item
  img={Professional}
  img1={ProfessionalIcon}
  h1="Professional Services"
  p="From advisory firms to growing service businesses, we implement CRM, automation, and infrastructure solutions that keep client delivery organised and scalable."
  a="See related work"
  />
</div>

<Client/>

<div className="Client-websites2">
{
  data4.map((entry1,index)=>{

 return <ClientLogos

   key={index}
   {...entry1}
   />
  })

}
</div>


<div className="Client-websites">
{
  data3.map((entry,index)=>{
 return <ClientLogos2
   key={index}
   {...entry}
   />
  })

}
</div>

 <Explore />

  <Help/>

  <TechnologyPartners/>

  <Care/>

  <OurCoustomer/>
  <Consultation/>

<LastSection/>
 </div>
  }
 />

 <Route
 path="/Contact"
 element={
  <Contact/>
 }
 />

 <Route
  path="/Services"
  element={
    <Services/>
  }
  />


  <Route

  path="/Managed IT Services"

  element={
    <ManagedIT/>
  }
  />

  <Route
   path="Managed-Infrastructure"
   element={
    <ManagrdInfrastructure/>
   }
  />
<Route
  path="Cloud-Services"

  element={
    <CloudServices/>
  }
  
  />
  
  <Route
   path="Cyber-Security"

   element={

    <CyberSecurity/>
    
   }
  />
   

   <Route
   path="Network-Services"

   element={
    <NetworkServices/>
   }
   />

   <Route
   
   path="Ai Strategy & Readlines"

   element={
    <AiStrategy/>
   }
   
   />

   <Route
   path="Intelligent Assistants"
   element={
    <IntelligentAssistants/>
   }
   />
   
   <Route
   
   path="Ai Integration"

   element={
    <AiIntegration/>
   }
   
   />

   <Route
   path="Workflow-Automation"

   element={
    <WorkflowAutomation/>
   }
   />

 <Route
 path="DataAndSystemIntegration"
 
 element={
  <DataAndSystemIntegration/>
 }

 />

 <Route
 path="WebDesignAndDevolpment"

 element={
  <WebDesignAndDevolpment/>
 }
 />

<Route
path="WebsiteManagment"
element={
<WebsiteManagement/>
}
/>


<Route
path="EmailMarketing"

element={
<EmailMarketing/>
}

/>

<Route
path="SEO&Content"

element={
 <SEOContent/> 
}
/>

<Route
path="SocialMediaManagment"
element={
  <SocialMediaManagment/>
}
/>

<Route
path="DigitalPresenceAndMarketing"

element={
  <DigitalPresenceAndMarketing/>
}
/>

<Route
path="ITSupport"
element={
<ITSupport/>
}
/>

<Route
path="Application Management"

element={
  <ApplicationManagement/>
}
/>

<Route
path="Data Center"
element={
  <DataCenter/>
  
  
}
/>

<Route
path="Server Management"
element={
  <ServerManagement/>
}
/>

<Route
path="Cloud Service"

element={
  <CloudService/>
}
/>

<Route
path="Backup & Disaster Recovery"

element={
  <BackupDisasterRecovery/>
}

/>

<Route
path="Salesforce"
element={
  <Salesforce/>
}
/>


<Route
path="CRM and ERP"

element={
  <CRMandERP/>
}
/>

<Route
path="Dynamic365"

element={
  <Dynamic365/>
}
/>

<Route
path="Microsoft365"

element={
  <Microsoft365/>
}
/>

<Route
path="CaseStudies"
element={
  <CaseStudies/>
}
/>

<Route
path="LinkPageOfProKitchen"

element={
  <LinkPageOfProKitchen/>
}

/>


<Route
path="LinkPageOfQubitX"
element={
  <LinkPageOfQubitX/>
}
/>

<Route
path="LinkPageOfCNPsecurity"
element={
  <LinkPageOfCNPsecurity/>
}

/>
<Route
path="LinkPageOfIIB"
element={
  <LinkPageOfIIB/>
}
/>

<Route
path="LinkPageOfNepean"

element={
  <LinkPageOfNepean/>
}
/>

<Route
path="LinkPageOfWestrenEducation"
element={
  <LinkPageOfWestrenEducation/>
}
/>

<Route
path="LinkPageOfProfeissonalServices"
element={
  <LinkPageOfProfeissonalServices/>
}
/>

<Route
path="LinkPageOfRisallah"

element={
  <LinkPageOfRisallah/>
}
/>

<Route
path="LinkPageOfGrowingAdvisory"
element={
  <LinkPageOfGrowingAdvisory/>
}
/>

<Route
path="LinkPageOfCare"

element={
  <LinkPageOfCare/>
}
/>

<Route
path="LinkPageOfAccountingAndAdvisory"
element={
  <LinkPageOfAccountingAndAdvisory/>
}
/>

<Route
path="LinkPageOfAllimbaCare"
element={
  <LinkPageOfAllimbaCare/>
}
/>

<Route
path="LinkPageOfCarrerRise"
element={
  <LinkPageOfCarrerRise/>
}
/>

<Route
path="LinkPageOfComertialKitchen"

element={
  <LinkPageOfComertialKitchen/>
}
/>

<Route
path="LinkPageOfIdealCover"
element={
  <LinkPageOfIdealCover/>
}
/>

<Route
path="LinkPageOfSecurityServices"
element={
  <LinkPageOfSecurityServices/>
}
/>

<Route
path="Insights"

element={
 <Insights/>
}
/>

<Route
path="LinkPageOfReadArticle"
element={
  <LinkPageOfReadArticle/>
}
/>

<Route
path="LinkPageOfDigitalPresenceInsight"
element={
  <LinkPageOfDigitalPresenceInsight/>
}
/>

<Route
path="LinkPageOfDigitalMarketingInsight"
element={
  <LinkPageOfDigitalMarketingInsight/>
}
/>

<Route
path="LinkPageOfManageITinsight"
element={
  <LinkPageOfManageITinsight/>
}
/>

<Route
path="LinkPageOfCloudCardinsight"
element={
  <LinkPageOfCloudCardinsight/>
}
/>

<Route
path="LinkPageOfCRMinsight"
element={
  <LinkPageOfCRMinsight/>
}
/>

<Route
path="LinkPageOfCyberSecurityinsight"
element={
  <LinkPageOfCyberSecurityinsight/>
}
/>

<Route
path="LinkPageOfCRMandERP"
element={
<LinkPageOfCRMandERP/>
}
/>


<Route
path="AboutUs"
element={
  <AboutUs/>
}
/>

<Route
path="Carrer"
element={
  <Carrer/>
}
/>

<Route
path="LinkPageOfCarrerCard1"
element={
  <LinkPageOfCarrerCard1/>
}
/>

<Route
path="LinkPageOfCareerCard2"

element={
  <LinkPageOfCareerCard2/>
}
/>

<Route
path="LinkPageOfCarrerCard3"
element={
  <LinkPageOfCarrerCard3/>
}
/>

<Route
path="DropDown"
element={
  <DropDown/>
}
/>

<Route
path="OurTeam"
element={
 <OurTeam/>
}
/>

 </Routes>
}


