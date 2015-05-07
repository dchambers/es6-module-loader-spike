'use strict';

import A from '../src/A';
import {expect} from 'chai';

console.log('test.js');

describe('es6-module-loader sub-realms', function() {
	it('uses the statically linked module by default', function() {
		expect(new A().value()).to.equal('default-value');
	});
	
	it('allows modules to be replaced dynamically', function() {
		let A = System.import('../src/A');
console.log(A);
		expect(new A().value()).to.equal('alternate-value');
	});
});
