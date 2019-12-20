import connectDb from "../../utils/connectDb";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exixts with provided email
    const user = await User.findOne({ email }).select("+password");

    // if not, return an error
    if (!user) {
      return res.status(404).send("No user exists with that email.");
    }

    // check if passwords matches in database
    const passwordsMatch = await bcrypt.compare(password, user.password);

    // if so, generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d"
      });
      // Send the token to the client
      res.status(200).json(token);
    } else {
      res.status(401).send("Passwords do not match.");
    }
  } catch (error) {
    console.error(error);
    res.satus(500).send("Error loggin in user.");
  }
};
