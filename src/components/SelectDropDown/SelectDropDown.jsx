import Select from "react-select";

import { selectDropDownStyles } from "./selectStyles";

const SelectDropDown = ({
  placeholder,
  options,
  selectedOption,
  onSelect,
  name,
  field,
}) => {
  return (
    <Select
      {...field}
      defaultValue={selectedOption}
      placeholder={placeholder}
      onChange={onSelect}
      options={options}
      styles={selectDropDownStyles}
      name={name}
    />
  );
};

export default SelectDropDown;
