import { should } from "chai";

export default class ReportPage {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        Header: () => cy.get('.oxd-topbar-body-nav-tab-item'),
        AddBTN: () => cy.get('.oxd-button'),

        DropdownMenu: () => cy.get('.oxd-dropdown-menu'),
        EventName: () => cy.get('.oxd-select-text-input'),
        SearchBTN: () => cy.get('button[type="submit"]'),
        ListDropped: () => cy.get('.oxd-select-dropdown'),

        ViewDetailsBTN: () => cy.get('.oxd-table-cell-action-space'),
        approveButton: () => cy.get('.oxd-button--secondary'),
        rejectBTN: () => cy.get('.oxd-button--danger'),
    }
    navigateToClaimPage() {
        this.elements.MainMenuItems().contains('Claim').click({force: true})
        this.elements.Header().eq(3).click({force: true})
    }
    searchClaim(eventName: string) {
        cy.visit('/web/index.php/claim/viewAssignClaim')
        this.elements.EventName().first().click({force: true})
        this.elements.ListDropped().contains(eventName).click({force: true})
        this.elements.SearchBTN().click({force: true})
    }
    // selectClaimFromTable(eventName: string){
    //     cy.get('.oxd-table-row.oxd-table-row--with-border') 
    //     .find(`:contains(${eventName})`) 
    //     .should('exist') 
    //     .then(($element) => { 
    //         // Navigate to the parent container and find the button element inside it 
    //         cy.wrap($element) 
    //             .parent('.oxd-table-row') 
    //             .find('.oxd-table-cell-actions') 
    //             .click({force: true}); 
    //     });
    // }
    approveClaim(eventName: string) {
        for (let i = 0; i < 2; i++) {
            cy.visit('/web/index.php/claim/viewAssignClaim')
            this.elements.EventName().first().click({force: true})
            this.elements.ListDropped().contains(eventName).click({force: true})
            this.elements.SearchBTN().click({force: true})
            this.elements.ViewDetailsBTN().eq(i).click({force: true})
            this.elements.approveButton().click({ force: true })

        }
    }
    rejectClaim(eventName: string) {
        for (let i = 0; i < 2; i++) {
            cy.visit('/web/index.php/claim/viewAssignClaim')
            this.elements.EventName().first().click({force: true})
            this.elements.ListDropped().contains(eventName).click({force: true})
            this.elements.SearchBTN().click({force: true})
            this.elements.ViewDetailsBTN().eq(i).click({force: true})
            this.elements.rejectBTN().click({ force: true })

        }
    }
    assertion(eventName: string, status: string) {
        cy.visit('/web/index.php/claim/viewAssignClaim')
        this.elements.EventName().first().click({force: true})
        this.elements.ListDropped().contains(eventName).click({force: true})
        this.elements.SearchBTN().click({force: true})
        
        cy.get('.oxd-table-card').eq(0).should('contain', `${status}`);
        cy.get('.oxd-table-card').eq(1).should('contain', `${status}`);      
    }
}