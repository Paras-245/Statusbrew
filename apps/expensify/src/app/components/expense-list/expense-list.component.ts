import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Expense } from '../../shared/models/expense.model';
import { selectAllExpenses, selectLoading, selectError } from '../../store/selectors/app.selectors';
import { loadExpenses, deleteExpense } from '../../store/actions/app.actions';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';
import { AppState } from '../../store/state';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, ExpenseFormComponent],
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  expenses$: Observable<Expense[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  selectedExpense: Expense | null = null;

  constructor(private store: Store<AppState>) {
    this.expenses$ = this.store.select(selectAllExpenses);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadExpenses());
  }

  onAddExpense(): void {
    // Initialize a new empty expense for adding
    this.selectedExpense = { title: '', amount: 0, date: '', category: '' } as Expense;
  }

  onEditExpense(expense: Expense): void {
    // Set the selected expense for editing
    this.selectedExpense = { ...expense };
  }

  onDeleteExpense(id: string): void {
    this.store.dispatch(deleteExpense({ id }));
  }

  onFormSubmit(): void {
    // Clear the selected expense after the form submission
    this.selectedExpense = null;
  }
}
