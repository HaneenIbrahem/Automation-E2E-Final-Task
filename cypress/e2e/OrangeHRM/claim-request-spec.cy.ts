import Event from "../../support/helpers/eventsHelper"
import ExpenseTypes from "../../support/helpers/expenseTypesHelper"
import CreateClaimRequest from "../../support/helpers/claimRequestHelper"
// import AddExpensetoClaim from "../../support/helpers/addExpensesHelper"
import ClaimPage from "../../support/page-objects/claimsPage";


const claimObj: ClaimPage = new ClaimPage();

// let empNumber: number
let eventId: number
let eventName: string
let expenseTypeId: number
let empNumbers: number[] = [];
let claimRequestId: number
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
                            CreateClaimRequest.addExpenseViaAPI(claimRequestId, expenseTypeId)
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
        claimObj.assertion(eventName, 'Paid')
    })

    it("Claims Request Rejection Flow", () => {
        claimObj.navigateToClaimPage()
        claimObj.rejectClaim(eventName)
        claimObj.assertion(eventName, 'Rejected')
    })

    afterEach(() => {
        cy.deleteEmployee(empNumbers[0])
        empNumbers.pop()
        Event.deleteEventViaAPI(eventId)
        ExpenseTypes.deleteExpenseTypesViaAPI(expenseTypeId)
    })

})
