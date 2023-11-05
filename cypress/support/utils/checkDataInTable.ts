export const checkDataInTable = (tableSelector: string, rowsData: any[]) => {
    cy.get(tableSelector).find('.rgRow').should('have.length.gt', 0).each(($row, rowIndex) => {
        if (rowIndex < rowsData.length) {
            const rowData = rowsData[rowIndex];
            let allDataFound = true;

            cy.get($row).find('.rgCell').each(($cell, cellIndex) => {
                cy.wrap($cell).invoke('text').then((cellText) => {
                    const cellTextLower = cellText.trim().toLowerCase();
                    const expectedData = rowData[cellIndex] ? rowData[cellIndex].toString().toLowerCase().trim() : '';

                    if (!cellTextLower.includes(expectedData)) {
                        allDataFound = false;
                    }
                });
            });
            cy.wrap($row).then(() => {
                if (allDataFound) {
                    cy.log(`All data found in row ${rowIndex + 1}`);
                } else {
                    cy.log(`Data not found in row ${rowIndex + 1}`);
                }
            });
        }
    });
};
