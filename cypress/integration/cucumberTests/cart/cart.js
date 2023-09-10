import { Given, When, Then,And } from 'cypress-cucumber-preprocessor/steps'

Given('I add four random items to my cart', () => {
    cy.visit('https://cms.demo.katalon.com')
    cy.get('a[href="?add-to-cart=54"').click()
    cy.get('a[href="?add-to-cart=27"').click()
    cy.get('a[href="?add-to-cart=25"').click()
    cy.get('a[href="?add-to-cart=22"').click()       
})     


When('I view my cart', () => {
    cy.contains('acar[href="https://cms.demo.katalon.com/cart/"').click()
    cy.screenshot({capture: 'fullPage'})
})

Then('I find total four items listed in my cart', () => {
  //to be filled
})

When('I search for lowest price item', () => {
    //to be filled
})

And('i am able to remove the lowest price item from my cart', () => {
    //to be filled
})

Then('I am able to verify three items in my cart', () => {
   //to be filled
})