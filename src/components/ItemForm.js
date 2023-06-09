import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setformData] = useState({
    name: "",
    category: "Produce"
  })
  
  function handleSubmit (e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    }
    console.log(newItem)
    onItemFormSubmit(newItem)

    setformData({name: "", category: "Produce"})
  }

  function handleChange (e) {
    const name = e.target.name
    const value = e.target.value
    setformData({...formData, [name]: value})
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}> 
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          onChange={handleChange}
          value={formData.name}
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
