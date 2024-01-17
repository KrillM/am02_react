import App from "./App.css";

export default function Pr03A(props){
    return(
    <div className="book">
        <h1>{props.title}</h1>
        <p className="image">
            <img src={props.image}/>
        </p>
        <h2>{props.short}</h2>
        <p>저자: {props.author}</p>
        <p>판매가: {props.price}</p>
        <p>구분: {props.type}</p>
    </div>
    )
}