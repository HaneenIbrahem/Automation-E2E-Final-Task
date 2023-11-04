import { CreateSalaryPayload } from "../payload/salaryPayload"
import GenaricHelper from "../helpers/genericHelper";

export default class SalaryInit {
    static initSalary(): CreateSalaryPayload {
        let createSalaryPayload: CreateSalaryPayload = {
            Salary: {
                salaryComponent: "Basic Salary",
                salaryAmount: "50000",
                payGradeId: 1,
                currencyId: "USD",
                payFrequencyId: "4",
                comment: "no comment",
                addDirectDeposit: false
            }
        }
        return createSalaryPayload
    }
}