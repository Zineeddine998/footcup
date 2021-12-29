import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Team';
const COLLECTION_NAME = 'teams';

const teamSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    nickname: {
        type: mongoose.Schema.Types.String,
        required: false,
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coach',
        required: true,
    },
    fifaRanking: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    points: {
        type: mongoose.Schema.Types.Number,
        required: false,
        default: 0
    }
}, {
    timestamps: true,
});

export const TeamModel = mongoose.model(DOCUMENT_NAME, teamSchema, COLLECTION_NAME);