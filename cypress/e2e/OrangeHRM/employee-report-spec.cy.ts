import addLocation from "../../support/helpers/locationHelper";
describe("TimeSheet/Reports", () => {

  beforeEach(() => {
    cy.login("Admin", "admin123")
  })


  it("should generate an Employee report with search criteria", () => {
    addLocation.addNewLocationViaAPI()
  })

});