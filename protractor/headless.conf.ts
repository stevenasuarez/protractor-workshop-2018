import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export const config: Config = {
	framework: 'jasmine',
	specs: ['../test/Google.spec.js'],
	noGlobals: true,
	SELENIUM_PROMISE_MANAGER: false,
	onPrepare: () => {
		browser.ignoreSynchronization = true;
		reporter();
	},
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: ['--headless', '--disable-gpu', '--window-size=800,600']
		}
	}
}
