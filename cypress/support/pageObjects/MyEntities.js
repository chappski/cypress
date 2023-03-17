class MyEntities {
     allTabs(){
        return cy.get('#tabs')
    }

    get costsTabButton(){
        return cy.get('#costs')
    }

}
export default new MyEntities()
