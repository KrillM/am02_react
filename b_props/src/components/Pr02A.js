import App from './App.css';

export default function Pr02A(props){
    return(<>
        <p>제가 가장 좋아하는 요리는 <span className="foodName">{props.food}</span>입니다.</p>
    </>);
}