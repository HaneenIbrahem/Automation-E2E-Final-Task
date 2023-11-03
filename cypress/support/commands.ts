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

import { CreateLocationPayload } from "../support/payload/locationPayload";
import { CreateLocationResponse } from "../support/response/locationResponse";
import { CreateJobTitlePayload } from "./payload/jobTitlePayload";
import { CreateJobTitleResponse } from "./response/jobTitleResponse";
import LoginPage from '../support/page-objects/loginPage'

const loginObj: LoginPage = new LoginPage();
declare global {
    namespace Cypress {
        interface Chainable {
            // addNewUser: typeof addNewUser
            addNewLocation: (requestURL: string, locationPayload: CreateLocationPayload) => Chainable<CreateLocationResponse>
            addNewJobTitle: (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => Chainable<CreateJobTitleResponse>
            logout: typeof logout
            login: typeof login
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

Cypress.Commands.add('addNewLocation', (requestURL: string, locationPayload: CreateLocationPayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: locationPayload.location,
    }).its('body')
});

Cypress.Commands.add('addNewJobTitle', (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: jobTitlePayload.JobTitle,
    }).its('body')
});

Cypress.Commands.add('logout', logout)

Cypress.Commands.add('login', login)
