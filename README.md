# richardvan.learning.mongodb
Learning the MEAN stack on edX.org


### Require Module
`node index.js`
will show how require works, the mongodb stuff is commented

### Testing (using mocha)
mocha is a node module you can test on this project by typing:


`./node_modules/.bin/mocha test.js`

runs all the test

`./node_modules/.bin/mocha -g "other" test.js`

where -g stands for -grep and will only run test with other in it

### Reports for Mocha
the current report is spec, there is also dot, xunit, nyan


`./node_modules/.bin/mocha -R dot test.js`
`./node_modules/.bin/mocha -R xunit test.js`
`./node_modules/.bin/mocha -R nyan test.js`