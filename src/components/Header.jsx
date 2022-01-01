const Header = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-gray-900 text-xl">Alphabet</h2>

      <div className=" p-2">
        <label>
          Search
          <input
            className="bg-transparent border-gray-300 border-2 shadow p-2 rounded ml-4"
            type="text"
            name="search"
            id="search"
          />
        </label>
      </div>
    </div>
  );
};

export default Header;
