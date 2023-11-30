export interface AddExpensesPayload {
    AddExpenses: {
        expenseTypeId: number,
        date: string,
        amount: string,
        note: string
    }
    
}