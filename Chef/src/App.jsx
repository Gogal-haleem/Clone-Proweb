import "./index.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HeroContent from "./components/HeroContent"
import Centered from "./components/centered"
import Logos from "./components/logs"
import data from "./components/data"
import data1 from "./components/data1"
import Static from "./components/reusable1"
import Motion from "./components/motion"
import data2 from "./components/data2"
import Partners from "./components/partners"
export default function App(){

  return <div className="All">
  <Header/>
   <Hero/>
   <HeroContent/>
   <Centered/>

   {data.map((entry,index)=>{
    return <Logos

        {...entry}
        className={`logo-${index}`}
        />
   })
  
}

<div className="Wrappers">
{data1.map((entry1,index1)=>{
return < Static
       key={index1}
        {...entry1}
        className={`Static-${index1}`}
        />
})}
</div>
< Motion/>

<div className="div-partners">
{
  data2.map((entry,index)=>{
  return<Partners
  key={index}
     {...entry}
     />
  })
}
</div>
</div>
}


