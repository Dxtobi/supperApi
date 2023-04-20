const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require('express-async-handler')




exports.get_users = asyncHandler(async (req, res, next) => {
    
  try {
    const doc = await User.find().skip(req.query?.skip)
    res.json( doc ); 
  } catch (error) {
      console.log(error.message)
      return res.status(500).json({error:'something went wrong...'})
  }
});


exports.user_register = asyncHandler(async (req, res, next) => {
    // sign up
    res.json({
        user: req.user,
    });
});


exports.user_login = asyncHandler(async (req, res, next) => {
    // sign in
    jwt.sign({ user: req.user }, 'secretKey', { expiresIn: '1h' }, (err, token) => {
        if (err) {
            return res.json({
                message: "Failed to login",
                token: null,
            });
        }
        res.json({
            token
        });
    })
}
   
);