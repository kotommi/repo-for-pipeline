describe('Message app', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Welcome')
  })
  it('adding a new message', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Messages').click()
    cy.contains('Messages')
    const msg = 'New message'
    cy.get('#message').type(msg)
    cy.contains('Send!').click()
    cy.contains(msg)
    cy.contains('delete').click()
  })
  it('deleting a message', () => {
    cy.visit('http://localhost:8000/messages')
    const msg = 'to be deleted'
    cy.get('#message').type(msg)
    cy.contains('Send!').click()
    cy.contains(msg)
    cy.contains('delete').click()
    cy.get('ul').within(() => {
      cy.get('li').should('not.have', msg)
    })
  })
})
