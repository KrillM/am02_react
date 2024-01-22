import useWindowSize from "../hook/WindowSize"

export default function Pr04(){
    const errorMsg = '창 크기 정보가 없습니다.'
    const {width, height} = useWindowSize();

    return(<>
        <p>너비: {width ? width : errorMsg }</p>
        <p>높이: {height ? height : errorMsg }</p>
    </>)
}