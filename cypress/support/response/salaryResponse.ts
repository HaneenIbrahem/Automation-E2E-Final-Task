export interface CreateSalaryResponse {
    data: {
        id: number,
        amount: string,
        salaryName: string,
        comment: string,
        payPeriod: {
            id: string,
            name: string
        },
        payGrade: {
            id: number,
            name: string
        },
        currencyType: {
            id: string,
            name: string
        },
        directDebit: {
            id: any,
            routingNumber: any,
            account: any,
            amount: any,
            accountType: any
        }
    }
}