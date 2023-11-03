import addLocation from "../../support/helpers/locationHelper";
describe("TimeSheet/Reports", () => {

  beforeEach(() => {
    cy.visit("/web/index.php/auth/login")
    // cy.get(".oxd-input").parents().eq(0).type("Admin")
    // cy.get(".oxd-input").parents().eq(1).type("admin123")
    cy.get('[placeholder = "Username"]').type("Admin");
    cy.get('[placeholder = "Password"]').type("admin123");
    cy.get('button').click();
  })


  it("should generate an Employee report with search criteria", () => {
    addLocation.addNewLocationViaAPI()
  })

});