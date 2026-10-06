
import Header from "./Header";
import {Link} from  "react-router-dom"
import {FaBullseye, FaEye, FaHeart ,FaCloud, FaBuilding,FaShieldAlt ,FaUsers, FaAward, FaCode } from 'react-icons/fa'
import data45 from "./data45"
import data46 from "./data46"
import data47 from "./data47"

import Consultation from "./Consultation"
import LastSection from "./LastSection"


export default function About(){
return<section className="PageOfAboutUs">
  <div>
    <Header/>
  </div>

  <div className="HeroSectionOfAboutUs">
     <p className="AboutUsTitle"> ● Innovation driven technology</p>
     <h1 className="AboutUsHeading">Enabling Technology That Accelerates Business Success</h1>
     <p className="AboutUsExplained">Proweb Technologies helps businesses with managed IT services, websites and apps, CRM & ERP implementation, AI integrations, and marketing technology built for practical growth.</p>
      <Link to="/Contact" className="Links-Services">Talk to an expert →</Link>
      <Link to="/Services" className="Links-Services2">Explore services</Link>
  </div>

  <div className="CardOfHeroSection">
      <p className="TimeAtCard">Since 2014+</p>
      <h1 className="HeadingAtCard">Built for SMEs</h1>
      <p className="SupporterAtCard">Affordable, accountable technology partnerships that help Australian businesses modernise with confidence.</p>

     <div className="WrapIconOfCard">
      <p className="IconUsedFor"><FaBuilding className="IconOfCardAboutUs"/> Managed IT</p>
      <p className="IconUsedFor"><FaCloud className="IconOfCardAboutUs" />Cloud & CRM</p>
      <p className="IconUsedFor"> <FaShieldAlt className="IconOfCardAboutUs" />Cyber Security</p>
      <p className="IconUsedFor"> <FaUsers className="IconOfCardAboutUs"/>SME Focused</p>
      </div>

    </div>

    <div className="WhoAreWe">
        <p className="WhoWeeAre">Who we are</p>
        <h1 className="HowWeManage">Mission, vision and values</h1>
        <p className="WhatWeDo">We exist to help SMEs grow with technology that is practical, affordable, and built to last.</p>

      </div>  

      <div className="HandlingPointsAboutUs">
        <p className="numberingPointsAboutUs">01</p>
        <h1 className="PointsHeadingAboutUs"><FaBullseye className="IconsOfPoints"/>Mission</h1>
        <p className="PointsDefinedAboutUs">We are on a mission to enable, modernise, and transform SMEs digitally by providing them affordable and efficient management solutions.</p>
        </div>
       
       <div className="HandlingPointsAboutUs">
        <p className="numberingPointsAboutUs">02</p>
        <h1 className="PointsHeadingAboutUs"><FaEye className="IconsOfPoints"/>Vision</h1>
        <p className="PointsDefinedAboutUs">To be the leading technology partner for businesses seeking growth through innovative solutions.</p>
        </div>

        <div className="HandlingPointsAboutUs">
        <p className="numberingPointsAboutUs">03</p>
        <h1 className="PointsHeadingAboutUs"><FaHeart className="IconsOfPoints"/>Values</h1>
        <p className="PointsDefinedAboutUs">We value accountability, transparency, affordability and simplicity.</p>
        </div>

        <div className="WraperWhatWEOffer">
          <p className="WhatWEOffer">Accountability</p>
          <p className="WhatWEOffer">Transparency</p>  
          <p className="WhatWEOffer">Affordability</p>  
          <p className="WhatWEOffer">Simplicity</p>    
        </div>

        
   <div className="WhoAreWe">
        <p className="WhoWeeAre">Capabilities</p>
        <h1 className="HowWeManage">What we do</h1>
        <p className="WhatWeDoexplianed">From managed infrastructure and AI integrations to CRM and digital presence, we bring strategy, implementation, and ongoing support together under one accountable team.</p>
         <Link to="/Services" className="ServicesLinkOnAboutUs">View all services →</Link>
      </div>  

       <div className="Reusable-Cards-Data-wraperAboutUs">
           {
             data45.map((props)=>{
             const  Icon=props.img

               return <Link to={props.LinkCardto} className="CardAsLink-AboutUs">
                      <div className="Reusable-Cards-Data">
                      
                       <Icon size={30} className="Reusable-Cards-Data-icons-Of-AboutUs"/>
                     
                       <h1 className="Reusable-Cards-Data-h1">{props.h1}</h1>
                       <p className="Reusable-Cards-Data-explanation">{props.p}</p>
                       <Link className="Reusable-Cards-Data-Link">{props.link}</Link>

                      </div>
                      </Link>
             })
           }
         </div>
        

        <div className="WhyUs-AboutUs">
          <p className="WhyUsp1">Why ProWeb</p>
          <h1 className="WhyUsh1">Why Us</h1>
          <p className="WhyUsp2">One partner for infrastructure and software with the depth to deliver, and the clarity to keep projects moving.</p>

          <div className="spanDiv-AboutUs">
          <span className="WhyUsExperience"> <p className="YearsOfExperience">10+</p>
Years experience</span>
          <span className="WhyUsProjects"><p className="NumbersofProjects">100+</p>
Projects delivered</span>
       </div>
        </div>



   <div className="Card1-WhyUs">
    < FaAward size={50} className="WhyUs-Card-Icon"/>
    <h1 className="WhyUs-Card-heading">Our Expertise</h1>
    <p className="WhyUs-Card-Paragraph">With over ten years of experience, we have a strong command of managing, installing and maintaining IT infrastructure and software development using the latest web technologies, and implementing CRMs and ERPs.</p>
    </div>

    <div className="Card2-WhyUs">
    <FaCode size={50} className="WhyUs-Card-Icon"/>
    <h1 className="WhyUs-Card-heading">Technology Stacks</h1>
    <p className="WhyUs-Card-Paragraph">In addition to infrastructure and managed IT services, our team also includes software developers, architects and project managers to help you in building software, apps and tools in any technology stack.</p>

   </div>
  

    <div className="EmptyDiv">
      <h1 className="EmptyDivh1">proPharma by proweb</h1>
      <div className="nullDiv">

        <p className="emptyp1"></p>
        <p className="emptyp2"></p>
        <p className="emptyp3"></p>

      </div>
    </div>

   
  <div className="ProductSpotlight-AboutUs">
     <p className="AboutUsTitle">Product spotlight</p>
     <h1 className="AboutUsHeading">Enabling Technology That Accelerates Business Success</h1>
     <p className="AboutUsExplained">Proweb Technologies helps businesses with managed IT services, websites and apps, CRM & ERP implementation, AI integrations, and marketing technology built for practical growth.</p>
      <Link to="/Contact" className="Links-Services">Talk to an expert →</Link>
  </div>

     
      <div className="Reusable-Cards-Data-wraper">
           {
             data46.map((props)=>{
             const  Icon=props.img
               return <div className="Reusable-Cards-Data">
                      
                       <Icon size={30} className="Reusable-Cards-Data-icons-Of-Services"/>
                     
                       <h1 className="Reusable-Cards-Data-h1">{props.h1}</h1>
                       <p className="Reusable-Cards-Data-explanation">{props.p}</p>
                      

                      </div>
             })
           }
         </div>

           
            <div className="ProductSpotlight2-AboutUs">
     <p className="AboutUsTitle">Product spotlight</p>
     <h1 className="AboutUsHeading">Automated case management</h1>
     <p className="AboutUsExplained">Automate case management and improve service delivery with proAutomate, powered by AI-backed Dynamics 365 Customer Service, cloud file storage, and extended dashboards.</p>
      <Link to="/Contact" className="Links-Services">Talk to an expert →</Link>
  </div>


 <div className="EmptyDiv2">
      <h1 className="EmptyDivh1">proAutomate by proweb</h1>
      <div className="nullDiv">

        <p className="emptyp1"></p>
        <p className="emptyp2"></p>
        <p className="emptyp3"></p>

      </div>
    </div>



     <div className="Reusable-Cards-Data-wraper-AboutUs-Cards">
           {
             data47.map((props)=>{
             const  Icon=props.img
               return <div className="Reusable-Cards-Data">
                      
                       <Icon size={30} className="Reusable-Cards-Data-icons-Of-Services"/>
                     
                       <h1 className="Reusable-Cards-Data-h1">{props.h1}</h1>
                       <p className="Reusable-Cards-Data-explanation">{props.p}</p>
                      

                      </div>
             })
           }
         </div>

     <div className="Controll-Height-Consultation">
                  <Consultation/>
                  </div>
     
                  <div  className="Controll-Height-LastSection">
                  <LastSection/>
                  </div>
    


    </section>
}