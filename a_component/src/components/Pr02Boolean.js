export default function Pr02Boolean(){
    const a = 10;
    const b = 20;

    return(<>
        {/* { 3+5==8 ? (<p>정답입니다</p>):(<p>오답입니다</p>)} */}
        { a < b && (<p>A는 B보다 큽니다.</p>)}
    </>)
}