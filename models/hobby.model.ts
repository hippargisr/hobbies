import mongoose, { Schema, Document } from 'mongoose';

export interface Hobby extends Document {
  passionLevel: string;
  name: string;
  year: number;
}

const hobbySchema: Schema = new Schema({
  passionLevel: { type: String, required: true },
  name: { type: String, required: true },
  year: { type: Number, required: true },
});

export default mongoose.model<Hobby>('Hobby', hobbySchema);
