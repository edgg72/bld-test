
describe('Testing the bold page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });

  it('renders the component', () => {
    const cardTitle = cy.get('div.sales-card__header');
    cardTitle.should('exist');
    cy.contains('Total de ventas de septiembre').should('exist');
  });

  it('click on a range and check the grid for the amount of results', () => {
    const range = cy.get('.button-grid-container__range--button').first().click();
    range.should('have.class', 'active');
    const rowsInGrid = cy.get('.grid-container__item').contains('Cobro');
    rowsInGrid.should('have.length', 1);

    const range2 = cy.get('.button-grid-container__range--button').eq(1).click();
    range.should('have.class', 'active');
    const rowsInGrid2 = cy.get('.grid-container__item:contains("Cobro")');
    rowsInGrid2.should('have.length', 2);
  });

  it('testing the filter modal', () => {
    const filterButton = cy.get('div.filter');
    filterButton.click();
    cy.get('.modal__options form div input').first().click();
    cy.get('.modal__options button').click();
    cy.get('.grid-container__item:contains("Cobro")').should('have.length', 3)
  })
});