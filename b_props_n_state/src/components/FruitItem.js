import FruitItem from './FruitItem';

export default function Fruits() {
  return (
    <>
      <h1>과일 목록</h1>
      <FruitItem name='apple' amount={3} />
      <FruitItem name='banana' amount={5} />
      <FruitItem name='peach' amount={2} />
    </>
  );
}