import Header from "./Header"
import CarreImage  from "./CarreImage.png"
import {Link} from "react-router-dom"
import data48 from "./data48"
import Consultation from "./Consultation"
import LastSection from "./LastSection"
import {FaMapMarkerAlt, FaBriefcase, FaRegClock } from "react-icons/fa"
export default function Carrer () {

 return <section>
      <div>
        <Header/>
        </div>


     <div className="NewService-Container">
            <img className="NewService-Image" src={CarreImage} alt="Image" />
            <p className="NewService-paragraph">Join the team</p>
            <h1 className="NewService-heading">Careers</h1>
            <p className="NewService-paragraph2">Build meaningful technology careers with a team that helps Australian businesses modernise infrastructure, strengthen security, and unlock better digital tools.</p>
            <a href="#WrapCardsOfCarrer"  className="NewService-link1" >View open roles →</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL_vvkgcdPW3iEmewChmfHLOhDVCbh5-g-6VQegruZ-mAYAQ/viewform" className="NewService-link2" >Send your CV</a>
            </div>

            <div className="WrapCardsOfCarrer" id="WrapCardsOfCarrer">
                {
                    data48.map((props)=>{
                       const Icon1=props.img1 
                       const Icon2=props.img2
                       const Icon3=props.img3
                        return<Link to={props.LinkTo} className="CardsAsLink-Carrer">
                        <div className="ContainCardsOfCarrer">
                         <p className="TitleOfCards-Carrer">{props.title}</p>
                         <h1 className="HeadingOfCards-Carrer">{props.heading}</h1>
                         <p className="paragraphOfCards-Carrer">{props.paragraph}</p>
                         <div className="wrapLinksCarrer">
                         <a className="linksCarrer"> <Icon1 size={15} className="icons"/>{props.location}</a>
                         <a className="linksCarrer"> <Icon2 size={15} className="icons"/>{props.jobtitle}</a>
                         <a className="linksCarrer"> <Icon3 size={15} className="icons"/>{props.role}</a>

                         </div>
                            </div>
                            </Link>
                    })
                }
            </div>


     <div className="Carrer-Guide">
               <h1 className="Guide-Header-Carrer">Don't see the right role?</h1>
               <p className="Guide-Paragraph-Carrer">We're always interested in meeting talented people. Send us your CV and tell us how you'd like to contribute.</p>
               <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL_vvkgcdPW3iEmewChmfHLOhDVCbh5-g-6VQegruZ-mAYAQ/viewform" className="Guide-Link-Carrer">Send your CV</a>
              </div>



         <div className="Controll-Height-Consultation">
                      <Consultation/>
                      </div>
         
                      <div  className="Controll-Height-LastSection">
                      <LastSection/>
                      </div>
    </section>
}