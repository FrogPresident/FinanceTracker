import Category, { ICategory } from '../models/Category';

class CategoryRepository {
    getAllCategories() {
        return Category.find().sort({ name: -1 }).exec();
    }
    create(data: ICategory) {
        const category = new Category(data);
        return category.save();
    }

}

export default new CategoryRepository();
