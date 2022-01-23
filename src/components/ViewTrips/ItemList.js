import React, { useState, useEffect } from 'react';
import ItemForm from './ItemForm';
import Item from './Item';

function ItemList() {

  const [items, setItems] = useState([]);

  const addItem = item => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newItems = [item, ...items];
    setItems(newItems);
  };

  const updateItem = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setItems(prev => prev.map(item => (item.id === itemId ? newValue : item)));
  };

  const removeItem = (id) => {
    const removedArr = [...items].filter(item => item.id !== id);
    setItems(removedArr);
  };

  const completeItem = id => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <ItemForm onSubmit={addItem} />
      <Item
        items={items}
        completeItem={completeItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </>
  );
}

export default ItemList;