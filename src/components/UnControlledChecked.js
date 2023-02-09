import React, { useRef } from "react";

const UncontrolledCheckbox = () => {
  const checkboxRef = useRef(null);

  const handleSubmit = () => {
    console.log(checkboxRef.current.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        ref={checkboxRef}
        onChange={(e) => console.log(e.target.checked)}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default UncontrolledCheckbox;
