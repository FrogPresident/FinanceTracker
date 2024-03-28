import User, { IUser } from '../models/User';

class UserRepository {
    getAllUsers() {
        return User.find().sort({ Username: -1 }).exec();
    }
    create(data: IUser) {
        const user = new User(data)
        return user.save()
    }
    async findByUsername(username: string): Promise<IUser | null> {
        return await User.findOne({ username: username }).exec();
    }
}

export default new UserRepository();
