export interface CreateSalaryPayload {
    Salary: {
        salaryComponent: string,
        salaryAmount: string,
        payGradeId: number,
        currencyId: string,
        payFrequencyId: string,
        comment: string,
        addDirectDeposit: boolean
    }
}
