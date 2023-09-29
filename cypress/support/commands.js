// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('deleteComputers', name => {
    cy.visit('/computers');
    cy.filterByName(name);
    cy.getProductCount().then(count => {
        if (count === 0) {
            return;
        }

        while (count !== 0) {
            cy.goToFirstProduct();
            cy.contains('Delete').click();
            cy.filterByName(name);
            count--;
        }
    });
});

Cypress.Commands.add('saveComputerDetails', ({ name, introduced, discontinued, company }) => {
    cy.get('#name').clear().type(name);

    introduced ? cy.get('#introduced').clear().type(introduced) : cy.get('#introduced').clear();
    discontinued ? cy.get('#discontinued').clear().type(discontinued) : cy.get('#discontinued').clear();

    cy.get('#company').select(company);

    cy.get('.btn.primary').click();
});
