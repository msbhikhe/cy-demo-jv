describe('Deleting a computer', () => {
    const computer = {
        name: 'MXCOM 3000',
        introduced: '',
        discontinued: '2020-01-01',
        company: 'ASUS',
    };

    before(() => {
        cy.visit('/computers/new');
        cy.saveComputerDetails(computer);
    });

    it('should be able to delete a computer', () => {
        cy.filterByName(computer.name);
        cy.goToFirstProduct();
        cy.contains('Delete').click();

        cy.getNotification().should('eq', `Done! Computer has been deleted`);
        cy.filterByName(computer.name);
        cy.getProductCount().should('eq', 0);
    });
});
