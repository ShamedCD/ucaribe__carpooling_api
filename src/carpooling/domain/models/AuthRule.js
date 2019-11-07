module.exports = class AuthRule {
    constructor(data = {}) {
        this.name = data.name;
        this.data = data.data;
        this.createdAt = data.createdAt;
    }
};