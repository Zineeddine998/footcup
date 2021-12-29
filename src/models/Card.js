import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Card';
const COLLECTION_NAME = 'cards';

export const CardType = {
    RED: 'red',
    YELLOW: 'yellow',
}

export const cardSchema = new mongoose.Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    },
    minute: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    type: {
        type: mongoose.Schema.Types.String,
        required: true,
        enum: [
            CardType.RED,
            CardType.YELLOW,
        ],
    }
}, {
    timestamps: true,
});

export const CardModel = mongoose.model(DOCUMENT_NAME, cardSchema, COLLECTION_NAME);