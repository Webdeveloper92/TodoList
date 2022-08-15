import "./App.css";
import { useState } from "react";
import List from "./component/List";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);
  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemtoList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);

    setCurrentItem("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h4>Todo List</h4>
          <div className="Input-container">
            <input
              onChange={onChangeHandler}
              value={currentItem}
              type="text"
            ></input>
            <button onClick={addItemtoList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
