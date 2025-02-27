import { useState } from "react";


export default function NewTodoForm({ addTodos }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // 防止默认刷新
    if(newItem === '') return;

    addTodos(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )
}
