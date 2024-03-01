import Ajv from "ajv";

Cypress.Commands.add('validateSchema' , (responseBody, schema) =>  {
    const ajv = new Ajv({allErrors: true});
    const valid = ajv.validate(schema, responseBody);
    expect(valid, JSON.stringify(ajv.errors)).to.equal(true);
} )

Cypress.Commands.add('requestSend', (method, url, body, expectedStatusCode, schema) => {
    cy.request({method: method, url: url, body: body}).then((response) => {
        cy.log('Status Code: ' + response.status);
        cy.log('Response Body: ' + JSON.stringify(response.body));
        cy.validateSchema(response.body, schema );
        expect(response.status).to.equal(expectedStatusCode);
       //Verificar que la respueta tenga un userId
        const hasUserId = response.body.some(item => item.hasOwnProperty('userId'));
        expect(hasUserId).to.be.true;
        //Verificar que la respueta tenga un Id
        const hasId = response.body.some(item => item.hasOwnProperty('id'));
        expect(hasId).to.be.true;
        //Verificar que la respueta tenga un Title
        const hasTitle = response.body.some(item => item.hasOwnProperty('title'));
        expect(hasTitle).to.be.true;
    })

})