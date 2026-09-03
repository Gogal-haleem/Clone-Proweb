import data8 from "./data8"
import React from "react"
import {Swiper,SwiperSlide } from "swiper/react"
import{Navigation, Pagination ,Autoplay} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function OurCoustomers(){
return<section className="Section-OurCoustomer">
    <div className="Hero-Container">
        <p className="Hero-Container-p1">Successful partnerships</p>
        <h1 className="Hero-Container-h1">The Testimonials</h1>
        <p className="Hero-Container-p2">We deliver the best to make our customers happy.</p>
    </div>
<Swiper
modules={[Navigation, Pagination ,Autoplay]}
    spaceBetween={50}
    slidesPerview={1}
    navigation
    pagination={{clickable:true}}
    autoplay={{delay:5000}}>
        {data8.map((item)=>{
    return <SwiperSlide key={item.id}>
        <div className="Testimonal-card">
           
           <img src={item.logo} alt="company logo" className="companylogo" height="100px"/>
          
           <p className="Proweb-role">{item.text}</p>
           <h3 className="author-of-company">{item.author}</h3>
           <p className="companyName">{item.company}</p>
        </div>
    </SwiperSlide>
        })}
    </Swiper>
</section>
}