const signUpWindow = {
	textFields: {
		username: '#sign-username',
		password: '#sign-password',
	},
	buttons: {
		close: "(//button[contains(text(), 'Close')]) [2]",
		signUp: "//button[contains(text(), 'Sign up')]",
	},
};

module.exports = signUpWindow;