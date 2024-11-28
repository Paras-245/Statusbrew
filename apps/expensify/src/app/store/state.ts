import { Expense } from '../shared/models/expense.model';

export interface AppState {
  expenses: Expense[]; // Global state slice for expenses
  loading: boolean; // Global loading indicator
  error: string | null; // Global error state
}

export const initialState: AppState = {
  expenses: [],
  loading: false,
  error: null,
};
