import useToggle from '../components/Ex04_customHook';

export default function Fag(){
    const [isFaqOpen, setIsFaqOpen] = useToggle();
    return(<>
    <h3>custom hook(useState)</h3>
    <div onClick={setIsFaqOpen} style={{cursor: 'pointer'}}>Q. 리액트에서 custom hook을 만들 수 있나요?</div>
    {isFaqOpen && <div>당근이죠!</div>}
    </>)
}