
import SimpleImage from "./SimpleImage.png"
import data from "./data7"
export default function Care(){

    return<article>
        <div className="Head-Container-Care">

            <div className="Heading-Container-Care">

              <p className="Hero-Heading-Care-p1">Above all, we care</p>
              <h1 className="Hero-Heading-Care">Large Enough For Big Projects,
                <br></br>
                   <span className="Higlithed-Line-Care"> Small Enough </span>
                   <br></br>
                    To Provide 
    
                    Personalised Support</h1>

            <p className="Hero-Heading-Care-p2">We combine the delivery capability needed for complex technology projects with the direct communication and accountability of a close, long-term partner.</p>
        </div>

         <div className="Image-Link-Container-Care">
            <img className="CareImg" src={SimpleImage}
             alt="Image for this section " />
            <a className="CareLink" href=""> Learn More ⟶</a>
         </div>
       

         <div className="Wraper-Care">
            {
                data.map((props)=>{
                 const Icon=props.img
             return <div className="Reusebale-Care-Container">
                        <Icon className="Reusebale-Care-Container-Icon" size={26} alt="Icon-Care"
                        color="#1b233a" />

                        <p className="Reusebale-Care-Container-P">{props.text}</p>
                    </div>
                })
            
           }
         </div>
           </div>
    </article>

    
}