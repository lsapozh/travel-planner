import React from "react";
import { Date, Form } from "./components";
import Countries from "../../containers/Countries";

const Forms = ({ onInputChange, months }) => {
  return (
    <Form>
      <Date>
        <p>Когда ехать</p>
        <input onChange={onInputChange} name="months" value={months} />
      </Date>
      <Countries />
    </Form>
  );
};

export default Forms;
