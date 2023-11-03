import JobTitleInit from "../init/jobTitleInit"

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    jobTitle: `${baseUrl}/web/index.php/api/v2/admin/job-titles`
}

export default class addJobTitle{
    static addNewJobTitleViaAPI(){
        cy.addNewJobTitle(URLs.jobTitle, JobTitleInit.initJobTitle())
    }
}
