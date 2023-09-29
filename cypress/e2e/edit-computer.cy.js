import computers from '../fixtures/computers.json';
import computerUpdates from '../fixtures/computers-updates.json';

describe('Editing computers', () => {
    context('Updating a computer with valid data', () => {
        beforeEach(() => {
            cy.visit('/computers');
        });

        computers.forEach(({ name }, index) => {
            it(`should be able to update ${name}`, () => {
                const updates = computerUpdates[index];

                cy.filterByName(name);
                cy.goToFirstProduct();
                cy.saveComputerDetails(updates);

                cy.getNotification().should('eq', `Done! Computer ${updates.name} has been updated`);

                cy.filterByName(updates.name);
                cy.getProductsOnPage().then(products => {
                    const product = products.find(product => product.name === updates.name);
                    expect(product).to.deep.equal(updates);
                });
            });
        });
    });
});
