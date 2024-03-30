import mongoose from 'mongoose';

export interface ICategory {
    name: string;
    user: mongoose.Schema.Types.ObjectId;
}

const categorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

categorySchema.virtual('transactions', {
    ref: 'TransactionCategoryAssociation',
    localField: '_id',
    foreignField: 'category'
});

const Category = mongoose.model<ICategory>('Category', categorySchema);
export default Category;