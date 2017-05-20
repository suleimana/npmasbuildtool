var should = require('should');
var fill = require('../lib/coffeeCode.js');

describe('Coffee script is compiling ok', function(){
    it("When this passed ", function(){
        fill('Mug','Qhwaaa').should.equal("Filling the Mug with Qhwaaa");
    });
});