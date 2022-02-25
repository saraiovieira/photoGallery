import { User } from '../model/user.js'
import bcrypt from 'bcrypt'
import { check, validationResult } from 'express-validator'

export const validateRegister = (method) => {
    switch (method) {
      case 'register': {
       return [ 
            check('email', 'Email is required')
                .isEmail(),
            check('password', 'Password is required')
            .isLength({ min: 1 })
        ]   
      }
    }
}

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { email, password } = req.body;
    
        const oldUser = await User.findOne({ email });
    
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email: email.toLowerCase(), 
            password: encryptedPassword,
        });

        res.status(200).json({
            success: true,
            message: 'Register was successful',
        })

        await user.save();
    } catch(err) {
        return next(err)
    }
};