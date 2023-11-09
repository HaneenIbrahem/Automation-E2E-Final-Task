import ClaimInit from '../init/requestClaimInit'
// import ExpensesInit from '../init/addExpensesInit'

import { CreateClaimResponse } from '../response/claimRequestResponse'

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    claim: `${baseUrl}/web/index.php/api/v2/claim/requests`
}

export default class CreateClaimRequest {
    static requestClaimViaAPI(claimEventId: number) {
        return cy.createNewClaim(URLs.claim, ClaimInit.initClaim(claimEventId)).then((response: CreateClaimResponse) => {
            return {
                id: response.data.id,
            }
        })
    }
        static addExpenseViaAPI(expenseTypeId: number, claimRequestId: number) {
            return cy.addExpenseToClaim(expenseTypeId, ClaimInit.initExpenses(claimRequestId))
        }
        static submitClaimViaAPI(claimRequestId: number) {
            return cy.submitClaim(claimRequestId, ClaimInit.initSubmitClaim())
        }
}