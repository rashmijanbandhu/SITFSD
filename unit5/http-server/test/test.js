// // test/test.js
// const { expect } = require('chai');
// const { getFilePath, handleError } = require('../utils');

// describe('Utils', () => {
//     describe('getFilePath', () => {
//         it('should return the correct file path for /', () => {
//             const filePath = getFilePath('/');
//             expect(filePath).to.equal(__dirname + '/../public/index.html');
//         });

//         it('should return the correct file path for /about', () => {
//             const filePath = getFilePath('/about');
//             expect(filePath).to.equal(__dirname + '/../public/about');
//         });
//     });

//     describe('handleError', () => {
//         // Write tests for handleError function
//     });
// });


// test/test.js
const path = require('path');
const { expect } = require('chai');
const { getFilePath, handleError } = require('../utils');

describe('Utils', () => {
    describe('getFilePath', () => {
        it('should return the correct file path for /', () => {
            const filePath = getFilePath('/');
            const expectedPath = path.join(__dirname, '..', 'public', 'index.html');
            expect(filePath).to.equal(expectedPath);
        });

        it('should return the correct file path for /about', () => {
            const filePath = getFilePath('/about');
            const expectedPath = path.join(__dirname, '..', 'public', 'about');
            expect(filePath).to.equal(expectedPath);
        });
    });

    describe('handleError', () => {
        // Write tests for handleError function
    });
});
