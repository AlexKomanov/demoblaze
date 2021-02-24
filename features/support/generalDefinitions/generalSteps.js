const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('../../lib/utils');
const upperNavigationBar = require('../components/UpperNavigationBar');

Given('I open a main page', async function () {
	await this.page.goto('https://www.demoblaze.com/index.html');
});

When(
	'I clicked a {string} button on the Main Page',
	async function (buttonName) {
		await utils.click(this.page, upperNavigationBar[buttonName]);
	}
);
