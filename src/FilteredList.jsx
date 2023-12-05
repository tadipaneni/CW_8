import React, { Component, useEffect, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

const FilteredList = (props) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  //Sets the state whenever the user types on the search bar
  const onSearch = (event) => {
    setSearch(event.target.value.trim().toLowerCase());
  };

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  const onFilter = (event) => {
    setType(event);
  };

  return (
    <div className="filter-list">
      <div className="flex">
      <DropdownButton
        id="dropdown-basic-button"
        title={type}
        onSelect={onFilter}
      >
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
        <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
      </DropdownButton>
      <input type="text" placeholder="Search" onChange={onSearch} />
      </div>
      <List items={props.items.filter((item) => (item.type === type || type === 'All') && item.name.toLowerCase().search(search) !== -1)} />
    </div>
  );
};

export default FilteredList;
