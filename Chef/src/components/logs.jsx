

export default function Logos(props){
return <div className={`div-logo ${props.className}`}>
    <img className="Logos" src={props.img} alt="logo" height="20px"/>
    <span>{props.text}</span>
</div>
}