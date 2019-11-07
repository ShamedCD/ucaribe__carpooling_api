module.exports = class AuthItem {
    constructor(data = {}) {
        this.name = data.name;
        this.type = data.type;
        this.description = data.description;
        this.ruleName = data.ruleName;
        this.data = data.data;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
};