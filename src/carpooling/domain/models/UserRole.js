module.exports = class UserRole {
    constructor(data = {}) {
        this.id = data.id;
        this.userId = data.userId;
        this.roleName = data.roleName;
        this.createdAt = data.createdAt;
    }
};