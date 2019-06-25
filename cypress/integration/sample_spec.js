const image_url = Cypress.env('image_url')
const visit_result = Cypress.env('visit_result')

describe('Google image search', function() {


  it('Navigates to google image search', function() {
    cy.visit('https://www.google.com.au/imghp?hl=en&tab=wi&ogbl')
  })

  it('Searches by image for image URL', function() {
    cy.get('.S3Wjs').click()

    cy.get('#qbui').type(image_url)


    cy.get('.gbqfb').click()

    // add assertion that search has worked

    })

  it('Can select result from config file', function() {
    const visit_result_index = visit_result - 1
    cy.get('.LC20lb').eq(visit_result_index).click()

    // add assertion for new page
  })
})