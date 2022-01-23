import React, { useState } from 'react';
import ItemForm from './ItemForm';
import { IoMdClose } from 'react-icons/io';
import { ItemRow, ItemButtons } from './ItemStyles';

const Item = ({ items, completeItem, removeItem, updateItem }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ItemForm edit={edit} onSubmit={submitUpdate} />;
  }

  return items.map((item, index) => (
    <div
      className={item.isComplete ? 'item-row complete' : 'item-row'}
      key={index}
    >
      <ItemRow key={item.id}>
        {item.text}
        <ItemButtons>
          <IoMdClose
            onClick={() => removeItem(item.id)}
            size={"2.5rem"}
          />
        </ItemButtons>
      </ItemRow>
    </div>
  ));
};

export default Item;