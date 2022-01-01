const ItemsList = (props) => {
  console.log(props);
  return <div className="flex justify-around">{props.children}</div>;
};
export default ItemsList;
