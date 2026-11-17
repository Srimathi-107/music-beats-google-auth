
import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import admin from "../config/firebaseAdmin.js";
// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      authProvider: "local",
    });

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    return res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      message: "Server error during registration",
    });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user || !user.password) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      message: "Server error during login",
    });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        message: "Google ID token is required",
      });
    }

    const decodedToken = await admin.verifyIdToken(idToken);

    if (!decodedToken.email || !decodedToken.email_verified) {
      return res.status(401).json({
        message: "Google email is not verified",
      });
    }

    const { uid, email, name, picture } = decodedToken;

    let user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      user = await User.create({
        name: name || "Google User",
        email: email.toLowerCase(),
        googleId: uid,
        profileImage: picture || "",
        authProvider: "google",
      });
    } else {
      user.googleId = uid;
      user.profileImage = picture || user.profileImage;
      await user.save();
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    return res.status(200).json({
      message: "Google login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.error("Google Login Error:", error);

    return res.status(401).json({
      message: "Google authentication failed",
    });
  }
};
