const Item = ({ name, image, clickable }) => {
  return (
    <div
      key={name}
      className={`rounded border p-2 shadow w-24 ${
        clickable ? "cursor-pointer" : ""
      }`}
    >
      <div className="p-2 border-0 border-b-2 border-gray-300 text-center">
        <h4>{name}</h4>
      </div>
      <div className="p-2 w-18">
        <img
          className="fill-gray-300 object-cover w-18"
          src={`src/data/${image}`}
          alt={name}
        />
      </div>
    </div>
  );
};

export default Item;
