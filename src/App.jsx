import items from "./data/items.json";
import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import Phrase from "./components/Phrase";

function App() {
  console.log(items);
  return (
    <div className="bg-gray-100 p-4 h-screen">
      <Header />
      <ItemsList>
        {items.map((item) => (
          <Item name={item.name} image={item.image} />
        ))}
      </ItemsList>
      <Phrase />
    </div>
  );
}

export default App;