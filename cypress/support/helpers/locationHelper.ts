import LocationInit from "../init/locationInit"
import { CreateLocationResponse } from "../response/locationResponse";

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    location: `${baseUrl}/web/index.php/api/v2/admin/locations`
}

export default class addLocation{
    static addNewLocationViaAPI(){
        return cy.addNewLocation(URLs.location, LocationInit.initLocation()).then((response: CreateLocationResponse) => {
            return {
                id: response.data.id,
                name: response.data.name
              };
        });
    }
}
