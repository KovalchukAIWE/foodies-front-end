export const selectDropDownStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,

    padding: "11px 14px",

    borderRadius: "30px",
    background: "transparent",
    border: state.isFocused
      ? "1px solid var(--border-grey-20)"
      : "1px solid var(--border-grey-12)",
    boxShadow: "none",

    "@media (min-width: 768px)": {
      padding: "11px 18px",
    },

    "&:hover": {
      borderColor: "var(--border-grey-20)",
    },
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: " var(--text-grey)",
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.5",
      letterSpacing: "-0.02em",
    },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: " var(--main-black)",
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.5",
      letterSpacing: "-0.02em",
    },
  }),
  inputContainer: (baseStyles) => ({
    ...baseStyles,
    color: " var(--main-black)",
    margin: "0",
    padding: "0",
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.5",
      letterSpacing: "-0.02em",
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    margin: "0",
    padding: "0",
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.5",
      letterSpacing: "-0.02em",
    },
  }),
  indicatorContainer: (baseStyles) => ({
    ...baseStyles,
    color: "var(--main-black)",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
    color: "var(--main-black)",
    "&:hover": {
      color: "var(--main-black)",
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    padding: "13px 0",
    border: "1px solid var(--border-grey-20)",
    borderRadius: "15px",
    boxShadow: "none",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    padding: "3px 18px 3px 18px",
    color: "var(--main-black)",
    fontSize: "14px",
    boxShadow: "none",
    backgroundColor:
      state.isSelected || state.isFocused || state.isActive
        ? "var(--border-grey-10)"
        : "transparent",
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "1.5",
      letterSpacing: "-0.02em",
    },

    "&:hover": {
      backgroundColor: "var(--border-grey-10)",
    },
    "&:active": {
      backgroundColor: "var(--border-grey-10)",
    },
  }),
};
