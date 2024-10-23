import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  admin: boolean;
  status: string;
  createdAt: Date;
  transactionHistory: mongoose.Types.ObjectId[];  // Transaction IDs
  balance: number;
  accountNumber: string;
}

const userSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }, 
  status: { type: String, enum: ['active', 'suspended', 'closed'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  transactionHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  balance: { type: Number, default: 0 },
  accountNumber: { type: String, required: true, unique: true }, 
});

export const User = mongoose.model<IUser>('User', userSchema);
