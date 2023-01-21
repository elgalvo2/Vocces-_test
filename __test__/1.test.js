const findUniq = require('../1.js')
const { expect } = require('chai')

const case1 = ['12', 10, '12', 11, 1, 11, 10, '12']
const case2 = ['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']
const corner = ['12', 10, '12', 11, 1, 11, 10, '12',1]

describe('1.js tests',()=>{
    it.skip('test script works!',()=>{
        expect(true).to.equal(true)
    })
    it.skip('findUniq is a function',()=>{
        expect(findUniq).to.be.a('function')
    })
    it.skip('findUniq finds unique item in an array passed as argument',()=>{
        expect(findUniq(case1)).deep.to.equal(1)
    })
    it('findUniq resolves case 1 correctly',()=>{
        expect(findUniq(case1)).deep.to.equal(1)
    })
    it('findUniq resolves case 2 correctly',()=>{
        expect(findUniq(case2)).deep.to.equal('Wonder Woman')
    })
    it.skip('findUniq returns a object handles errors correctly',()=>{
        expect(findUniq(1234)).to.has.property('message').equal('Hay un caso indefinido')
    })
    it.skip('findUniq handles when theres no unique item',()=>{
        expect(findUniq(corner)).to.has.property('message').equal('No se encontraron items unicos')
    })
})