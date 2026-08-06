
import center from "./chip1.png"
import "../index.css"
export default function Centered(){
    return <div className="wrapper">
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