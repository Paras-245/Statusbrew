import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 

@Component({
  standalone: true,
  imports: [ExpenseListComponent,NavbarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'expensify';
}
