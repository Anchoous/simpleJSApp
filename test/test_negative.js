import {assert} from 'chai';
import {expect} from 'chai';
import {calc} from '../app_2.js';

describe('Negative tests', function(){
    it('Test : not equal', function(){
        assert.notEqual(calc(3,3,"+"), 7);
    });
    it('Invalid INPUT', function(){
        expect(function(){
            calc(3,'',"+");
        }).to.throw("Invalid input");
    });

    it('Divivsion by zero', function(){
        expect(function(){
            calc(3,0,"/");
        }).to.throw("Division by zero");
    });
    it('Invalid operator', function(){
        expect(function(){
            calc(3,1,"#");
        }).to.throw("Error. Invalid operator");
    });


});