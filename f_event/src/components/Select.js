export default function Select(props) {
    const setData = props.setData;
  
    const handleSelectChange = (dataType) => (e) => {
        const value = e.target.value;
        setData((data) => ({...data, [dataType]: value}))
    }

    return (
      <>
        과일 :
        <select onChange={handleSelectChange('image')} >
          <option value='bm'>햄버거</option>
          <option value='discovery'>우주선</option>
          <option value='mb'>노트북</option>
          <option value='noodle'>컵라면</option>
        </select>
        배경색 :
        <select onChange={handleSelectChange('backgroundColor')}>
          <option value='black'>검정</option>
          <option value='white'>하양</option>
          <option value='red'>빨강</option>
          <option value='orange'>주황</option>
          <option value='yellow'>노랑</option>
          <option value='green'>초록</option>
          <option value='blue'>파랑</option>
          <option value='purple'>보라</option>
          <option value='pink'>분홍</option>
        </select>
        글자색 :
        <select onChange={handleSelectChange('fontColor')} >
          <option value='white'>하양</option>
          <option value='black'>검정</option>
          <option value='red'>빨강</option>
          <option value='orange'>주황</option>
          <option value='yellow'>노랑</option>
          <option value='green'>초록</option>
          <option value='blue'>파랑</option>
          <option value='purple'>보라</option>
          <option value='pink'>분홍</option>
        </select>
      </>
    );
  }
  