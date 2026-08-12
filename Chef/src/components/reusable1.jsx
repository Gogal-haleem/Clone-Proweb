

export default function Static(props){
   return <div className={`div-static ${props.className}`}>
       
        <p className="p1">{props.p1}</p>
        <p className="p2">{props.p2}</p>
    </div>
}