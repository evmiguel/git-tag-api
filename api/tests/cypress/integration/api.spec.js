describe('Tag API tests', () => {
    it('should return a 200 status code and correct response for a valid tag', () => {
      cy.request('GET', 'http://localhost:3000/tag/8.1.0')
        .then((response) => {
          expect(response.status).to.eq(200);
          cy.wrap(response.body).should('have.property', 'created_at')
            .should('eq', '2022-09-14T21:44:59Z');
        })
    });

    it('should return a 404 status code and Not Found body', () => {
      cy.request({
        method: 'GET', 
        url: 'http://localhost:3000/tag/123456789',
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(404);
          cy.wrap(response.body).should('eq', 'Not Found');
        })
    });
});