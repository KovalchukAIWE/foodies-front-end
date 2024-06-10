import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "beef", label: "Beef" },
  { value: "breakfast", label: "Breakfast" },
  { value: "desserts", label: "Desserts" },
  { value: "lamb", label: "Lamb" },
  { value: "miscellaneous", label: "Miscellaneous" },
  { value: "pasta", label: "Pasta" },
  { value: "pork", label: "Pork" },
  { value: "seafood", label: "Seafood" },
  { value: "side", label: "Side" },
  { value: "starter", label: "Starter" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,

    display: "flex",
    flexWrap: "nowrap",
    width: "100%",

    padding: "5px 4px",

    borderRadius: "30px",
    background: "transparent",

    border: state.isSelected
      ? "1px solid rgba(5, 5, 5, 0.2)"
      : "1px solid rgba(5, 5, 5, 0.12)",
  }),
  //   option: (provided, state) => ({
  //     ...provided,
  //     background: state.isSelected ? "rgba(5, 5, 5, 0.12)" : "transparent",
  //   }),
  menu: (provided) => ({
    ...provided,
    background: "#ffffff",
    borderRadius: "15px",
    width: "100%",
    color: "#050505",

    border: "1px solid rgba(5, 5, 5, 0.2)",
    boxShadow: "none",
  }),
};

const SelectDropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        placeholder={"Select a category"}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default SelectDropDown;
