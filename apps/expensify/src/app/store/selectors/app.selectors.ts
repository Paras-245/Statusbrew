import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectAllExpenses = createSelector(selectAppState, (state) => state.expenses);
export const selectLoading = createSelector(selectAppState, (state) => state.loading);
export const selectError = createSelector(selectAppState, (state) => state.error);
