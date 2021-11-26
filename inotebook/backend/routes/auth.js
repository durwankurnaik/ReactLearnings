const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


// Create a User using: POST: "/api/auth/createuser". No login required
router.post('/createuser',
    // From here, the validations are carried out
    [
        body('name').isLength({ min: 2 }),
        body('age').isNumeric(),
        body('email').isEmail(),
        body('password').isLength({ min: 8 })
    ],
    async (req, res) => {
        // If there are errors, return a bad request and the errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check whether the user exists already
        try {
            let user = await User.findOne({ email: req.body.email });

            if (user) {
                return res.status(400).json({ error: "This email address is already taken" });
            }

            // If there are no errors, then the below block will be automatically executed. Hence creating the user which will pass all the required validation checks.
            user = await User.create({
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: req.body.password,
            });

            res.json(user); // Returns the user info to the Thunder client screen
        } catch (error) {
            console.error(error);
            req.status(500).send("Some error occurred");
        }
        //   .then(user => res.json(user))
        //   .catch(err => console.log(err));
    })

module.exports = router;
