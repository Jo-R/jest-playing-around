import React, { useState } from "react";

export const CheckboxWithLabel = (props) => {
  const [isChecked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!isChecked);
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      {isChecked ? props.labelOn : props.labelOff}
    </label>
  );

}