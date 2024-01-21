export default function SyntheticEventAttr() {
    const checkType = (e) => {
      console.log('e.type:', e.type);
    };
  
    const checkTarget = (e) => {
      console.log('e.target:', e.target);
    };
  
    const checkCurrentTarget = (e) => {
      console.log('e.currentTarget:', e.currentTarget);
    };
  
    const handleLinkClick = (e) => {
      e.preventDefault();
      console.log('a 태그의 기본 동작 방지 여부 :', e.defaultPrevented);
    };
  
    const handleInnerClick = (e) => {
      e.stopPropagation();
      console.log('자식 button 요소 클릭됨');
    };
  
    const handleOuterClick = () => {
      console.log('부모 div 요소 클릭됨');
    };
  
    return (
      <>
        <h3>e.type</h3>
        <button onClick={checkType}>click</button>
        <input type='text' onChange={checkType} />
  
        <h3>e.target</h3>
        <button onClick={checkTarget}>
          <span>click</span>
        </button>
  
        <h3>e.currentTarget</h3>
        <button onClick={checkCurrentTarget}>
          <span>click</span>
        </button>
  
        <h3>preventDefault & defaultPrevented</h3>
        <a href='https://example.com' onClick={handleLinkClick}>
          click (https://example.com로 연결되어 있지만 preventDefault 메서드로
          인해 동작하지 않음)
        </a>
  
        <h3>stopPropagation</h3>
        <div onClick={handleOuterClick}>
          click (부모 div 요소)
          <button onClick={handleInnerClick}>click (자식 button 요소)</button>
        </div>
      </>
    );
  }
  