const fs = require( 'fs' );

const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
};

function createWords( dictionaryFile, num ) {
    let number = cleanNums( num );
    if ( number === '' ) {
        console.log( 'No word found' );
    } else {
        let dictionary = [];
        fs.readFile( dictionaryFile, 'utf8', function ( err, contents ) {
            if ( err ) {
                console.error( err );
            } else {
                dictionary = contents.split( '\r\n' );
                let numberArray = number.split( '' );
                let results = findWords( numberArray, dictionary );
                console.log( results );
            }
        } );
    }

}

function findWords( numberArray, dictionary ) {
    let dict = [ ...dictionary ];
    dict = dict.filter( word => {
        return word.length === numberArray.length;
    } );
    for ( let i = 0; i < numberArray.length; i++ ) {
        let result = [];
        map[ numberArray[ i ] ].split( '' ).forEach( letter => {
            result = result.concat( dict.filter( word => {
                return word[ i ] === letter;
            } ) );
        } );

        dict = result;
    }

    return dict;
}

function cleanNums( num ) {
    let result = num.split( '-' ).join( '' );
    if ( result.includes( '1' ) || result.includes( '0' ) || isNaN( result ) ) {
        return '';
    } else {
        return result;
    }
}

module.exports = {
    cleanNums,
    findWords,
    createWords
};