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
    return cy.request({
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
    cy.request({ 
        method: 'DELETE',
        url: `/web/index.php/api/v2/pim/employees`,
        body: {
            ids: [empNumber]
        }
    })
}

function addNewUser(username: string, password: string, status: boolean, userRoleId: number, empNumber: number) {
    return cy.request({
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

Cypress.Commands.add('logout', logout)

Cypress.Commands.add('login', login)

Cypress.Commands.add('addNewEmployee', addNewEmployee)

Cypress.Commands.add('addNewUser', addNewUser)

Cypress.Commands.add('deleteEmployee', deleteEmployee)