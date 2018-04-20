exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['Google.spec.js'],
	onPrepare: () => {
	browser.ignoreSynchronization = true;
}
}
