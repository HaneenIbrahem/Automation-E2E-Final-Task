import { should } from "chai";

export default class ReportPage{
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        ReportPage: () => cy.get('.oxd-topbar-body-nav-tab-item')


    }
    navigateToReportPage(){
        this.elements.MainMenuItems().contains('PIM').click()
        this.elements.ReportPage().parents().eq(4).click()
    }
    
   
}