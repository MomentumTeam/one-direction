import React, { useState } from "react";
import { AutoComplete, Input, Spin, Form } from "antd";
import { debounce } from "lodash";

// TODO change this func to api or get this func as props
const asyncMockVal = (str, repeat = 1) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ value: str.repeat(repeat) }), 1000)
  );
};

export const UsersAutoComplete = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const search = debounce(async (searchText) => {
    setOptions([]);
    let op = await asyncMockVal(searchText, 2);
    setOptions(!searchText ? [] : [op]);
  }, 1000);

  const onSearch = async (searchText) => {
    search(searchText);
  };

  const onSelect = (data) => {
    // setValue(data);
    console.log("onSelect", data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <Form.Item label="פרטי מפקד ישיר" name="directCommander">
      <AutoComplete
        size="large"
        value={value}
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        // onChange={onChange}
        placeholder="התחל להקליד..."
        notFoundContent={<Spin />}
      />
    </Form.Item>
  );
};
