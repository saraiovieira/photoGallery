import { User } from '../model/user.js';
import bcrypt from 'bcrypt';

export const getLogin = (req, res) => {
  res.render("login");
};

export async function login (req, res) {
  
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    // Validate if user exist in the database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // user
      req.session.isAuth = true;
      res.redirect('/upload');
    }
    else{
        res.status(400).send("Invalid Credentials");
    }

  } catch (err) {
    console.log(err);
  }  
}