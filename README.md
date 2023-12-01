# 🤖 Automation-E2E-Final-Task

## Test case: Generate an Employee report with search criteria by (Personal : First name/ Job: Job title/ Salary:Amount)

**PreRequisites:**

1. Create 1 Location.
2. Create 1 Job Title.
3. Create 3 Employees and associate them with the created location and job title.
4. Add First Name, Job Title, and Salary Amount to each employee.

 **Steps:**
 
1. Go to the PIM section.
2. Access Reports and create a new one.
3. Select the Search Criteria (Job Title, Location).
4. Choose the Display Fields (Personal: First Name / Job: Job Title / Salary: Amount).
5. Ensure the header for these fields is displayed.
6. Save the report.

**Expected:***

1. Verify the Report Name.
2. Confirm the correctness of the headers.
3. Validate the values in the table rows.
4. Verify the quantity of rows in the report.

______________________________________________________________________________

## Write (2) Manual Test Cases in details and Implement Cypress Tests for (2) Claims Request Approval and (2) Rejection flow, which validate the rows in Claims table for approved and rejected claims, including status, date, and the amount for each row.

| ID | Title          | Description                                         | Given                                                                                                                    | When                                                                                                                     | Then                             |
|----|----------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| 1  | Accept Claim   | The admin should be able to approve a claim         | Given the admin logs in to the system, And creates an Employee with login details, And creates an event, And creates an expense type, And logs in with the created employee, And creates a new claim with the created event and expense type, And logs in to the system as admin. | When the admin goes to the Claim page, Then to Employee Claims, And clicks the "View Details" button, And presses the "Approve" button | Then the status of the claim should be "Paid" |
| 2  | Reject Claim   | The admin should be able to reject a claim         | Given the admin logs in to the system, And creates an Employee with login details, And creates an event, And creates an expense type, And logs in with the created employee, And creates a new claim with the created event and expense type, And logs in to the system as admin. | When the admin goes to the Claim page, Then to Employee Claims, And clicks the "View Details" button, And presses the "Reject" button | Then the status of the claim should be "Rejected" |


