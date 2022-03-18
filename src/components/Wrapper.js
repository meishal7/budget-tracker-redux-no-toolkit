import List from "./List";
import Summary from "./Summary";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Form from "./Form";

const WrapperStyle = styled.div`
  width: 60%;
  margin: 0 auto;
  border: none;
  background-color: var(--bg-color);
  padding-top: var(--div-top-bottom-padding);
  padding-bottom: var(--div-top-bottom-padding);

  .forms {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: var(--div-top-bottom-margin) var(--div-left-right-margin);
  }
  .header {
    text-align: center;
    padding: 10px 10px;
    color: var(--text-color-dark);
  }
`;

const Wrapper = () => {
  const { incomeItems } = useSelector((state) => state);
  const { expenseItems } = useSelector((state) => state);
  console.log(incomeItems);

  return (
    <WrapperStyle>
      <h1 className="header">Budget Tracker</h1>

      <Summary />
      <div className="forms">
        <Form header={"Income"} action={"addIncome"} />
        <Form header={"Expense"} action={"addExpense"} />
      </div>

      <List data={incomeItems} header={"Income"} action={"addIncome"} />
      <List data={expenseItems} header={"Expense"} action={"addExpense"} />
    </WrapperStyle>
  );
};
export default Wrapper;
