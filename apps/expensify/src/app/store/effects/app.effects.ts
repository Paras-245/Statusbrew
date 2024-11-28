import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AppActions from '../actions/app.actions';
import { ExpensesService } from '../../expenses.service';
import { inject } from '@angular/core';

@Injectable()
export class AppEffects {
  constructor( private expensesService: ExpensesService) {}
  private actions$ = inject(Actions)
  
  // Load Expenses
  loadExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadExpenses),
      mergeMap(() => {
        console.log('Load Expenses effect triggered');
        return this.expensesService.getExpenses().pipe(
          map((expenses) => {
            console.log('Load Expenses success', expenses);
            return AppActions.loadExpensesSuccess({ expenses });
          }),
          catchError((error) => {
            console.error('Load Expenses failure', error);
            return of(AppActions.loadExpensesFailure({ error: error.message }));
          })
        );
      })
    )
  );

  // Add Expense
  addExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.addExpense),
      mergeMap(({ expense }) => {
        console.log('Add Expense effect triggered', expense);
        return this.expensesService.addExpense(expense).pipe(
          map((newExpense) => {
            console.log('Add Expense success', newExpense);
            return AppActions.addExpenseSuccess({ expense: newExpense });
          }),
          catchError((error) => {
            console.error('Add Expense failure', error);
            return of(AppActions.addExpenseFailure({ error: error.message }));
          })
        );
      })
    )
  );

  // Update Expense
  updateExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.updateExpense),
      mergeMap(({ id, expense }) => {
        console.log('Update Expense effect triggered', { id, expense });
        return this.expensesService.updateExpense(id, expense).pipe(
          map((updatedExpense) => {
            console.log('Update Expense success', updatedExpense);
            return AppActions.updateExpenseSuccess({ expense: updatedExpense });
          }),
          catchError((error) => {
            console.error('Update Expense failure', error);
            return of(AppActions.updateExpenseFailure({ error: error.message }));
          })
        );
      })
    )
  );

  // Delete Expense
  deleteExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.deleteExpense),
      mergeMap(({ id }) => {
        console.log('Delete Expense effect triggered', id);
        return this.expensesService.deleteExpense(id).pipe(
          map(() => {
            console.log('Delete Expense success', id);
            return AppActions.deleteExpenseSuccess({ id });
          }),
          catchError((error) => {
            console.error('Delete Expense failure', error);
            return of(AppActions.deleteExpenseFailure({ error: error.message }));
          })
        );
      })
    )
  );
}
