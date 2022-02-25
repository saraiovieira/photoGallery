import { User } from '../model/user.js';
import bcrypt from 'bcrypt';


export const getLogin = (req, res) => {
  res.render("login");
};


export async function login (req, res) {
  
  try {
    
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.render("login", {errors: "The email field or password field is empty"});
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.isAuth = true;
      res.redirect('/upload');
    }
    else{
      return res.render("login", {errors: "Invalid credentials"});
    }

  } catch (err) {
    console.log(err);
  }  
}

