import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
  Username: string;
  Password: string;
  Email: string;
  validatePassword: (password: string) => boolean;
}

const userSchema = new mongoose.Schema<IUser>({
  Username: {
    type: String,
    required: true,
    maxlength: 100,
    unique: true
  },
  Password: {
    type: String,
    required: true,
    maxlength: 100
  },
  Email: {
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
