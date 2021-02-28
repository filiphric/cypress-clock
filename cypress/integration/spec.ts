it('move timer', () => {

  const now = new Date()

  cy
    .visit('index.html')

  cy
    .clock(now)

  cy
    .tick(10000)

  cy.clock().invoke('restore')

});
