import Transaction, { ITransaction } from '../models/Transaction';

class TransactionRepository {
    getAllTransactions() {
        return Transaction.find().sort({ date: -1 }).exec();
    }
    create(data: ITransaction) {
        const transaction = new Transaction(data);
        return transaction.save();
    }

}

export default new TransactionRepository();
