import JobTitleInit from "../init/jobTitleInit"
import { CreateJobTitleResponse } from "../response/jobTitleResponse";

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    jobTitle: `${baseUrl}/web/index.php/api/v2/admin/job-titles`
}

export default class addJobTitle{
    static addNewJobTitleViaAPI(){
        cy.addNewJobTitle(URLs.jobTitle, JobTitleInit.initJobTitle()).then((response: CreateJobTitleResponse) => {
            const jobId = response.data.id;
            cy.log(`Job ID: ${jobId}`);
        });
    }
}
