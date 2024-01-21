export default function Input(props) {
    const setData = props.setData;
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setData((data) => ({ ...data, content: value }));
    };
  
    return (
      <>
        내용 :{' '}
        <input
          type='text'
          onChange={handleInputChange}
          placeholder='내용을 입력하세요.'
        />
      </>
    );
  }
  