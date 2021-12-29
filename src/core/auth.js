export const JWT_TOKEN = "6824e11ebca3434649e65d3f5b169b8a679b6ebc5ebdf88578110e0e6680215a8e71c62bf4c274ad9147c8989064bc9ad4d6e96d653bc3e39431c36f53958d7f"
import jwt from 'jsonwebtoken';

export const auth = () => (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) throw new Error('Invalid Authorization');
        if (!authorization.startsWith('Bearer ')) throw new Error('Invalid Authorization');
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_TOKEN);
        req.userId = decoded.id;
        next();
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) next(new Error());
        else next(err);
    }
};

export const authErrorHandler = () => (err, req, res, next) => {
    if (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
    next();
}