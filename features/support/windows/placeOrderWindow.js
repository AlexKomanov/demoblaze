const placeOrderWindow = {

    textFields: {
        'Name': '[id="name"]',
        'Country': '[id="country"]',
        'City': '[id="city"]',
        'Credit card': '[id="card"]',
        'Month': '[id="month"]',
        'Year': '[id="year"]',
    },
    buttons: {
        purchase: "//button[contains(text(), 'Purchase')]",
    }

}

module.exports = placeOrderWindow;