import  "../index.css"
import {Link} from "react-router-dom"
import logo from "./logo.png"
export default function Header(){

    return <div className="header-div">
      <header className="Head">
       
         <img className="Head-logo" src={logo} alt="proweb-logo"
          height="92px"/>

          < Link to="/Contact" className="GetITouch" href="">Get in touch</Link>

         <div className="Links-header">
              <Link className="links" >Services</Link>
              <a className="links" href="">Case Studies</a>
              <a className="links" href="">Insight</a>
              <a className="links" href="">AboutUs</a>
              <a className="links" href="">Carrers</a>
         </div>
        

        </header>
    </div>
}