import LocationInit from "../init/locationInit"

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    location: `${baseUrl}/web/index.php/api/v2/admin/locations`
}

export default class addLocation{
    static addNewLocationViaAPI(){
        cy.addNewLocation(URLs.location, LocationInit.initLocation())
    }
}
