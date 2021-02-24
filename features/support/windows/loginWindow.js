const loginWindow = {
    textFields: {
		username: '#loginusername',
		password: '#loginpassword',
	},
	buttons: {
		close: "(//button[contains(text(), 'Close')]) [2]",
		login: "//button[contains(text(), 'Log in')]",
	},
}

module.exports = loginWindow;