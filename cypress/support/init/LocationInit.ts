import { CreateLocationPayload } from "../payload/locationPayload"
import GenaricHelper from "../helpers/genericHelper";

export default class LocationInit {
    static initLocation(): CreateLocationPayload {
        let createLocationPayload: CreateLocationPayload = {
            location: {
                address: "15 Al-Quds Street",
                city: "Bethlehem",
                countryCode: "PS",
                fax: "N/A",
                name: "Bethlehem Branch",
                note: "Our regional branch in Bethlehem",
                phone: "+970 59 097 3299",
                province: "West Bank",
                zipCode: "45678"
            }
        }
        return createLocationPayload
    }
}