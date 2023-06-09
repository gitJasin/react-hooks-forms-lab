import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [formData, setformData] = useState({
    name: "",
    category: "Produce"
  })
  
  function handleSubmit (e) {
    e.preventDefault()
    console.log(formData)
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
