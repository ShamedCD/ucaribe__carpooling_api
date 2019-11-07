module.exports = class Route {
    constructor(data = {}) {
        this.id = data.id;
        this.name = data.name;
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
    }
}