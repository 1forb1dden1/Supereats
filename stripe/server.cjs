// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NQQB4JZsPRc9TeipaBQNp5asDwcTD9WwHUSyX8OWd37BGO2cbwzf70DGy84X7DRZycdaZhb7EbEsydFOPqMfSCD00IqEvQXC2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/create-checkout-session', urlencodedParser, async (req, res) => {

  const { amount, userId, orderNumber } = req.body;

  const amountToCharge = parseInt(amount * 100); 
  console.log("AmountToCharge: " + amountToCharge);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
        price_data: {
          unit_amount: amountToCharge,
          currency: 'usd',
          product_data: {
            name: "SuperEats Order",
            description: "Payment From Customer From SuperEats User: ",
          }
        },
        quantity: 1,
      }],
    success_url: `${YOUR_DOMAIN}`,
    cancel_url: `${YOUR_DOMAIN}`,
    automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));