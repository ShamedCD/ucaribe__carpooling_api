module.exports = class Location {
    constructor(data = {}) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.checkpointId = data.checkpointId;
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
    }
}