const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;
const routerasync = require('./router/asyn.js');

const app = express();

app.use(express.json());

app.use("/async",routerasync);

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req,res,next){
//Write the authenication mechanism here
if(!req.session.authorization){
    res.status(401).json({error:"Not yet authorized"});
}
const token = req.session.authorization.accesstoken;
jwt.verify(token,'sskhere',(err)=>{
    if(err){
        res.status(402).json({error:"Invalid token"});
    }
    next();
})
});

const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);


app.listen(PORT,()=>console.log("Server is running"));
