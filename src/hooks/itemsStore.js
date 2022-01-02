import create from "zustand";
import intialItems from "../data/items.json";

const useItemsStore = create((set) => ({
  items: intialItems,
  search: (reqStr) => {
    if (reqStr) {
      set((state) => ({
        items: state.items.filter((item) =>
          reqStr.substring(item.name.toLowerCase())
        ),
      }));
    }
  },
}));

export default useItemsStore;
