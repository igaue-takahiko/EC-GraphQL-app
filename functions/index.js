const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("sk_test_51I43PEG3HDqQutq18EeXVEbmWgBrMl09ZTclqN78D50fFkRkVDvhkqHagyNWTQUqIcpedlHpdWChWdCbKa2Irf2x00AZKrq2XN");

const app = express();

app.use(cors({
    origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
    try {
        const { amount, shipping } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            shipping,
            amount,
            currency: "jpy"
        });

        res.status(200).send(paymentIntent.clientSecret);
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: error.message,
        })
    }
});

app.get('*', (req, res) => {
    res.status(404).send('404, Not Found.');
});

exports.api = functions.https.onRequest(app);
