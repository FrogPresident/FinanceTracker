import TransactionCategoryAssociation, { ITransactionCategoryAssociation} from '../models/TransactionCategoryAssociation';

class TransactionCategoryAssociationRepository {
    create(data: ITransactionCategoryAssociation) {
        const association = new TransactionCategoryAssociation(data);
        return association.save();
    }
}

export default new TransactionCategoryAssociationRepository();
