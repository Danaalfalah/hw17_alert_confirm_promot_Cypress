/// <reference types="Cypress"/>

//i will use cy.on to avoid the error inside webpage // the error its from the developer
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

describe('alert lesson 17', () => {

    // it('test alert', () => {
        
    //     cy.visit("https://demo.automationtesting.in/Alerts.html")
    
    //     cy.get('#Textbox > .btn').click()

    //     cy.window.then(()=>{

    //     })

    //     // //when i use cy.on for show the alert box without angore it because i want the text 
    //     // cy.on('window:alert' ,(theMsg)=>{

    //     //     expecte(theMsg).to.eql("Hello , share this practice page who love to learn automation")//to assertion if the msg equal expected result 

    //     //     // cy.log("the msg =  "+theMsg)// to print the msg text

    //     // })


    // });

    it('test prompt box', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get(':nth-child(3) > .analystic').click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Abdelraheem el 7eloo ")
            
        })
        
        cy.get('#Textbox > .btn').click()
    });

});