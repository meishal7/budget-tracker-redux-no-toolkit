import { createStore } from "redux";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  incomeItems: [],
  expenseItems: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "addIncome") {
    return {
      totalIncome: state.totalIncome + action.payload.amount,
      totalExpense: state.totalExpense,
      incomeItems: [...state.incomeItems, action.payload],
      expenseItems: state.expenseItems,
    };
  }
  if (action.type === "addExpense") {
    return {
      totalIncome: state.totalIncome,
      totalExpense: state.totalExpense + action.payload.amount,
      incomeItems: state.incomeItems,
      expenseItems: [...state.expenseItems, action.payload],
    };
  }
  if (action.type === "delete") {
    if (action.payload.category === "Income") {
      let newIncomes = state.incomeItems.filter(
        (item) => item.description !== action.payload.description
      );
      return {
        totalIncome: state.totalIncome - action.payload.amount,
        totalExpense: state.totalExpense,
        incomeItems: newIncomes,
        expenseItems: state.expenseItems,
      };
    }
    if (action.payload.category === "Expense") {
      let newExpenses = state.expenseItems.filter(
        (item) => item.description !== action.payload.description
      );
      return {
        totalIncome: state.totalIncome,
        totalExpense: state.totalExpense - action.payload.amount,
        incomeItems: state.incomeItems,
        expenseItems: newExpenses,
      };
    }
  }
  return initialState;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
