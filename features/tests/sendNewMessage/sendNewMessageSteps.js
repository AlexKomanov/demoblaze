const { Given, When, Then } = require('@cucumber/cucumber');
const utils = require('../../lib/utils');
const newMessageWindow = require('../../support/windows/newMessageWindow');


When("I type {string} value in the {string} field in the 'New Message' window", async function(value, textField){
    await utils.clickAndTypeText(this.page, newMessageWindow.textFields[textField], value);
});

When("I submit by clicking 'Send Message' button in the 'New Message window'", async function(){
    await utils.clickByXpath(this.page, newMessageWindow.buttons.sendMessage);
})
/**
 * 
 * And 
    And I type "test" value in the "Contact Email" field in the 'New Message' window
    And I type "test" value in the "Contact Email" field in the 'New Message' window
    And 
 */