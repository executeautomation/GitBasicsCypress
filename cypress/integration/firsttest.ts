

describe("First test", () => {
    beforeEach(() => {
        cy.intercept('/api/data-bundle/home-page').as('homepage');
        cy.visit("https://executeautomation.com");
    })

    it("XHR Testing", () => {

        //Simple
        // cy.wait("@homepage").its('response.statusCode').should('be.oneOf', [200, 304])


        //Advanced
        cy.wait("@homepage").then(({ request, response }) => {
            expect(response.body.courses).length.above(2);
            expect(response.body.courses[0]).to.have.property('title', 'Selenium Grid with Docker');
        })
    })




    /* ==== Test Created with Cypress Studio ==== */
    it('login', function() {



        /* ==== Generated with Cypress Studio ==== */
        cy.get('.ct-header-content > .ct-ul > :nth-child(3) > a').click();
        cy.get('#email').clear().type('karthik@techgeek.co.in');
        cy.get('#password').clear();
        cy.get('#password').type('Projecta12');
        cy.get('.ct-btn-blue').click();

        
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.btn > .svg-inline--fa').click();
        cy.get('a.dropdown-item > h3').click();
        cy.get('.ct-badge').click();
        cy.get('.dropdown > .ct-profile > .ct-toggle-area > .ct-profile-container > img').click();
        cy.get('a.dropdown-item > h3').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        /* ==== End Cypress Studio ==== */
    });
})