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
import { CreateJobDetailsPayload } from "./payload/jobDetailspayload";
import { CreateJobDetailsResponse } from "./response/jobDetailsResponse";
import { CreateSalaryPayload } from "./payload/salaryPayload";
import { CreateSalaryResponse } from "./response/salaryResponse";
import LoginPage from '../support/page-objects/loginPage'
import cypress from "cypress";

const loginObj: LoginPage = new LoginPage();
declare global {
    namespace Cypress {
        interface Chainable {
            // addNewUser: typeof addNewUser
            addNewLocation: (requestURL: string, locationPayload: CreateLocationPayload) => Chainable<CreateLocationResponse>
            deleteLocation: typeof deleteLocation
            addNewJobTitle: (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => Chainable<CreateJobTitleResponse>
            deleteJobTitle: typeof deleteJobTitle
            addNewJobDetails: (empNumber: number, jobDetailsPayload: CreateJobDetailsPayload) => Chainable<CreateJobDetailsResponse>
            addNewSalary: (empNumber: number, SalaryPayload: CreateSalaryPayload) => Chainable<CreateSalaryResponse>
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

Cypress.Commands.add('addNewSalary', (empNumber: number, salaryPayload: CreateSalaryPayload) => {
    return cy.request({
        method: 'POST',
        url: `/web/index.php/api/v2/pim/employees/${empNumber}/salary-components`,
        body: salaryPayload.Salary,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('addNewJobDetails', (empNumber: number,jobDetailsPayload: CreateJobDetailsPayload) => {
    return cy.request({
        method: 'PUT',
        url: `/web/index.php/api/v2/pim/employees/${empNumber}/job-details`,
        body: jobDetailsPayload.JobDetails,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

Cypress.Commands.add('addNewLocation', (requestURL: string, locationPayload: CreateLocationPayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: locationPayload.location,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')
});

function deleteLocation(locationId: number){
    cy.request({
        method: 'DELETE',
        url: '/web/index.php/api/v2/admin/locations',
        body: {
            ids: [locationId]
        }
    })
}

Cypress.Commands.add('addNewJobTitle', (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => {
    return cy.request({
        method: 'POST',
        url: requestURL,
        body: jobTitlePayload.JobTitle,
    }).its('body')
});

function deleteJobTitle(jobTitleId: number){
    cy.request({
        method: 'DELETE',
        url: '/web/index.php/api/v2/admin/job-titles',
        body: {
            ids: [jobTitleId]
        }
    })
}

Cypress.Commands.add('logout', logout)

Cypress.Commands.add('login', login)

Cypress.Commands.add('addNewEmployee', addNewEmployee)

Cypress.Commands.add('addNewUser', addNewUser)

Cypress.Commands.add('deleteEmployee', deleteEmployee)

Cypress.Commands.add('deleteLocation', deleteLocation)

Cypress.Commands.add('deleteJobTitle', deleteJobTitle)

