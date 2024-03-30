import mongoose from 'mongoose';

export interface ICategory {
    name: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String,
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