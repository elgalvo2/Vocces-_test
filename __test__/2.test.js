const numbersTop = require('../2.js')
const { expect } = require('chai')

const case1 = [3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]
const case2 = ['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]

const case3 = [1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,3,3,3,2,5,6,7,]

describe('2.js Tests',()=>{
    it.skip('test script works!',()=>{
        expect(true).to.equal(true)
    })
    it.skip('numbersTop is a function',()=>{
        expect(numbersTop).to.be.a('function')
    })
    it.skip('numbersTop finds top 3 most repeated items in array passed as argument',()=>{
        expect(numbersTop(case1)).deep.to.equal([1,3,2])
    })

    it('numbersTop passes case 1 correctly',()=>{
        expect(numbersTop(case1)).deep.to.equal([1,3,2])
    })

    it('numbersTop passes case 2 correctly',()=>{
        expect(numbersTop(case2)).deep.to.equal([ 'a', 3, 2 ])
    })

    it.skip('numbersTop passes case 3 correctly',()=>{
        expect(numbersTop(case3)).deep.to.equal([ 1, 4, 3 ])
    })

    it.skip('numbersTop handles error correctly',()=>{
        expect(numbersTop('fasdfasd')).to.be.a('string')
        expect(numbersTop('fasdfasd')).to.equal('Ha sucedido un error')
    })

})