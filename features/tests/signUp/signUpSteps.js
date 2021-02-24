const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('../../lib/utils');
const signUpWindow = require('../../support/windows/signUpWindow');
const expect = require('chai').expect;



When('I submit by clicking the sign up button', async function () {
	await utils.clickByXpath(this.page, signUpWindow.buttons.signUp);
});

Then('I validate that alert message contains {string} and submit', async function(message){
    await utils.checkAndAcceptAlertMessage(this.page, message);
    //await this.page.waitForTimeout(2000);
})

Then('I validate that alert contains {string} and submit', async function(message){
    await utils.checkAcceptAlertMessage(this.page, message);
    //await this.page.waitForTimeout(2000);
})

