import mongoose from 'mongoose';
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'users';

const userSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    }
}, {
    timestamps: true,
});

export const UserModel = mongoose.model(DOCUMENT_NAME, userSchema, COLLECTION_NAME);