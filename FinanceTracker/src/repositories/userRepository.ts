import User, { IUser } from '../models/User';

class UserRepository {
    getAllUsers() {
        return User.find().sort({ Username: -1 }).exec();
    }
}

export default new UserRepository();
