export default function Result(props) {
    const { image, backgroundColor, fontColor, content } = props.data;
  
    return (
      <div>
        <img
          src={`${image}.jpg`}
          alt={image}
          width={100}
          height={100}
        />
  
        <div
          style={{
            padding: '10px',
            marginTop: '10px',
            backgroundColor: `${backgroundColor}`,
            color: `${fontColor}`,
          }}
        >
          {content}
        </div>
      </div>
    );
  }