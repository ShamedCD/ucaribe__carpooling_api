module.exports = class User {
    constructor(data = {}) {
        this.id = data.id;
        this.uuid = data.uuid;
        this.name = data.name;
        this.email = data.email;
        this.birthday = data.birthday;
        this.phone = data.phone;
        this.sex = data.sex;
        this.engine = data.engine;
    }
}