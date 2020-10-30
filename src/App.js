import React, { useState } from "react";
import Accordion from "../src/components/Accordion";
import Search from "../src/components/Search";
import Dropdown from "../src/components/Dropdown";

const items = [
  {
    title: "A",
    content: "Lorem Ipsum",
  },
  {
    title: "B",
    content: "Lorem Ipsum",
  },
  {
    title: "C",
    content: "Lorem Ipsum",
  },
];

const options = [
  {
    label: "The Colour Red",
    value: "red",
  },
  {
    label: "The Colour Green",
    value: "green",
  },
  {
    label: "The Colour Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
