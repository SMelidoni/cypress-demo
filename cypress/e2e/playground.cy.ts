describe('Cypress Playground', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the Playground component', () => {
    cy.get('[data-cy=playground-container]').should('be.visible');
    cy.get('h1').contains('Cypress Playground');
  });

  describe('Text Input Field', () => {
    it('should type into the input and add an item to the list', () => {
      const text = 'Sample Item';
      cy.get('[data-cy=text-input]').type(text);
      cy.get('[data-cy=submit-button]').click();
      cy.get('[data-cy=items-list]').contains(text);
    });
  });

  describe('List of Items', () => {
    it('should add multiple items to the list', () => {
      const items = ['First', 'Second', 'Third'];
      items.forEach((item) => {
        cy.get('[data-cy=text-input]').type(item);
        cy.get('[data-cy=submit-button]').click();
        cy.get('[data-cy=items-list]').contains(item);
      });
    });
  });

  describe('Toggle Content', () => {
    it('should toggle hidden content', () => {
      cy.log('Clicking toggle button to show content');
      cy.get('[data-cy=toggle-button]').click();
      cy.log('Checking toggle content visibility');
      cy.get('[data-cy=toggle-content]').should('be.visible');

      cy.log('Clicking toggle button to hide content');
      cy.get('[data-cy=toggle-button]').click();
      cy.log('Checking toggle content is hidden');
      cy.get('[data-cy=toggle-content]').should('not.exist');
    });
  });

  describe('External Link', () => {
    it('should have a link pointing to example.com', () => {
      cy.get('[data-cy=external-link]')
        .should('have.attr', 'href', 'https://example.com')
        .should('have.attr', 'target', '_blank');
    });
  });

  describe('Checkbox', () => {
    it('should toggle checkbox state', () => {
      cy.get('[data-cy=checkbox-input]').should('not.be.checked');
      cy.get('[data-cy=checkbox-input]').check().should('be.checked');
      cy.get('[data-cy=checkbox-input]').uncheck().should('not.be.checked');
    });
  });

  describe('Radio Choices', () => {
    it('should select the respective radio buttons', () => {
      cy.get('[data-cy=radio-A]').check().should('be.checked');
      cy.get('[data-cy=radio-B]').should('not.be.checked');

      cy.get('[data-cy=radio-B]').check().should('be.checked');
      cy.get('[data-cy=radio-A]').should('not.be.checked');
    });
  });
});
