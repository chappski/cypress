import MyEntities from  "../../../../support/pageObjects/MyEntities";
import {userData, web} from "../../../variables/settings";
import {CreateUser} from "../../testSteps/testMethods";
///<reference types="cypress" />

describe('Tool Costs', () => {
    beforeEach(() => {
      CreateUser(web, userData)
    }),
   
   it('Costs Create', () => {
        cy.visit('https://hammerhead-app-wwgsk.ondigitalocean.app/tool/MyEntities')

         MyEntities.allTabs().children().should('have.length',4)

    })
})
