// Use result from configuration file
const visit_result = Cypress.env('visit_result')
const image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/PCCW.svg/1200px-PCCW.svg.png'

describe('Google image search for PCCW logo', function() {

  it('Navigates to Google image search page', function() {
    cy.visit('https://www.google.com.au/imghp?hl=en&tab=wi&ogbl')

    cy.screenshot('google-image-search-page')

    cy.url().should('eq', 'https://www.google.com.au/imghp?hl=en&tab=wi&ogbl')
  })

  it('Searches by image for image URL', function() {
    cy.get('.S3Wjs').click()

    cy.get('#qbui').type(image_url)

    cy.get('.gbqfb').click()

    // Assert that search results relate to PCCW logo image url used in search
    cy.contains('pccw logo').should('be.visible')

    cy.screenshot('search-results')
    })

  it('Can select search result indicated in config file', function() {
    const visit_result_index = visit_result - 1

    cy.get('.LC20lb').eq(visit_result_index).click()
  })

  it('Can take screenshot of last visited page', function() {
    /*
        Note, does not currently work due to Cypress cross origin error. Needs more investigation. See below link for more info
        https://docs.cypress.io/guides/references/error-messages.html#Cypress-detected-a-cross-origin-error-happened-on-page-load
    */
    cy.screenshot('next-visited-page')
  })
})