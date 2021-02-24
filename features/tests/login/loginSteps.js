const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('../../lib/utils');
const loginWindow = require('../../support/windows/loginWindow');
const navigationBar = require('../../support/components/UpperNavigationBar')
const expect = require('chai').expect;

When(
	'I type {string} value in the {string} field',
	async function (value, textField) {
		switch (textField) {
			case 'username':
				await utils.clickAndTypeText(
					this.page,
					loginWindow.textFields.username,
					value
				);
				break;
			case 'password':
				await utils.clickAndTypeText(
					this.page,
					loginWindow.textFields.password,
					value
				);
                await this.page.waitForTimeout(1000);
				break;
		}
	}
);

When('I submit by clicking the login button', async function () {
	await utils.clickByXpath(this.page, loginWindow.buttons.login);
    await this.page.waitForTimeout(5000);
});

Then('I validate that navigation bar contains message {string}', async function(expectedMessage){
    let message = await utils.getText(this.page, navigationBar['Name Of User']);
    expect(message).to.contain(expectedMessage);
})