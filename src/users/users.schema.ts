
import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export interface Users extends Document {
  id: string;
  email: string;
  password: string;
}
