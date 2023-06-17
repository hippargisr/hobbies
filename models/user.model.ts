import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  hobbies: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  hobbies: [{ type: Schema.Types.ObjectId, ref: 'Hobby', default: [] }],
});

export default mongoose.model<User>('User', userSchema);
