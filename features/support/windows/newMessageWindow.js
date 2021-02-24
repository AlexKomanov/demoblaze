const newMessageWindow = {
    textFields: {
        "Contact Email": '[id="recipient-email"]',
        "Contact Name": '[id="recipient-name"]',
        "Message": '[id="message-text"]'
    },

    buttons: {
        sendMessage: "//button[contains(text(), 'Send message')]"
    }
}

module.exports = newMessageWindow;