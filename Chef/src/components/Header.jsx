import  "../index.css"
import React from "react"
import {Link} from "react-router-dom"
import logo from "./logo.png"
import DropDown from "./DropDown"
export default function Header(){

    const[isDropDown,SetDropdown]=React.useState(false)
 
    function OpenDropDown(){
        SetDropdown(true)
    }

     function CloseDropDown(){
        SetDropdown(false)
    }


    return <div className="header-div">
      <header className="Head">
       
         <img className="Head-logo" src={logo} alt="proweb-logo"
          height="62px" />

          < Link to="/Contact" className="GetITouch" href="">Get in touch</Link>

         <div className="Links-header">
               
               <div onMouseEnter={OpenDropDown} onMouseLeave={CloseDropDown}>
              <Link to="/Services" className="links" >Services</Link>
              {isDropDown && <DropDown/>}

         
              </div>
                
                
              <Link to="/CaseStudies" className="links" href="">Case Studies</Link>
              <Link to="/Insights" className="links" href="">Insight</Link>
              <Link to="/AboutUs"   className="links" >AboutUs</Link>
              <Link  to="/Carrer" className="links" href="">Carrers</Link>
           

         </div>
        

        </header>
    </div>
}