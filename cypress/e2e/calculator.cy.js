describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  //1. Do the number buttons update the display of the running total?
  it('should update the display of the running total?', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })

  //2. Do the arithmetical operations update the display with the result of the operation?
  //E.g. does `2 + 2 -` update the display to 4

  it('should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  //3. Can multiple operations be chained together?
 //E.g. does `3 + 1 - 2` == 2

 it('should have multiple operations be chained together', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number6').click();
  cy.get('#operator-subtract').click();
  cy.get('#number3').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '5')
})

//4. Is the output as expected for positive numbers

it('should be as expected for positive numbers', () => {
  cy.get('#number0').click();
  cy.get('#operator_add').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '5')
})
//5. Is the output as expected for negative numbers

it('should be as expected for negative numbers', () => {
  cy.get('#number2').click();
  cy.get('#operator-subtract').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '-3')
})
//6. Is the output as expected for decimal numbers

it('should be as expected for decimal numbers', () => {
  cy.get('#number2').click();
  cy.get('#decimal').click();
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number5').click();
  cy.get('#decimal').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '7.4')
})

//7. Is the output as expected for very large numbers

it('should update the display with the result of the operation', () => {
  cy.get('#number2').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator_add').click();
  cy.get('#number2').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '400000000')
})
//8. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).


it('should display error when dividing by 0', () => {
  cy.get('#number2').click();
  cy.get('#operator-divide').click();
  cy.get('#number0').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', 'error')
})
})