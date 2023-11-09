export interface AddExpenseResponse {
    data: {

        id: Number,
        expenseType: {
            id: Number,
            name: string,
            status: boolean,
            isDeleted: boolean
        },
        amount: Number,
        note: string,
        date: string
    },
    meta: {
        total: Number,
        totalAmount: Number
    },
    rels: []
}
