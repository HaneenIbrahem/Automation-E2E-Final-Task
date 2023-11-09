export interface CreateExpenseTypesPayload {
    ExpenseTypes: {
        name: string,
        description: string,
        status: boolean
    }
    
}