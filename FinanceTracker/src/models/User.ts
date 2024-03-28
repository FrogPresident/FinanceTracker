import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
  username: string;
  password: string;
  email: string;
  validatePassword: (password: string) => boolean;
}

const userSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true
  }
});

userSchema.methods.validatePassword = function (password: string): boolean {
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('transactions', {
  ref: 'Transaction',
  localField: '_id',
  foreignField: 'User'
});


userSchema.virtual('category', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'User'
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
