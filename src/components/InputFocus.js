import React, { useEffect, useRef } from "react";

export default function InputFocus() {
  const textInput = useRef(null);

  // function handleClick() {}
  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="mb3">
          <input
            ref={textInput}
            type="text"
            // value="Focus the text input"
            // onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
