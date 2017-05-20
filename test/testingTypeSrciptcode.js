var should = require('should');
var greeter = require('../lib/tsCode.js');


describe("Type script is compiled ok", function(){
    it("when this pass", function(){
        var g = new greeter();
        g.greet('suleiman').should.equal("A type script greeting to you suleiman");
    });
});