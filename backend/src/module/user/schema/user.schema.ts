import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    readonly name: string;
    readonly email: string;
    readonly active: boolean;
    readonly createdAt: string;
    readonly updatedAt: string;
}

export const UserSchema = new Schema({
  _id: { type: Schema.ObjectId, auto: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  active: { type: Boolean, required: true },
}, { timestamps: true });
