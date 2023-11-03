// import { CreateLocationPayload } from "../payload/locationPayload";
// import { CreateLocationResponse } from "../response/locationResponse";

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             // addNewUser: typeof addNewUser
//             addNewLocation: (requestURL: string, employeePayload: CreateLocationPayload) => Chainable<CreateLocationResponse>
//         }
//     }

// }

// Cypress.Commands.add('addNewLocation', (requestURL: string, userPayload: CreateLocationPayload) => {
//     return cy.request({
//         method: 'POST',
//         url: requestURL,
//         body: userPayload,
//         headers: {
//             'Content-Type': 'application/json'
//         } // Use 'body' instead of 'payload'
//     }).its('body')
// });

