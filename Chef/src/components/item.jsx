
export default function Item(props){

        
     return   <div className="Static-Images">
          <img className="Item-Image" src={props.img} alt="item-image" 
         />
          <img className="Item-logo" src={props.img1} alt="item-logo"
         />
         <h1 className="Item-h"> {props.h1} </h1>
          <p className="Item-paragraph">{props.p}</p>
          <a className="Item-link" href={props.a}>See related work</a>
        </div>

    
}