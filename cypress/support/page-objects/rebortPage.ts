import { should } from "chai";

export default class ReportPage{
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        ReportPage: () => cy.get('.oxd-topbar-body-nav-tab-item')


    }
    navigateToReportPage(){
        this.elements.MainMenuItems().contains('PIM').click()
        this.elements.ReportPage().parents().eq(0).click()
    }
    addNewReport(){
        cy.get('.oxd-button .oxd-button--medium .oxd-button--secondary').click()
    }
    
   
}