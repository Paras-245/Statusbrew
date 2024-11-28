import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addExpense, updateExpense } from '../../store/actions/app.actions';
import { Expense } from '../../shared/models/expense.model';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css'],
})
export class ExpenseFormComponent {
  @Input() expense: Expense = {
    id: '',
    title: '',
    amount: 0,
    category: '',
    date: new Date().toString(),
  }; // Expense to edit
  @Output() formSubmit = new EventEmitter<void>();

  categories: string[] = ['Food', 'Travel', 'Utilities', 'Entertainment'];

  constructor(private store: Store) {}

  onSubmit(): void {
    if (this.expense) {
      if (this.expense.id) {
        // Update existing expense
        this.store.dispatch(updateExpense({ id: this.expense.id, expense: this.expense }));
      } else {
        // Add new expense
        this.store.dispatch(addExpense({ expense: this.expense }));
      }
      this.formSubmit.emit();
    }
  }
}
