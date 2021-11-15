import {assert} from 'chai';
import {calc} from '../app_2.js';

describe('Positive tests', function(){
    it('Test : +', function(){
        assert.equal(calc(3,3,"+"), 6);
    });

    it('Test: *', function(){
        assert.equal(calc(3,3,"*"), 9);
    });
    it('Test: /', function(){
        assert.equal(calc(9,3,"/"), 3);
    });
    it('Test: -', function(){
        assert.equal(calc(9,3,"-"), 6);
    });
    it('The result should be type number', function(){
        assert.typeOf(calc(9,3,"-"), 'number');
    });


});