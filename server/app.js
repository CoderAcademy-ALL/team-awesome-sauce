const express = require('express');
const casual = require('casual');
const app = express();
const router = express.Router();

let profile;

router.get('/',function(req,res){
    res.send("Hello")
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');