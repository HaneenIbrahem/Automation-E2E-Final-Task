import ExpenseTypesInit from '../init/expenseTypeInit'
import { CreateExpenseTypesResponse } from '../response/expenseTypesResponse';

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    expenseTypes: `${baseUrl}/web/index.php/api/v2/claim/expenses/types`
}

export default class ExpenseTypes{
    static addNewExpenseTypeViaAPI(){
        return cy.addNewExpenseType(URLs.expenseTypes, ExpenseTypesInit.initExpenseTypes()).then((response: CreateExpenseTypesResponse) => {
            return {
                id: response.data.id,
              }
            })
    }
    static deleteExpenseTypesViaAPI(ExpenseTypesId: number){
        return cy.deleteExpenseType(ExpenseTypesId)
    }
}