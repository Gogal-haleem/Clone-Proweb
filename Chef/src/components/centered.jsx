
import center from "./chip1.png"

import "../index.css"

import cloud from "./cloud.png"
import microphone from "./microphone.png"
import Network from "./Network.png"
import serverRack from "./server rack.png"
import shield from "./shield.png"
import database from "./database.png"
 import {motion} from "framer-motion"

export default function Centered(){
    return <div className="wrapper">

      <motion.div
       style={{position:"absolute",top:"50%",left:"50%",}}
         animate={{rotate:[0, 360]}}
         transition={{repeat:Infinity,duration:20,ease:"linear"}}
       >

        <img className="C" src={cloud} alt="cloud-image"
        height="60px"
        style={{position:"absolute",transform:"translate(160px,-30px)"}}/>
       </motion.div>
     
     <motion.div
     style={{position:"absolute",top:"50%",left:"50%"}}
     animate={{rotate:[60, 420]}}
     transition={{repeat:Infinity,duration:20,ease:"linear"}}

     >
        <img className="M" src={ microphone } alt=" microphone -image" height="60px"
        style={{position:"absolute",transform:"translate(150px,-30px)"}}
             />

     </motion.div>


     <motion.div
    style={{position:"absolute",top:"50%",left:"50%"}}
      animate={{rotate:[120, 480]}}
      transition={{repeat:Infinity,duration:20,ease:"linear"}} 
       >
  
     <img className="N" src={Network} alt="Network-image" height="60px"
        style={{position:"absolute",transform:"translate(140px,-30px)"}}    
            />
     </motion.div>


      <motion.div
    style={{position:"absolute",top:"50%",left:"50%"}}
      animate={{rotate:[180, 540]}}
      transition={{repeat:Infinity,duration:20,ease:"linear"}} 
       >
  
     <img  className="Sh" src={shield} alt="shield-image" height="60px"
        style={{position:"absolute",transform:"translate(110px,-30px)"}}    
            />
     </motion.div>


      <motion.div
    style={{position:"absolute",top:"50%",left:"50%"}}
      animate={{rotate:[240, 600]}}
      transition={{repeat:Infinity,duration:20,ease:"linear"}} 
       >
  
     <img  className="D" src={ database } alt=" database -image" height="60px"
        style={{position:"absolute",transform:"translate(110px,-30px)"}}    
            />
     </motion.div>

      <motion.div
    style={{position:"absolute",top:"50%",left:"50%"}}
      animate={{rotate:[300, 660]}}
      transition={{repeat:Infinity,duration:20,ease:"linear"}} 
       >
  
     <img className="S" src={serverRack} alt="serverRack-image" height="60px"
        style={{position:"absolute",transform:"translate(100px,-30px)"}}    
            />
     </motion.div>
     
      

    <div className="orbitRing  outerRing" >
      <div className="orbitRing  innerRing">
        </div>
        </div>
    <div className="centerDetials">
    <img className="center" src={center} alt="centerImage" height="60px"/>
    <div className="paragrah-center">
    <p className="CP1">Pro Web</p>
     <p className="CP2">IT HUB</p>
     </div>
    </div>
       
     </div>
}