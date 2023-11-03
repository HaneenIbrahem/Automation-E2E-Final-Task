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
import { CreateLocationResponse } from "../support/response/locationResponse"
declare  global {
    namespace Cypress{
      interface Chainable{
          // addNewUser: typeof addNewUser
          addNewLocation:(requestURL:string,employeePayload:CreateLocationPayload)=>Chainable<CreateLocationResponse>
      }
  }
  
  }
  
  Cypress.Commands.add('addNewLocation',(requestURL:string, userPayload:CreateLocationPayload) => {
      return cy.api({
        method: 'POST',
        url: requestURL,
        body: userPayload,
        headers:{
          'Content-Type':'application/json'
        } // Use 'body' instead of 'payload'
      }).its('body')
    });