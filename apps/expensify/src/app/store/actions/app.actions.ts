import { createAction, props } from '@ngrx/store';
import { Expense } from '../../shared/models/expense.model';

// Load Expenses
export const loadExpenses = createAction('[Expense List] Load Expenses');
export const loadExpensesSuccess = createAction(
  '[Expense API] Load Expenses Success',
  props<{ expenses: Expense[] }>()
);
export const loadExpensesFailure = createAction(
  '[Expense API] Load Expenses Failure',
  props<{ error: string }>()
);

// Add Expense
export const addExpense = createAction(
  '[Expense Form] Add Expense',
  props<{ expense: Expense }>()
);
export const addExpenseSuccess = createAction(
  '[Expense API] Add Expense Success',
  props<{ expense: Expense }>()
);
export const addExpenseFailure = createAction(
  '[Expense API] Add Expense Failure',
  props<{ error: string }>()
);

// Update Expense
export const updateExpense = createAction(
  '[Expense Form] Update Expense',
  props<{ id: string; expense: Expense }>()
);
export const updateExpenseSuccess = createAction(
  '[Expense API] Update Expense Success',
  props<{ expense: Expense }>()
);
export const updateExpenseFailure = createAction(
  '[Expense API] Update Expense Failure',
  props<{ error: string }>()
);

// Delete Expense
export const deleteExpense = createAction(
  '[Expense List] Delete Expense',
  props<{ id: string }>()
);
export const deleteExpenseSuccess = createAction(
  '[Expense API] Delete Expense Success',
  props<{ id: string }>()
);
export const deleteExpenseFailure = createAction(
  '[Expense API] Delete Expense Failure',
  props<{ error: string }>()
);
