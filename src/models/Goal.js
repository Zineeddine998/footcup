import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Goal';
const COLLECTION_NAME = 'goals';

export const goalSchema = new mongoose.Schema({
    goalScorrer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    },
    minute: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
}, {
    timestamps: true,
});

export const GoalModel = mongoose.model(DOCUMENT_NAME, goalSchema, COLLECTION_NAME);