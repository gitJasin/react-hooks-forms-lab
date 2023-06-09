import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [itemList, setItemList] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleItemFormSubmit(newItem) {
    setItemList((previousItemList) => [...previousItemList, newItem])
  }

  const filteredItems = itemList.filter((item) => {
    if (selectedCategory === "All" && search === "") return true
    if (selectedCategory !== "All" && search === "") {
      return item.category === selectedCategory
    }
    if (selectedCategory === "All" && search !== "") {
      return item.name.toLowerCase().includes(search.toLocaleLowerCase())
    }
    return (
      item.category === selectedCategory ||
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleItemFormSubmit}/>
      <Filter search={search} 
        onSearchChange={handleSearchChange} 
        onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
