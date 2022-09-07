import 'cypress-wait-until';
import { typeonebyone } from '../../variables/helpers';


export function CreateUser(web, userData) { 
      cy.visit(web)
      cy.get('[data-target="#singinmodal"]').click()
      // cy.get('#id_email').type('a@gmail.com')
      cy.wait(400)
      cy.get('#id_username').type(userData.username)
      cy.wait(300)
      cy.get('#id_password').type(userData.password)
      cy.wait(300)
      cy.get('#submitbtn').click()
      cy.get('#toolnavbtn').click()
    }

    function FillInAndSubmit (entitiesType, entityData) {
      for(const property in entityData){
        const modalSelector = '[id^=' + entitiesType + 'modal]'
        cy.get(modalSelector).within(() => {
          const propertyID = '#id_' + property  
          cy.get(propertyID).then(($btn) => {
            if ($btn.text() == "") {
              cy.get(propertyID).click()
              cy.get(propertyID).clear()
              typeonebyone(propertyID, entityData[property])
            } else {
              cy.get(propertyID).select(entityData[property]);
            }
          })  
        })
      }
      cy.get('#submit' + entitiesType).click();
      if(entitiesType == 'Utilities'){var entitiesType = 'Utilityy'}
      if(entitiesType == 'Processes'){var entitiesType = 'Processs'}
      cy.get('.success').should('have.text', entitiesType.slice(0, -1) + ' added!')
    }
    
    export function createRecordTest(testData, recordType) {
      const entititesData = testData[recordType]
      for(var i = 0; i<= entititesData.length; i++){
        for(const entitiesType in entititesData[i]){ 
          for(const entityName in entititesData[i][entitiesType]){
            let defaultParam =  entititesData[i][entitiesType][entityName];  
            it(recordType + ' - Create ' + ' - ' + entitiesType + ' - ' + entityName, (entitiesKey_ = entitiesType, entitityData_ = defaultParam)  => {
              cy.get('#' + recordType + 'navbtn').click()
              if(recordType == 'Entities'){
                cy.get('.dropdown-toggle').click()
              }
              cy.get('#add' + entitiesType).click()
              FillInAndSubmit(entitiesKey_, entitityData_)
            })
          }
        }
      }
    }
  
    export function DeleteEntities (entitiesKey, entityData) {
      cy.get('#childtoolbar > input.btn').click()
      cy.get('#editWorkerstab').click()

      const tabID = '#edit' + entitiesKey + 'tab'
      cy.get(tabID).click()
      
      const entityDeleteBtn = '#' + entitiesKey + 'Deletebtn'
      cy.get(tabID).click()
      cy.log(cy.get('[id$=-costAmount]'))
      console.log(cy.get('#amountForm')   )
      // if(entitiesKey == 'Utilities'){var entitiesKey = 'Utilityy'}
      // cy.get('.success').should('have.text', entitiesKey.slice(0, -1) + ' added!')
    }
  