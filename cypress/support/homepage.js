import computer from '../models/computer';

Cypress.Commands.add('getProductCount', () => {
    cy.get('#main > h1')
        .invoke('text')
        .then(text => {
            const count = text.split(' ')[0];
            return count === 'No' ? 0 : parseInt(count);
        });
});

Cypress.Commands.add('filterByName', name => {
    cy.get('#searchbox').type(name);
    cy.get('#searchsubmit').click();
});

Cypress.Commands.add('getProductsOnPage', () => {
    const computers = [];

    cy.get('.computers > tbody > tr')
        .each(product => {
            const computerAttr = [];

            cy.wrap(product)
                .find('td')
                .each(productAttr => {
                    computerAttr.push(productAttr.text().trim() === '-' ? '' : productAttr.text().trim());
                })
                .then(() => {
                    computers.push(new computer(...computerAttr));
                });
        })
        .then(() => {
            return computers;
        });
});

Cypress.Commands.add('goToFirstProduct', () => {
    cy.get('.computers>tbody>tr a').first().click();
});

Cypress.Commands.add('getNotification', () => {
    return cy.get('.alert-message').invoke('text').invoke('trim');
});
