import { CreateEventsPayload } from "../payload/eventsPayload"
import GenaricHelper from "../helpers/genaricHelper";

export default class EventsInit {
    static initEvents(): CreateEventsPayload {
        let createEventsPayload: CreateEventsPayload = {
            AddEvent: {
                name: "Employee Training Workshop",
                description: "Join us for a comprehensive training workshop aimed at enhancing your skills and knowledge. This workshop will cover various topics to help you excel in your role.",
                status: true
            }
        }
        return createEventsPayload
    }
}

