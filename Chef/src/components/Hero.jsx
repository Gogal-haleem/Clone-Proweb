import "../index.css"
import dot from "./dot.png"

export default function Hero(){
  return  <section className="Hero">
     <img className="Dot-image" src={dot} alt="dot-icon" height="35px"/>
     <p className="paragraph1">TRUSTED IT PARTNER</p>
    </section>
}