exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['firebaseSpikeFeature.js'],
	framework: 'mocha'
}