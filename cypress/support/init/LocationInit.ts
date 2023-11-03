import { CreateLocationPayload } from "../payload/locationPayload"
import GenaricHelper from "../helpers/genericHelper";

export default class LocationInit {
    static initLocation(): CreateLocationPayload {
        let createLocationPayload: CreateLocationPayload = {
            location: {
                address: "",
                city: "",
                countryCode: "PS",
                fax: "",
                name: "string",
                note: "",
                phone: "",
                province: "",
                zipCode: ""
            }
        }
        return createLocationPayload
    }
}