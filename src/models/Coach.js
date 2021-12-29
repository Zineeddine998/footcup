import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Coach';
const COLLECTION_NAME = 'coaches';

export const coachSchema = new mongoose.Schema({
    firstName: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    lastName: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    nationality: {
        type: mongoose.Schema.Types.String,
        required: false,
    }
}, {
    timestamps: true,
});

export const CoachModel = mongoose.model(DOCUMENT_NAME, coachSchema, COLLECTION_NAME);
