const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('../../lib/utils');
const upperNavigationBar = require('../components/UpperNavigationBar');
const expect = require('chai').expect;

let alertMessage = '';

Given('I open a main page', async function () {
	this.page.on('dialog', async dialog => {		
		alertMessage = await dialog.message();
		await dialog.accept();
	});
	await this.page.goto('https://www.demoblaze.com/index.html');
	
});

Then("I validate redirection to the main page", async function(){
	let mainUrl = await this.page.url();
	expect(mainUrl).to.contain("index.html")
	console.log(mainUrl);
})

When(
	'I clicked a {string} button on the Main Page',
	async function (buttonName) {
		await utils.click(this.page, upperNavigationBar[buttonName]);
	}
);

When("I print a message to the console", async function(){
	console.log("Message: " + alertMessage)
})

When("I validate that alert message contains {string} and submit", async function(expectedMessage){	
	console.log("Message 2: " + alertMessage)
	expect(alertMessage).to.contain(expectedMessage);
})
