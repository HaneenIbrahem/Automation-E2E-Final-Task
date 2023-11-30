import { CreateExpenseTypesPayload } from "../payload/expenseTypesPayload"
import GenaricHelper from "../helpers/genaricHelper";

export default class ExpenseTypesInit {
    static initExpenseTypes(): CreateExpenseTypesPayload {
        let createExpenseTypesPayload: CreateExpenseTypesPayload = {
            ExpenseTypes: {
                name: "Travel Expenses",
                description: "This expense type covers costs related to business travel, such as airfare, accommodation, meals, and transportation.",
                status: true
            }
        }
        return createExpenseTypesPayload
    }
}