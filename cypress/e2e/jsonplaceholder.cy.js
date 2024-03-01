const schemaGetPosts = require('./schemas/schemaGetPosts.js');
const schemaJsonTodos = require('./schemas/schemaJsonTodos.js');

describe ('Json placeholder Practice', () => {
    it('Get the posts', () => {

        cy.log("--------------------------")
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const methodRest = 'GET'

        cy.log(url)
        cy.log(methodRest)
        cy.requestSend(methodRest,url,null,200,schemaGetPosts)
    })

    it('Get the todos', () => {

        cy.log("--------------------------")
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const methodRest = 'GET'

        cy.log(url)
        cy.log(methodRest)

        cy.requestSend(methodRest,url,null,200,schemaJsonTodos)

    })

 })