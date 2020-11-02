import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
        label="Select a language"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={selectedLanguage} text={text} />
    </div>
  );
};

export default Translate;
