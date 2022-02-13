import { User } from '../model/user.js'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {

    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password )) {
        res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in the database
        const user = await User.create({
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        });

        // return new user
        await user.save();
    } catch (err) {
        console.log(err);
    }
};