import { should } from "chai";

export default class ReportPage {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        ReportPage: () => cy.get('.oxd-topbar-body-nav-tab-item'),
        AddBTN: () => cy.get('.oxd-button'),

        ReportName: () => cy.get('[placeholder = "Type here ..."]'),
        DropDown: () => cy.get('.oxd-select-text-input'),
        ListDropped: () => cy.get('.oxd-select-dropdown'),
        PlusIcon: () => cy.get('.oxd-icon.bi-plus'),
        HeaderSwitch: () => cy.get('.oxd-switch-input'),
        SaveBTN: () => cy.get('.oxd-button--secondary'),

        ReportNameHeader: () => cy.get('h6.oxd-text.oxd-text--h6'),

        TableHeader: () => cy.get('.group-rgRow .header-content'),

        SearchField: () => cy.get('.oxd-autocomplete-text-input'),
        SearchBTN: () => cy.get('button[type="submit"]'),
        DeleteIcons: () => cy.get('i.oxd-icon.bi-trash'),
        DeleteBTN: () => cy.get('.oxd-button--label-danger')
    }
    navigateToReportPage() {
        this.elements.MainMenuItems().contains('PIM').click()
        this.elements.ReportPage().parents().eq(0).click()
    }
    addNewReport(jobName: string, location: string) {
        this.elements.AddBTN().parents().eq(0).contains('Add').click()
        this.elements.ReportName().type('Employee Benefits Summary - 2023')

        // Selection Criteria
        this.elements.DropDown().eq(0).click()  //Selection Criteria Drop Down (Job Title)
        this.elements.ListDropped().contains('Job Title').click()
        this.elements.PlusIcon().eq(0).click()
        this.elements.DropDown().eq(2).click()
        this.elements.ListDropped().contains(jobName).click()

        this.elements.DropDown().eq(0).click()  //Selection Criteria Drop Down (Location)
        this.elements.ListDropped().contains('Location').click()
        this.elements.PlusIcon().eq(0).click()
        this.elements.DropDown().eq(3).click()
        this.elements.ListDropped().contains(location).click()

        // Display Fields
        this.elements.DropDown().eq(4).click() //Select Display Field Group
        this.elements.ListDropped().contains('Personal').click()
        this.elements.DropDown().eq(5).click() // Select Display Field
        this.elements.ListDropped().contains('Employee First Name').click()
        this.elements.PlusIcon().eq(1).click()

        this.elements.DropDown().eq(4).click()
        this.elements.ListDropped().contains("Job").click()
        this.elements.DropDown().eq(5).click()
        this.elements.ListDropped().contains("Job Title").click()
        this.elements.PlusIcon().eq(1).click()

        this.elements.DropDown().eq(4).click() //Select Display Field Group
        this.elements.ListDropped().contains('Salary').click()
        this.elements.DropDown().eq(5).click() // Select Display Field
        this.elements.ListDropped().contains('Amount').click()
        this.elements.PlusIcon().eq(1).click()

        this.elements.HeaderSwitch().eq(0).click()
        this.elements.HeaderSwitch().eq(1).click()
        this.elements.HeaderSwitch().eq(2).click()

        this.elements.SaveBTN().click()
    }
    reportAssertion() {
        this.elements.ReportNameHeader().should('contain', 'Employee Benefits Summary - 2023')
        this.elements.TableHeader().should('have.length', 3)
        this.elements.TableHeader().should('contain.text', 'Personal')
        this.elements.TableHeader().should('contain.text', 'Job')
        this.elements.TableHeader().should('contain.text', 'Salary')
    }
    deleteReport() {
        cy.visit('/web/index.php/pim/viewDefinedPredefinedReports')
        this.elements.SearchField().type('Employee Benefits Summary - 2023')
        cy.contains('.oxd-autocomplete-option', 'Searching....').should('exist');
        cy.contains('.oxd-autocomplete-option', 'Searching....').should('not.exist');
        cy.get('.oxd-autocomplete-option').should('be.visible').click({ force: true })
        // cy.contains('Employee Benefits Summary - 2023').click()
        this.elements.SearchBTN().click({ force: true })
        this.elements.DeleteIcons().click()
        this.elements.DeleteBTN().click()
    }

}