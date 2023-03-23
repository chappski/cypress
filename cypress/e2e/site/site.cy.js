///<reference types="cypress" />
const web = 'https://hammerhead-app-wwgsk.ondigitalocean.app/tool/MyEntities'

describe('Open the site', () => {
  beforeEach(() => {
    cy.visit('https://hammerhead-app-wwgsk.ondigitalocean.app/tool/MyEntities')
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