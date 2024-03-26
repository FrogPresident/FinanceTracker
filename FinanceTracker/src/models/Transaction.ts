import mongoose from 'mongoose';

export interface ITransaction {
    date: Date;
    description: string;
    transactionType: string;
    amount: number;
    user: mongoose.Schema.Types.ObjectId;
}

const transactionSchema = new mongoose.Schema<ITransaction>({
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 255
    },
    transactionType: {
        type: String,
        required: true,
        maxlength: 255
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

transactionSchema.virtual('categories', {
    ref: 'TransactionCategoryAssociation',
    localField: '_id',
    foreignField: 'transaction'
});

const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction;
