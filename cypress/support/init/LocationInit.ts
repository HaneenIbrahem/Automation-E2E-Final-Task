import { CreateLocationPayload } from "../payload/locationPayload"
import GenaricHelper from "../helpers/genericHelper";

export default class LocationInit {
    static initLocation(): CreateLocationPayload {
        let createLocationPayload: CreateLocationPayload = {
            location: {
                address: "Beit Lid",
                city: "Tulkarm",
                countryCode: "PS",
                fax: "",
                name: "Company ABC",
                note: "",
                phone: "2656201",
                province: "",
                zipCode: ""
            }
        }
        return createLocationPayload
    }
}