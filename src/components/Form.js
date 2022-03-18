import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const FormStyle = styled.div`
  background-color: var(--section-color);
  border: none;
  box-shadow: var(--shadow);
  flex: 1 1 100px;
  padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  border-radius: var(--radius);
  margin: var(--div-top-bottom-margin) var(--div-left-right-margin);
  fieldset {
    display: flex;
    flex-direction: column;
  }
  .header {
    text-align: center;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  }
  .submit-btn {
    width: var(--btn-width);
    height: var(--btn-height);
    margin: 0 auto;
    display: block;
    border: none;
    border-radius: 5px;
    color: var(--text-color-dark);
    margin-top: var(--btn-margin);
    margin-bottom: var(--btn-margin);
    padding-top: var(--btn-padding);
    padding-bottom: var(--btn-padding);
    background-color: var(--btn-color);
  }
  input {
    height: 40px;
    border: 0.5px solid var(--text-color-dark);
    border-radius: 5px;
  }
  input:focus {
    border: solid 1px black;
  }
`;

const Form = ({ header, action }) => {
  const [descr, setDescr] = useState(" ");
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const submitHandler = (event, action) => {
    event.preventDefault();

    const payload = {
      amount: +amount,
      description: descr,
    };
    dispatch({ type: action, payload });

    setAmount(0);
    setDescr("");
  };

  const descrHandler = (event) => {
    setDescr(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <FormStyle>
      <h3 className="header">{header} Entries</h3>
      <form onSubmit={(e) => submitHandler(e, action)}>
        <fieldset>
          <label htmlFor="description">{header} Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={descr}
            onChange={descrHandler}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="amount">{header} Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={amountHandler}
          ></input>
        </fieldset>
        <button className="submit-btn" type="submit">
          Add {header}
        </button>
      </form>
    </FormStyle>
  );
};
export default Form;
