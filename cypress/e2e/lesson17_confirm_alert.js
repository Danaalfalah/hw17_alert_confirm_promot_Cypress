describe('homework for confirm alert box', () => {

    it('confirm test for press ok btn ', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")

        cy.get(':nth-child(2) > .analystic').click()
        cy.get('#CancelTab > .btn').click()
        
        // cy.get('#OKTab > .btn').click()
        //the code for confirm 
        cy.on("window:confirm",(win)=>{  
            expect(win).to.equal("Press a Button !");
         
            
            // cy.get('#CancelTab > .btn').click()
            // 
          
        })           
        cy.get('#OKTab > .btn').click({force: true});
        cy.get('#demo').should('have.text',"You pressed Ok")
    });
    

    
    it('confirm test for press cancel btn ', () => {
        cy.visit("https://demo.automationtesting.in/Alerts.html")

        cy.get(':nth-child(2) > .analystic').click()
        cy.get('#CancelTab > .btn').click()

        // cy.get('#OKTab > .btn').click({force: true})
        //the code for confirm 
        cy.on("window:confirm",(win)=>{  
               return false;
               // expect(win).to.equal("Press a Button !");
        
            // cy.get('#CancelTab > .btn').click()
            // 
       
          
        })           
        cy.get('#CancelTab > .btn').click({force: true})
        cy.get('#demo').should('have.text',"You Pressed Cancel")
    });
});