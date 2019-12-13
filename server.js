const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");

if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}


app.post('/payment', (req,res) => {
    const body = {
        source: req.body.token.id,
        amount: parseInt(req.body.amount),
        currency: 'inr',
        description:"Charges for crown-clothing"
    }

    stripe.charges.create(body, (stripeErr, stripeRes)=>{
        if(stripeRes){
            return res.status(200).send({success: stripeRes});
        }else{
            return res.status(500).send({error: stripeErr})
        }
    })
});

app.listen(PORT, error => {
    if(error)
        throw error;
    console.log(`Server running on port ${PORT}`)
});