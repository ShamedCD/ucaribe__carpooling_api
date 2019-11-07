module.exports = class Event {
    constructor(data = {}) {
        this.id = data.id;
        this.body = data.body;
        this.createdAt = data.createdAt;
    }
};