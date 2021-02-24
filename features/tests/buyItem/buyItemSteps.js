const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('../../lib/utils');
const itemPage = require('../../support/pages/itemPage');
const cartPage = require('../../support/pages/cartPage');
const placeOrderWindow = require('../../support/windows/placeOrderWindow');
const purchaseSummaryWindow = require('../../support/windows/purchaseSummaryWindow');
const expect = require('chai').expect;

When('I click on the {string} item', async function (item) {
	await utils.clickByText(this.page, item);
});

When(
	'I validate that a page title is {string}',
	async function (expectedTitle) {
		let pageTitle = await utils.getText(this.page, itemPage.windowTitle);
		expect(pageTitle).is.contain(expectedTitle);
	}
);

When("I click the 'Add to cart' button", async function () {
	await utils.click(this.page, itemPage.addToCartButton);
});

When("I click the 'Place Order' button", async function () {
	await utils.click(this.page, cartPage.placeOrderButton);
});

When(
	'I fill the {string} text field with {string} as a value',
	async function (textField, value) {
		await utils.clickAndTypeText(
			this.page,
			placeOrderWindow.textFields[textField],
			value
		);
	}
);

When("I click a 'Purchase' button to submit", async function () {
	await utils.clickByXpath(this.page, placeOrderWindow.buttons.purchase);
});

Then(
	'I validate that a purchase summary page title is {string}',
	async function (expectedTitle) {
		let pageTitle = await utils.getText(this.page, purchaseSummaryWindow.title);
		expect(pageTitle).is.contain(expectedTitle);
	}
);

When("I click the 'OK' button on the purchase summary page", async function () {
	await utils.click(this.page, purchaseSummaryWindow.okButton);
});
