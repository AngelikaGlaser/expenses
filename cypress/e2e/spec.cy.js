describe('Expenses', () => {
  it('should allow a user to add a new expense', () => {
    cy.visit('/expenses')

    // Click the "Add" button to open the add expense modal
    cy.get('button').contains('Add').click()

    // Fill out the expense form
    cy.get('input[name="description"]').type('Groceries')
    cy.get('input[name="amount"]').type('50.00')
    cy.get('input[name="date"]').type('2022-03-19')
    cy.get('button[type="submit"]').click()

    // Confirm that the new expense is displayed on the page
    cy.contains('Groceries').should('exist')
    cy.contains('$50.00').should('exist')
    cy.contains('03/19/2022').should('exist')
  })
})