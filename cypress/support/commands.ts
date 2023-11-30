
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../support/page-objects/loginPage'
import cypress from "cypress";
import { CreateEventsPayload } from "../support/payload/eventsPayload";
import { CreateEventsResponse } from "../support/response/eventsResponse";
import { CreateExpenseTypesPayload } from './payload/expenseTypesPayload';
import { CreateExpenseTypesResponse } from './response/expenseTypesResponse';
import { CreateClaimPayload } from './payload/claimRequestPayload';
import { CreateClaimResponse } from './response/claimRequestResponse';
import { AddExpensesPayload } from './payload/addExpensesPayload';
import { AddExpenseResponse } from './response/addExpensesResponse';
import { SubmitClaimResponse } from './response/submitClaimResponse';
import { SubmitClaimPayload } from './payload/submitClaimPayload';
// import AddExpensetoClaim from './helpers/addExpensesHelper';
const loginObj: LoginPage = new LoginPage();
declare global {
    namespace Cypress {
        interface Chainable {
            // addNewUser: typeof addNewUser
            logout: typeof logout
            login: typeof login
            addNewEmployee: typeof addNewEmployee
            addNewUser: typeof addNewUser
            deleteEmployee: typeof deleteEmployee
            addNewEvent: (requestURL: string, eventsPayload: CreateEventsPayload) => Chainable<CreateEventsResponse>
            deleteEvent: (eventID: number) => Chainable<CreateEventsResponse>
            addNewExpenseType: (requestURL: string, expenseTypesPayload: CreateExpenseTypesPayload) => Chainable<CreateExpenseTypesResponse>
            deleteExpenseType: (expenseTypesID: number) => Chainable<CreateExpenseTypesResponse>
            createNewClaim: (requestURL: string, requestClaimPayload: CreateClaimPayload) => Chainable<CreateClaimResponse>
            addExpenseToClaim: (claimRequestId: number, addExpenseToClaimPayload: AddExpensesPayload) => Chainable<AddExpenseResponse>
            submitClaim: (claimRequestId: number, submitClaimPayload: SubmitClaimPayload) => Chainable<SubmitClaimResponse>
        }
    }

}

function logout() {
    cy.get('.oxd-userdropdown-tab').click({ force: true });
    return cy.get('.oxd-dropdown-menu').contains('Logout').click({ force: true });
}
function login(username: string, password: string) {
    cy.visit("/web/index.php/auth/login");
    loginObj.login(username, password);
}

function addNewEmployee(firstName: string, middleName: string, lastName: string, empPicture: string, employeeId: number) {
    return cy.api({
        method: 'POST',
        url: '/web/index.php/api/v2/pim/employees',
        body: {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            empPicture: empPicture,
            employeeId: employeeId
        }
    })
}

function deleteEmployee(empNumber: number){
    cy.api({ 
        method: 'DELETE',
        url: `/web/index.php/api/v2/pim/employees`,
        body: {
            ids: [empNumber]
        }
    })
}

function addNewUser(username: string, password: string, status: boolean, userRoleId: number, empNumber: number) {
    return cy.api({
        method: 'POST',
        url: '/web/index.php/api/v2/admin/users',
        body: {
            username: username,
            password: password,
            status: status,
            userRoleId: userRoleId,
            empNumber: empNumber
        }
    })
}

Cypress.Commands.add('addNewEvent', (requestURL: string, eventsPayload: CreateEventsPayload) => {
    return cy.api({
        method: 'POST',
        url: requestURL,
        body: eventsPayload.AddEvent,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('deleteEvent', (eventId: number) => {
    return cy.api({
        method: 'DELETE',
        url: '/web/index.php/api/v2/claim/events',
        body: {ids: [eventId]},
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('addNewExpenseType', (requestURL: string, expenseTypesPayload: CreateExpenseTypesPayload) => {
    return cy.api({
        method: 'POST',
        url: requestURL,
        body: expenseTypesPayload.ExpenseTypes,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('deleteExpenseType', (expenseTypeId: number) => {
    return cy.api({
        method: 'DELETE',
        url: '/web/index.php/api/v2/claim/expenses/types',
        body: {ids: [expenseTypeId]},
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('createNewClaim', (requestURL: string, requestClaimPayload: CreateClaimPayload) => {
    return cy.api({
        method: 'POST',
        url: requestURL,
        body: requestClaimPayload.RequestClaim,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

// Cypress.Commands.add('deleteExpenseType', (expenseTypeId: number) => {
//     return cy.api({
//         method: 'DELETE',
//         url: '/web/index.php/api/v2/claim/expenses/types',
//         body: {ids: [expenseTypeId]},
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).its('body')
// });

Cypress.Commands.add('addExpenseToClaim', (claimRequestId: number, addExpenseToClaimPayload: AddExpensesPayload) => {
    return cy.api({
        method: 'POST',
        url: `/web/index.php/api/v2/claim/requests/${claimRequestId}/expenses`,
        body: addExpenseToClaimPayload.AddExpenses,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('submitClaim', (claimRequestId: number, submitClaimPayload: SubmitClaimPayload) => {
    return cy.api({
        method: 'PUT',
        url: `/web/index.php/api/v2/claim/requests/${claimRequestId}/action`,
        body: submitClaimPayload.SubmitClaim,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('logout', logout)

Cypress.Commands.add('login', login)

Cypress.Commands.add('addNewEmployee', addNewEmployee)

Cypress.Commands.add('addNewUser', addNewUser)

Cypress.Commands.add('deleteEmployee', deleteEmployee)
