import {userData, web} from "../../variables/settings";
import {entititesData} from "../../variables/testData";
import {CreateUser} from "../testSteps/testMethods";
///<reference types="cypress" />

describe('Tool Create Entities', () => {
    beforeEach(() => {
      CreateUser(web, userData)
    })
   
   it('Tool navbar', () => {
        const navbarbuttons = ['tool', 'MyOperations', 'MyProcesses', 'MyEntities']
         cy.get('.btn-group').children().should('length', 4).each(($el) => {
            var href = $el.attr('href');
            cy.visit(web + href)
            if (href != '/tool/'){
                var href = href.slice(6, -1)
                expect(navbarbuttons).to.include(href)
                cy.get('#childtoolbar').children().first().should('have.text', href)
            }
          }) 
    })

    it('MyEntities - navigation', () => {
      cy.get('#entitiesnavbtn').click()
      cy.get('#childtoolbar').children().should('length', 6)
      cy.get('.dropdown-menu').children().should('length', 4)
      for(var entity in entititesData){
        cy.get('.dropdown-toggle').click()
        const entitykey = Object.keys(entititesData[entity])
        cy.get('#add' + entitykey).click()
        cy.get('#close' + entitykey).click()
      }
      for(var i of [2, 3, 4, 5]){
        cy.get('#tabs > :nth-child(' + i + ') > a').click()
      }
    })
})