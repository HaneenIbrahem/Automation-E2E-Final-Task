import addLocation from "../../support/helpers/locationHelper";
import addJobTitle from "../../support/helpers/jobTitleHelper";
import addJobDetails from "../../support/helpers/jobDetailsHelper";
import addSalary from "../../support/helpers/salaryHelper";
import ReportPage from "../../support/page-objects/rebortPage";

import { checkDataInTable } from "../../support/utils/checkDataInTable";

const reportObj: ReportPage = new ReportPage();

let empNumbers: number[] = [];

let jobTitleId: number
let jobTitle: string

let locationId: number
let locationName: string
describe("TimeSheet/Reports", () => {


  beforeEach(() => {
    cy.fixture('employee').as('eData')
    cy.login("Admin", "admin123")

    cy.get('@eData').then((dataEmp: any) => {
      addLocation.addNewLocationViaAPI().then(locationInfo => {
        locationId = locationInfo.id;
        locationName = locationInfo.name
        addJobTitle.addNewJobTitleViaAPI().then(jobTitleInfo => {
          jobTitleId = jobTitleInfo.id;
          jobTitle = jobTitleInfo.title;
          for (let i = 1; i <= 3; i++) {
            let empNumber: number;
            cy.addNewEmployee(`${dataEmp.addEmployee.firstName}${i}`, `${dataEmp.addEmployee.middleName}${i}`, `${dataEmp.addEmployee.lastName}${i}`, dataEmp.addEmployee.empPicture, dataEmp.addEmployee.employeeId).then((response) => {
              empNumber = response.body.data.empNumber
              empNumbers.push(empNumber)
            }).then(() => {
              cy.addNewUser(`${dataEmp.addUser.username}${i}`, dataEmp.addUser.password, dataEmp.addUser.status, dataEmp.addUser.userRoleId, empNumber)
            })
              .then(() => {
                addJobDetails.addNewJobDetailsViaAPI(empNumber, jobTitleId, locationId)
                addSalary.addNewSalaryViaAPI(empNumber)
              })
          }
        })
      })
    })

  })

  it("should generate an Employee report with search criteria", () => {
    reportObj.navigateToReportPage();
    // reportObj.addNewReport('Account Assistant', 'Texas R&D')
    reportObj.addNewReport(jobTitle, locationName)
    reportObj.reportAssertion()
    checkDataInTable('.oxd-report-table', [
      ['Haneen1', jobTitle, '50000'],
      ['Haneen2', jobTitle, '50000'],
      ['Haneen3', jobTitle, '50000']])
    
  })

  afterEach(() => {
    empNumbers.forEach((empNumber) => {
      cy.deleteEmployee(empNumber); // Pass the empNumber to deleteEmployee function
    });
    cy.deleteLocation(locationId)
    cy.deleteJobTitle(jobTitleId)
    reportObj.deleteReport()

  })

});