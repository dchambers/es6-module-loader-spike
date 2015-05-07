require('systemjs');

console.log('has test', System.has('test/test'));

require('babel/register')({
	modules: 'system'
});

console.log('has test', System.has('test/test'));

setTimeout(function() {
	console.log('has test', System.has('test/test'));
}, 1);


System.import('test/testx').then(function() {
	console.log('test loaded.');
})