# node-jest-test

Example project using `jest` to create sample tests

https://jestjs.io/docs/getting-started

## Install

In order to install the dependencies modules run `npm i`

## Run 

In order to run the main script run `node index.js`

Expected output: 
```
Calculating 10 + 20
Result: 30
```
## Tests

In order to run the tests script run `npm run test`

Expected output: 
```
> jest-test@1.0.0 test /mnt/c/Users/christian.maidana/Documents/Development/prueba/node-jest-test
> jest

 PASS  tests/calculator.test.js (8.246 s)
  Given calculator module
    When adding two values
      ✓ Should 1 + 2 to equal 3 (1 ms)
    When multiplying two values
      ✓ Should 2 * 3 to equal 6

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        9.096 s, estimated 10 s
Ran all test suites.
```