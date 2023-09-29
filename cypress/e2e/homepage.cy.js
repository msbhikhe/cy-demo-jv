describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/computers');
    });

    context('Add button', () => {
        it('should have "Add a new computer" as text content', () => {
            cy.get('#add').should('have.text', 'Add a new computer');
        });

        it('should have href pointing to add computer page', () => {
            cy.get('#add').invoke('attr', 'href').should('eq', '/computers/new');
        });
    });
});
