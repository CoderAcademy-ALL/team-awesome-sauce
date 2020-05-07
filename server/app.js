const express = require('express');
const casual = require('casual');
const app = express();

const profileRouter = express.Router();

let profile;

profileRouter.get('/',function(req,res){
    res.send({
        name: casual.name,
        address: casual.address,
        colour: casual.rgb_hex,
        cardType: casual.card_type,
        cardNumber: casual.card_number,
        cardExpiry: casual.card_exp,
    })
}); 

// wilson buy me a beer


module.exports = {profileRouter}