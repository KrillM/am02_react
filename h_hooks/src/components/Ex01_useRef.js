import { useEffect, useRef } from 'react';

export default function Ex01_useRef() {
    const inputRef = useRef();

    useEffect(() => {
        // 컴포넌트가 Mount된 후에 input 요소에 접근
        // inputRef는 단순히 참조 객체이기 때문에 DOM 요소에 접근하기 위해 inputRef.current 사용
        inputRef.current.focus();
    }, []);

    return (<>
          {/* useRef Hook을 사용한 안전한 DOM 접근 방식 */}
        <input ref={inputRef} type='text' />
    </>);
}