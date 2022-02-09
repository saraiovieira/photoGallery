import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
});

export const User = mongoose.model("user", userSchema);