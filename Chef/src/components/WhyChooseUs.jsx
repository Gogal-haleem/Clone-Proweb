 import { Link } from "react-router-dom"
export default function WhyChooseUs (){
return <section className="Why-Choose-Us">
  <div className="Why-Choose-Us-Container1">
    <p className="Why-Choose-Us-Container1-p1">Why ProWeb</p>
    <h1 className="Why-Choose-Us-Container1-h1">Why Choose Us ?</h1>
    <ul className="Why-Choose-Us-Container1-ol">

        <li>Expert team with deep industry experience</li>
        <li>24/7 monitoring and responsive support</li>
        <li>Scalable solutions that grow with your business</li>
        <li>Clear advice focused on practical outcomes</li>
    </ul>
  </div>



  <div className="Why-Choose-Us-Container2">
   <h1 className="Why-Choose-Us-Container2-h1">Ready to get started?</h1>
   <p className="Why-Choose-Us-Container2-p">Tell us about your goals and we'll help you choose the right approach for managed it services.</p>
   <Link to="" className="Why-Choose-Us-Container2-Link">Contact us today ⟶</Link>
  </div>
</section>
}