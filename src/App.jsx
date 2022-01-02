import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import Sentence from "./components/Sentence";
import useItemsStore from "./hooks/itemsStore";

function App() {
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const items = useItemsStore((state) => state.items);
  return (
    <div className="bg-gray-100 p-4 h-screen">
      <Header handleSearch={handleSearch} />
      <ItemsList>
        {items.map((item) => (
          <Item name={item.name} image={item.image} clickable />
        ))}
      </ItemsList>
      <Sentence />
    </div>
  );
}

export default App;
