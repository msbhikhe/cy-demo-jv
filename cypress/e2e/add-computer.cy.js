import computers from '../fixtures/computers.json';

describe('Adding computers', () => {
    context('Adding a computer with valid data', () => {
        before(() => {
            cy.deleteComputers('MCOMP');
        });

        beforeEach(() => {
            cy.visit('/computers/new');
        });

        computers.forEach(computer => {
            it(`should be able to create ${computer.name}`, () => {
                cy.saveComputerDetails(computer);
                cy.getNotification().should('eq', `Done !  Computer ${computer.name} has been created`);

                cy.filterByName(computer.name);
                cy.getProductsOnPage().then(products => {
                    const product = products.find(product => product.name === computer.name);
                    expect(product).to.deep.equal(computer);
                });
            });
        });
    });
});
