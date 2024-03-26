import mongoose from 'mongoose';

interface ITransactionCategoryAssociation {
    transaction: mongoose.Schema.Types.ObjectId;
    category: mongoose.Schema.Types.ObjectId;
}

const transactionCategoryAssociationSchema = new mongoose.Schema<ITransactionCategoryAssociation>({
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const TransactionCategoryAssociation = mongoose.model<ITransactionCategoryAssociation>('TransactionCategoryAssociation', transactionCategoryAssociationSchema);
export default TransactionCategoryAssociation;