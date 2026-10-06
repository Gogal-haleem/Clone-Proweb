import {Link} from "react-router-dom"
import {FaLinkedin} from "react-icons/fa"
import Header from "./Header"
import data49 from "./data49"
import data50 from "./data50"
import data51 from "./data51"

import Consultation from "./Consultation"
import LastSection from "./LastSection"

export default function Team(){
return<section>
    <div>
        <Header/>
    </div>

    <div className="NewService-Container">
            
               <p className="NewService-paragraph">Our people</p>
               <h1 className="NewService-heading">Meet our team</h1>
               <p className="OurTeam-paragraph2">At Proweb Technologies, our success is fueled by a passionate, innovative team committed to exceeding client expectations and delivering practical technology outcomes.</p>
               <Link to="/Carrer"  className="OurTeam-link1" >View careers  →</Link>
               
               </div>

               <div className="container-ourTeam">
                <p className="roles-OurTeam">Leaders</p>
                <h1 bold-role-ourTeam>Leadership</h1>
               </div>

           <div className="OurTeam-Wraper-container">
              {data49.map((props)=>{
          
              
               return   <div className="LeaderInfo" key={props.id}>
                
                 <img className=".OurTeam-pics"src={props.image}  alt={props.title}  />
                 
                 <div className="Text-content">
                   <h3 className="Card-h3">{props.title}</h3>
                   <p className="PositionOurTeam">{props.position}</p>
                   <p className="card-p">{props.description}</p>
                   <a href={props. LinkedIn}>
                   <FaLinkedin className="LinkedIn-OurTeam"/>
                   </a>
                  </div>
                  
                  </div>
                  })
          }
          </div>
    

    
               <div className="container-ourTeam">
                <p className="roles-OurTeam">Strategy & delivery</p>
                <h1 bold-role-ourTeam>Innovative team</h1>
               </div>



           <div className="OurTeam-Wraper-container">
              {data50.map((props)=>{
          
              
               return   <div className="LeaderInfo" key={props.id}>
                
                 <img className=".OurTeam-pics"src={props.image}  alt={props.title}  />
                 
                 <div className="Text-content">
                   <h3 className="Card-h3">{props.title}</h3>
                   <p className="PositionOurTeam">{props.position}</p>
                   <p className="card-p">{props.description}</p>
                   <a href={props. LinkedIn}>
                   <FaLinkedin className="LinkedIn-OurTeam"/>
                   </a>
                  </div>
                  
                  </div>
                  })
          }
          </div>




               <div className="container-ourTeam">
                <p className="roles-OurTeam">Engineering</p>
                <h1 bold-role-ourTeam>Technical experts</h1>
               </div>

           <div className="OurTeam-Wraper-container">
              {data51.map((props)=>{
          
              
               return   <div className="LeaderInfo" key={props.id}>
                
                 <img className=".OurTeam-pics"src={props.image}  alt={props.title}  />
                 
                 <div className="Text-content">
                   <h3 className="Card-h3">{props.title}</h3>
                   <p className="PositionOurTeam">{props.position}</p>
                   <p className="card-p-OurTeam">{props.description}</p>
                   <a href={props. LinkedIn}>
                   <FaLinkedin className="LinkedIn-OurTeam"/>
                   </a>
                  </div>
                  
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