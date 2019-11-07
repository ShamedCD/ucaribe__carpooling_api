module.exports = class Checkpoint {
    constructor(data = {}) {
        this.id = data.id;
        this.sequence = data.sequence;
        this.lat = data.lat;
        this.long = data.long;
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
    }
};