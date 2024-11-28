import { createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';
import { AppState, initialState } from '../state';

export const appReducer = createReducer(
  initialState,
  // Load Expenses
  on(AppActions.loadExpenses, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AppActions.loadExpensesSuccess, (state, { expenses }) => ({
    ...state,
    expenses,
    loading: false,
  })),
  on(AppActions.loadExpensesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add Expense
  on(AppActions.addExpense, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AppActions.addExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
    loading: false,
  })),
  on(AppActions.addExpenseFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Update Expense
  on(AppActions.updateExpense, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AppActions.updateExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: state.expenses.map((e) => (e.id === expense.id ? expense : e)),
    loading: false,
  })),
  on(AppActions.updateExpenseFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Delete Expense
  on(AppActions.deleteExpense, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AppActions.deleteExpenseSuccess, (state, { id }) => ({
    ...state,
    expenses: state.expenses.filter((e) => e.id !== id),
    loading: false,
  })),
  on(AppActions.deleteExpenseFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
