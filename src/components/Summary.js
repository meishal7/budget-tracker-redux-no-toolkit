import { useSelector } from "react-redux";
import styled from "styled-components";

const SummaryStyle = styled.div`
  background-color: var(--section-color);
  border: none;
  box-shadow: var(--shadow);
  margin: var(--div-top-bottom-margin) auto;
  border-radius: var(--radius);
  width: 60%;
  display: grid;
  grid-column: 1fr 1fr;
  grid-row: auto;
  grid-template-areas:
    "summary summary"
    "income expense"
    "left left";
  .summary-header {
    grid-area: summary;
    text-align: center;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  }
  .income {
    grid-area: income;
    text-align: center;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  }
  .expense {
    grid-area: expense;
    text-align: center;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  }
  .left {
    grid-area: left;
    text-align: center;
    padding: var(--div-top-bottom-padding) var(--div-left-right-padding);
  }
`;

const Summary = () => {
  const { totalIncome } = useSelector((state) => state);
  const { totalExpense } = useSelector((state) => state);

  let left = totalIncome - totalExpense;
  // let left = 0;

  return (
    <SummaryStyle>
      <h3 className="summary-header">Summary</h3>
      <p className="income">Total income: ${+totalIncome}</p>
      <p className="expense">Total expense: ${+totalExpense}</p>
      <p className="left">Left after spending: ${left}</p>
    </SummaryStyle>
  );
};
export default Summary;
