import Item from "./Item";

const Sentence = () => {
  return (
    <div className="mt-4">
      <h4>Sentence</h4>
      <div className="border p-4 flex space-x-4">
        <Item name="Hey" image="i.svg" />
        <Item name="You" image="i.svg" />
      </div>
    </div>
  );
};

export default Sentence;
