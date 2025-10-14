import User from './user.class';

export default class Users {
    constructor() {
        this.data = [];
        this.nextId = 1;
    }

    populate(datos) {
            this.data = datos.map(u => new User(u.id, u.nick, u.email, u.password));
                const maxId = this.data.reduce((max, user) => user.id > max ? user.id : max, 0);
                this.nextId = maxId + 1;
    }

    addUser(datosNewUser) {
        const userNew = new User(this.nextId++, datosNewUser.nick, datosNewUser.email, datosNewUser.password);
        this.data.push(userNew);
        return userNew;
    }

    removeUser(userId) {
        const index = this.getUserIndexById(userId);
        this.data.splice(index, 1);
    }

    changeUser(user) {
        const index = this.getUserIndexById(user.id);
        const newUser = new User(user.id, user.nick, user.email, user.password);
        this.data.splice(index, 1, newUser);
        return newUser;
    }

    getUserById(userId) {
        const user = this.data.find(u => u.id === userId);
        if (!user) throw new Error('User not found');
        return user;
    }

    getUserIndexById(userId) {
        const index = this.data.findIndex(u => u.id === userId);
        if (index === -1) throw new Error('User not found');
        return index;
    }

    getUserByNickName(nick) {
        const user = this.data.find(u => u.nick === nick);
        if (!user) throw new Error('User not found');
        return user;
    }

        toString() {
            return this.data.map(u => u.id).join(', ');
        }
}

