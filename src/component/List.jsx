function List(props) {
  const deleteItemFromList = (key) => {
    const newList = props.itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.updateItemList(newList);
  };
  return (
    <ul>
      {props.itemList.map((itemObj) => {
        return (
          <li key={itemObj.key}>
            <label>
              <input type="checkbox"></input>
              <p>{itemObj.item}</p>
              <span onClick={() => deleteItemFromList(itemObj.key)}></span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
