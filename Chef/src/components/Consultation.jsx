import {Link} from "react-router-dom"
export default function Consultation(){
return <section>
    <div className="Get-In-Touch">
        <p className="Consultation-p1">Ready when you are</p>
        <h1 className="Consultation-h1">Let's Get Started</h1>
        <p className="Consultation-p2">Book a free 30-minute consultation and one of our team members will get in touch with you shortly.</p>
        <Link  to="/Contact" className="Consultation-link" >Book consultation ⟶</Link>
    </div>
</section>
}