///<reference types="cypress" />
const web = 'http://127.0.0.1:8000'

describe('Open the site', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('[data-toggle=modal]').click()
    cy.get('#id_email').type('asdsad@gmail.com')
    cy.get('#id_username').type('asdsad@gmail.com')
    cy.get('#id_password').type('asd')
    cy.get('#submitbtn').click()
  })

  it('Open tool home page', () => {
    cy.get('#toolnavbtn').click()
    cy.get('.col-md-10 > :nth-child(1) > .btn-group > .btn-primary').should('have.text', 'Production Planing Tool')
  })

  it('Open simulation home page', () => {
    cy.get('#simulationnavbtn').click()
    cy.get('.col-md-10 > :nth-child(1) > .btn-group > .btn-primary').should('have.text', 'Simulation Tool')
  })
})