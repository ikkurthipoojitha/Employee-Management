it('localhost url', function () {
    cy.visit('http://localhost:3001/employee')
})

it('search', function () {
    cy.get('.MuiInputBase-input')
    .should('be.empty')
    .should('be.enabled')

    // cy.contains('get').click()
    
})
it('search',function(){
         cy.get('.MuiInputBase-input').type('Puja')
     })
    
it('search get', function () {
    cy.get('.MuiInputBase-input',{timeout:6000})
    .should('.MuiInputBase-input','Puja').click();

})