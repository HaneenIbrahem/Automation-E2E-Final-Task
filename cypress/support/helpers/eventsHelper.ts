import EventsInit from '../init/eventsInit'
import { CreateEventsResponse } from '../response/eventsResponse';

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    events: `${baseUrl}/web/index.php/api/v2/claim/events`
}

export default class Event{
    static addNewEventViaAPI(){
        return cy.addNewEvent(URLs.events, EventsInit.initEvents()).then((response: CreateEventsResponse) => {
            return {
                id: response.data.id,
                name: response.data.name
              }
            })
    }
    static deleteEventViaAPI(eventId: number){
        return cy.deleteEvent(eventId)
    }
}