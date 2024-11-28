export interface Expense {
    id: string;          // Unique identifier for the expense
    title: string;       // Short description of the expense (e.g., "Groceries")
    amount: number;      // Amount spent
    date: string;        // Date of the expense in ISO format (e.g., "2024-11-27")
    category: string;    // Category of the expense (e.g., "Food", "Travel")
  }
  