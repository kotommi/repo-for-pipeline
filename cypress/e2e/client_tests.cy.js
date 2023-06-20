describe('Message app', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
  })
})
