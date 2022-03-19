/*  A entry point for the browser bundle version. This gets compiled by:
        
        browserify --debug ./browser blockchain exchange.io.js > ./dist/browser blockchain exchange.io .js
 */

window.dw = require ('./dw')
