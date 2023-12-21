import FruitItem from './FruitItem';

export default function Fruits() {
  return (
    <>
      <h1>과일 목록</h1>
      <FruitItem name='사과' amount={3} />
      <FruitItem name='바나나' amount={5} />
      <FruitItem name='복숭아' amount={2} />
    </>
  );
}