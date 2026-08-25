import Array from "./data5"
export default function Help(){

    return<section>
        <div className="help-section">
            <p className="help-p1">Your roadmap to a successful digital project</p>
            <h1 className="help-h1">How We Can Help</h1>
            <p className="help-p2">How can we help you achieve your transformational goals?</p>
            <a  className="help-a" href="">See all our services →</a>
        </div>

        <div className="Help-card-container">
    {Array.map((props)=>{

    
     return   <div className="Section-help-areas" key={props.id}>
        <img className="Card-image"src={props.image}  alt={props.title}  />
        <div className="Text-content">
        <h3 className="Card-h3">{props.title}</h3>
        <p className="card-p">{props.description}</p>
        </div>
        <a  href="">
            <img className="card-link" src={props.img1} alt="arrow image" height="40px"/>
            </a>
        </div>
        })
}
</div>
    </section>
}