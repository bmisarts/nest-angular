import * as moment from 'moment';
import { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    readonly name: string;
    readonly email: string;
    readonly active: boolean;
    readonly createdAt: string;
    readonly updatedAt: string;
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  active: { type: Boolean, required: true },
  createdAt:  { type: String, default: moment().format('YYYY-MM-DD HH:mm') },
  updatedAt:  { type: String, default: moment().format('YYYY-MM-DD HH:mm') }
});
