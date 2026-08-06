import  "../index.css"
import logo from "./logo.png"
export default function Header(){

    return <div className="header-div">
      <header className="Head">
       
         <img className="Head-logo" src={logo} alt="proweb-logo"
          height="92px"/>

          <a className="GetITouch" href="">Get in touch</a>

         <div className="Links-header">
              <a className="links" href="">Services</a>
              <a className="links" href="">Case Studies</a>
              <a className="links" href="">Insight</a>
              <a className="links" href="">AboutUs</a>
              <a className="links" href="">Carrers</a>
         </div>
        

        </header>
    </div>
}