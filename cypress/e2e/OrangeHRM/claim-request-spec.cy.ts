import Event from "../../support/helpers/eventsHelper"
import ExpenseTypes from "../../support/helpers/expenseTypesHelper"
import CreateClaimRequest from "../../support/helpers/claimRequestHelper"
// import AddExpensetoClaim from "../../support/helpers/addExpensesHelper"
import ClaimPage from "../../support/page-objects/claimsPage";


const claimObj: ClaimPage = new ClaimPage();

let eventId: number
let eventName: string
let expenseTypeId: number
let empNumbers: number[] = [];
let claimRequestId: number
let referenceIds: string[] = []

let amounts: Number[] = []
const currentDate = new Date();
const date = currentDate.toISOString().split('T')[0];

describe("Claim Request", () => {
    beforeEach(() => {
        cy.fixture('employee').as('eData')
        cy.login("Admin", "admin123")

        cy.get('@eData').then((dataEmp: any) => {
            cy.addNewEmployee(dataEmp.addEmployee.firstName, dataEmp.addEmployee.middleName, dataEmp.addEmployee.lastName, dataEmp.addEmployee.empPicture, dataEmp.addEmployee.employeeId).then((response) => {
                const empNumber = response.body.data.empNumber
                empNumbers.push(empNumber)
            }).then(() => {
                cy.addNewUser(dataEmp.addUser.username, dataEmp.addUser.password, dataEmp.addUser.status, dataEmp.addUser.userRoleId, empNumbers[0])
            })

            ExpenseTypes.addNewExpenseTypeViaAPI().then(expenseTypeInfo => {
                expenseTypeId = expenseTypeInfo.id

                Event.addNewEventViaAPI().then(eventInfo => {
                    eventId = eventInfo.id
                    eventName = eventInfo.name
                    cy.logout()
                    cy.login(dataEmp.addUser.username, dataEmp.addUser.password)

                    for (let i = 0; i < 2; i++) {
                        CreateClaimRequest.requestClaimViaAPI(eventId).then(submitClaimInfo => {
                            claimRequestId = submitClaimInfo.id
                            referenceIds.push(submitClaimInfo.refId)
                            CreateClaimRequest.addExpenseViaAPI(claimRequestId, expenseTypeId).then(addExpenseInfo => {
                                //    dates.push(addExpenseInfo.date)
                                amounts.push(addExpenseInfo.amount)
                            })
                            CreateClaimRequest.submitClaimViaAPI(claimRequestId)
                        })
                    }

                    cy.logout()
                    cy.login('Admin', "admin123")

                })
            })
        })
    })

    it("Claims Request Approval Flow", () => {
        claimObj.navigateToClaimPage()
        claimObj.approveClaim(eventName)
        for (let i = 0; i < 2; i++) {
            claimObj.assertion(eventName, referenceIds[i], 'Paid', date, amounts[i])
        }

    })

    it("Claims Request Rejection Flow", () => {
        claimObj.navigateToClaimPage()
        claimObj.rejectClaim(eventName)
        for (let i = 0; i < 2; i++) {
            claimObj.assertion(eventName, referenceIds[i], 'Rejected', date, amounts[i])
        }
    })

    afterEach(() => {
        cy.deleteEmployee(empNumbers[0])
        empNumbers.pop()
        Event.deleteEventViaAPI(eventId)
        ExpenseTypes.deleteExpenseTypesViaAPI(expenseTypeId)
    })

})
