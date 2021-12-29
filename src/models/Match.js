import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Match';
const COLLECTION_NAME = 'matches';

export const matchSchema = new mongoose.Schema({
    teamA: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Team',
    },
    teamB: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Team',
    },
    goals: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Goal',
                required: true,
            },
        ],
        default: [],
    },
    cards: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Card',
                required: true,
            },
        ],
        default: [],
    },
    date: {
        type: mongoose.Schema.Types.Date,
        required: true,
    }
}, {
    timestamps: true,
});

export const MatchModel = mongoose.model(DOCUMENT_NAME, matchSchema, COLLECTION_NAME)