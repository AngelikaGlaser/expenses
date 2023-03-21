describe('Expense list', () => {
  it('should display the expense list', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.expense-item').should('have.length', 2)
    cy.contains('New book').should('be.visible')
    cy.contains('30.99').should('be.visible')
    cy.contains('2023').should('be.visible')
  })
})

describe('Expense list', () => {
  it('Add new Expense and cancel buttons should work', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Add Expense').click()
    cy.contains('Cancel').click()
    cy.contains('Add Expense').click()
  })
})

describe('Expense list', () => {
  it('should have a form, new expense should be in list', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Add Expense').click()

    cy.contains('Title').next('input').type('New bag')
    cy.contains('Amount').next('input').type('199.99')
    cy.contains('Date').next('input').type('2023-10-10')

    cy.contains('Add Expense').click()
    cy.get('.expense-item').should('have.length', 3)
    cy.contains('New bag')
    cy.contains('199.99')
    cy.contains('October')
    cy.contains('10')
    cy.contains('2023')
  })
})

describe('Expense list', () => {
  it('the filter should filter by year', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Filter by year').siblings('select').select('2024')

    cy.get('.expense-item').should('have.length', 1)
    cy.contains('New bag').should('be.visible')
    cy.contains('199.99').should('be.visible')
    cy.contains('2024').should('be.visible')
    cy.contains('January').should('be.visible')
    cy.contains('10').should('be.visible')

    cy.contains('Filter by year').siblings('select').select('2025')
    cy.contains('No expenses found').should('be.visible')
  })
})