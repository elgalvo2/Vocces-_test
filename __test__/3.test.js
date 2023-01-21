const increasedMeasurements = require('../3.js')
const { expect } = require('chai')

const cas1 = [1,2,3,1,2,3]
const measurements = [245, 248, 259, 190, 180, 185, 191, 185, 188, 189, 204, 213, 215, 227, 222, 221, 236, 235, 236, 232, 224, 221, 228, 234, 226, 227, 228, 230, 232, 234]


describe('3.js Tests',()=>{
    it.skip('test script works!',()=>{
        expect(true).to.equal(true)
    })

    it.skip('increasedMeasurements is a function',()=>{
        expect(increasedMeasurements).to.be.a('function')
    })

    it('increasedMeasurements gets the cantity of days with increments correclty in case 1',()=>{
        expect(increasedMeasurements(cas1)).to.equal(4)
    })

    it('increasedMeasurements gets the cantity of days with increments correclty',()=>{
        expect(increasedMeasurements(measurements)).to.equal(19)
    })

    it.skip('increasedMeasurements handles error correctly if an array without items has passed as argument',()=>{
        expect(increasedMeasurements([])).to.equal('Ha sucedido un error')
    })

    it.skip('increasedMeasurements handles error correctly',()=>{
        expect(increasedMeasurements('fasdfasd')).to.be.a('string')
        expect(increasedMeasurements('fasdfasd')).to.equal('Ha sucedido un error')
    })

    

})