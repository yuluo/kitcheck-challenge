const createwords = require( '../create-words' );
const chai = require( 'chai' );
const expect = chai.expect;

describe( 'unit test for create word', () => {

    it( 'should return empty for numbers contain 10', () => {
        let result = createwords.cleanNums( '10' );
        expect( result ).to.equal( '' );
    } );

    it( 'should return empty if not a number', () => {
        let result = createwords.cleanNums( 'str' );
        expect( result ).to.equal( '' );
    } );

    
} );