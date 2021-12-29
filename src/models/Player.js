import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Player';
const COLLECTION_NAME = 'players';

const playerSchema = new mongoose.Schema({
    firstName: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    lastName: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },
    club: {
        type: mongoose.Schema.Types.String,
        required: false
    },
    number: {
        type: mongoose.Schema.Types.Number,
        required: false,
        default: 0
    }
}, {
    timestamps: true,
});

export const PlayerModel = mongoose.model(DOCUMENT_NAME, playerSchema, COLLECTION_NAME);