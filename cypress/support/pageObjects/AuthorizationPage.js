class AuthorizationPage {

    get signInModalbutton(){
        return cy.get('[data-target="#singinmodal"]').click()
    }

    get userNameField(){
        return cy.get('#id_username')
    }
    
    get userPasswordField(){
        return cy.get('id_password')
    }

    get submitButton(){
        return cy.get('submitbtn')
    }


    createUser(){
        this.signInModalbutton.click()
        cy.wait(400)
        this.userNameField.type(text)
        cy.wait(300)
        this.userPasswordField.type(text)
        cy.wait(300)
        this.submitButton.click()
    }
}
