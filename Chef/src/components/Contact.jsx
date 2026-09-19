import React from "react"
import LastSection from "./LastSection"
import Header from "./Header"
import {FaFacebook, FaLinkedin} from "react-icons/fa"
import ImageForContact from "./ContactPageImage.png"
import data9 from "./data9"



export default function Contact(){

const[State,setState]=React.useState({firstname:"", lastname:"",email:"",phone:""})

const[Show , NewShow]=React.useState(false)

function ShowForm(event){
  event.preventDefault()
 NewShow(!Show)
}

function handleSubmit(event) { 
    event.preventDefault(); 

    const formdata = new FormData(event.target);
    const InputFirstname = formdata.get("firstname")
    const InputLastname = formdata.get("Lastname")
    const InputEmail = formdata.get("Email")
    const InputPhone = formdata.get("Phone")

    const onlyAlphabets = /^[A-Za-z\s'-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    // 1. Create a local temporary object to collect all error states simultaneously
    let newErrors = { firstname: "", lastname: "", email: "", phone: "" };
    let totalErrorsFound = false;

    if(InputFirstname == null || !onlyAlphabets.test(InputFirstname)){
      newErrors.firstname = "Enter a valid name";
      totalErrorsFound = true;
    }
     
    if(InputLastname == null || !onlyAlphabets.test(InputLastname)){
      newErrors.lastname = "Enter a valid name";
      totalErrorsFound = true;
    }
      
    if(InputEmail == null || !emailPattern.test(InputEmail)){
      newErrors.email = "Enter a valid email";
      totalErrorsFound = true;
    }

    if(InputPhone == null || !phonePattern.test(InputPhone)){
      newErrors.phone = "Enter a valid 10-digit phone number";
      totalErrorsFound = true;
    }


    setState(newErrors);

    if (totalErrorsFound) {
      return; 
    }
   
   
}
    return<section className="Contact-page-section">
       <Header/>
       
      <div className="New-Work-Contact">
       <img src={ImageForContact} alt="ContactPageImage" className="ImageContact-Page" />
       <p className="Paragraph1-Contact-Page">Contact</p>
       <h1 className="Heading-Contact-Page">Let's Talk About Your Next Project</h1>
       <p className="Paragraph2-Contact-Page">Book a free consultation or send us a message. Our team will help you with managed IT, cloud, cyber security, CRM, AI integrations, and digital solutions.</p>
       <a onClick={ShowForm} className="Contact-Link1" href="#">Send a message</a>
       <br></br>
       <br></br>
        <a className="Contact-Link2" href="tel:0298972245">Call us</a>
      </div>


      <div className="AllNew">
     <div className="Ways-To-Get-In-Touch">
       <p className="Container-GetInTouch-p1">Get in touch</p>
       <h1 className="Container-GetInTouch-h1">We're Ready When You Are</h1>
       <p className="Container-GetInTouch-p2">Reach us by email, phone, or the form. We typically respond within one business day.</p>
     </div>

     {
        data9.map((data)=>{
          const  Icon =data.img
        return<div className="reusable-contact">
            <Icon className="Icon-reusable" size={26} color="#14285c" />
            <p className="Paragraph-contact" >{data.Input}</p>
            <p className="aragraph-contact2" >{data.text}</p>
        </div>

        })
     }
      <div className="Contact-FollowTrough">
        <p>Followus</p>
         <a href="https://www.facebook.com/people/Proweb/100075814934889/#" target="_blank" rel="noreferrer">< FaFacebook size={30} color="#14285c" className="Link1-Followus"/></a>
     <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEi6ATgUz2ZMgAAAaBiQflwcPqgtOB6KB0UXLCukwtKa-kvcYkiGHbkR09EAVkRUHlQ9opNGj7PC-ybmCtbROdP_jOMiPOt3paK8PlRaEJ9e1OtH_zi6A8iKHKojeAaKNsLPGw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fprowebau%2Fposts%2F%3FfeedView%3Dall" target="_blank" rel="noreferrer"> <FaLinkedin size={30} color="#14285c" className="Link2-Followus"/> </a>
      </div>
      </div>

      {Show ?( <form onSubmit={handleSubmit} className="Form" id="Form-Send-message" >

        <h1 className="h1-form">Send Us A Message</h1>
        <p className="p-form">Share a few details and we'll get back to you shortly.</p>
       <label htmlFor="firstname">First name</label>
       <input id="firstname" name="firstname" type="text" placeholder="Gogal"/>
       {State.firstname && <p style={{color: "red"}}>{State.firstname}</p>}

         <label htmlFor="Lastname">Last name</label>
       <input id="Lastname" name="Lastname" type="text" placeholder="Haleem"/>
      {State.lastname && <p style={{color: "red"}}>{State.lastname}</p>}

         <label htmlFor="Email">Email</label>
       <input id="Email" name="Email" type="Email" placeholder="Haleem@company.com"/>
       {State.email && <p style={{color: "red"}}>{State.email}</p>}


        <label htmlFor="Phone">Phone</label>
       <input id="Phone" name="Phone" type="number" placeholder="(02) 000000 000"/>
       {State.phone && <p style={{color:"red"}}>{State.phone}</p> }


             <label htmlFor="textarea">Text area</label>
      <textarea id="textarea" name="textarea" placeholder="Tell us about your project how we can help..."></textarea>

      <p className="p2-form">By submitting thisbout your enquiry form you agree to be contacted a. Please email your CV to <a href="mailto:support@prowb.com.au" className="Link-form">support@prowb.com.au</a> if you are applying for a role.</p>
     
     <button  className="ButtonSubmit" type="submit">Send message</button>
       
      </form>
      ) : null} 
     
     <div className="LastSection02 ">
      <LastSection/>
     </div>
       
     
    </section>
}