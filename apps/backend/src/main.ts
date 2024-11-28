const express = require('express');
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(cors());

let expenses = [
  { id: '1', title: 'Groceries', amount: 50, date: '2024-11-27', category: 'Food' },
  {id:"2",title:"Rent",amount:1000,date:"2024-11-27",category:"Home" },
  {id:"3",title:"Internet",amount:50,date:"2024-11-27",category:"Bills" },
  {id:"4",title:"Gas",amount:30,date:"2024-11-27",category:"Car" },
  
];

app.get('/expenses', (req, res) => res.json(expenses));
app.post('/expenses', (req, res) => {
  const expense = { ...req.body, id: Date.now().toString() };
  expenses.push(expense);
  res.json(expense);
});
app.put('/expenses/:id', (req, res) => {
  const { id } = req.params;
  expenses = expenses.map((exp) => (exp.id === id ? { ...req.body, id } : exp));
  res.json(expenses.find((exp) => exp.id === id));
});
app.delete('/expenses/:id', (req, res) => {
  const { id } = req.params;
  expenses = expenses.filter((exp) => exp.id !== id);
  res.json({ success: true });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
