const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'DurwankurIsDoingGreatInCoding';


// ROUTE 1: Create a User using: POST: "/api/auth/createuser". No login required
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

            const salt = await bcrypt.genSalt(10);
            const secPasswd = await bcrypt.hash(req.body.password, salt);

            // If there are no errors, then the below block will be automatically executed. Hence creating the user which will pass all the required validation checks.
            user = await User.create({
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: secPasswd,
            });
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({ authToken }); // Returns the user info to the Thunder client screen
        } catch (error) {
            console.error(error);
            req.status(500).send("Some error occurred");
        }
        //   .then(user => res.json(user))
        //   .catch(err => console.log(err));
    });

// ROUTE 2: Authenticating a User using: POST: "/api/auth/login". No login required
router.post('/login',
    // Validation takes place here. 
    [
        body('email', 'Enter a valid Email').isEmail(),
        body('password', 'Password cannot be blank').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: 'Please check your email and password again.' });
            }

            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({ error: 'Please check your email and password again.' });
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ authToken });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal server error.");
        }
    });

// ROUTE 3: Get user details who are logged in using: POST "/api/auth/profile" . Login required
router.post('/profile', fetchuser,
    async (req, res) => {
        try {
            const userId = req.user.id;
            const user = await User.findById(userId).select("-password");
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal server error.");
        }
    });

module.exports = router;
