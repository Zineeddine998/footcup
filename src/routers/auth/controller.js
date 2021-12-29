import { UserModel } from "../../models/User.js";
import bcrypt from 'bcrypt';
import lodash from 'lodash';
import jwt from 'jsonwebtoken';
import { JWT_TOKEN } from "../../core/auth.js";



export const signUp = async (req, res) => {
    try {
        const user = await fetchUserByEmail(req.body.email);
        if (user) throw new Error("User already exists");
        const hashedPassword = await createPassword(req.body.password);
        await UserModel.create({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
        });
        res.status(200).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const login = async (req, res) => {
    try {
        const user = await fetchUserByEmail(req.body.email);
        if (!user) throw new Error("User not found");
        const matched = await validatePassword(req.body.password, user.password);
        if (!matched) throw new Error('Invalid credentials');
        const token = createToken(user);
        res.status(201).json({ token, user: lodash.omit(user, ['password']) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const fetchUserByEmail = async (email) => {
    const user = await UserModel.findOne({ email: email });
    if (!user) return null;
    return {
        username: user.username,
        email: user.email,
        password: user.password,
    };
}

export async function createPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}

export async function validatePassword(inputPassword, password) {
    return bcrypt.compare(inputPassword, password);
}

export function createToken(user) {
    const jwtToken = jwt.sign({ id: user._id, }, JWT_TOKEN);
    return jwtToken;
}
