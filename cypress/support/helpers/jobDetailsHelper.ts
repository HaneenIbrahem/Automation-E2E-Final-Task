import JobDetailsInit from '../init/jobDetailsInit'



export default class addJobDetails{
    static addNewJobDetailsViaAPI(empNumber: number, jobTitleId: number, locationId: number){
        return cy.addNewJobDetails(empNumber, JobDetailsInit.initJobDetails(jobTitleId, locationId))
    }
}
