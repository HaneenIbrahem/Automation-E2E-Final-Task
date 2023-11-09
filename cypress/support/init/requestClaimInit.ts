import { CreateClaimPayload } from "../payload/claimRequestPayload"
import { AddExpensesPayload } from "../payload/addExpensesPayload"
import { SubmitClaimPayload } from "../payload/submitClaimPayload";

import GenaricHelper from "../helpers/genaricHelper";

export default class ClaimInit {
    static initClaim(claimEventId: number): CreateClaimPayload {
        let createClaimPayload: CreateClaimPayload = {
            RequestClaim: {
                    claimEventId: claimEventId,
                    currencyId: "JOD",
                    remarks: "Hotel stay during the business trip"
            }
        }
        return createClaimPayload
    }
    static initExpenses(expenseTypeId: number): AddExpensesPayload {
        let addExpensesPayload: AddExpensesPayload = {
            AddExpenses: {
                expenseTypeId: expenseTypeId,
                date: "2023-11-16",
                amount: "5000.00",
                note: "for hotel"
            }
        }
        return addExpensesPayload
    }
    static initSubmitClaim(): SubmitClaimPayload {
        let submitClaimPayload: SubmitClaimPayload = {
            SubmitClaim: {
                action: "SUBMIT"
            }
        }
        return submitClaimPayload
    }
}




// import { AddExpensesPayload } from "../payload/addExpensesPayload"

// export default class ExpensesInit {
//     static initExpenses(expenseTypeId: number): AddExpensesPayload {
//         let addExpensesPayload: AddExpensesPayload = {
//             AddExpenses: {
//                 expenseTypeId: expenseTypeId,
//                 date: "2023-11-16",
//                 amount: "5000.00",
//                 note: "for hotel"
//             }
//         }
//         return addExpensesPayload
//     }
// }