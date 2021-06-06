import React from "react";

export const TextInput = props => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => console.log("value changed!")}
      />
      <p>// place for errors</p>
    </div>
  );
};
