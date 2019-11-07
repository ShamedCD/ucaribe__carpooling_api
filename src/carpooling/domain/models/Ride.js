module.exports = class Ride {
    constructor(data = {}) {
        this.id = data.id;
        this.itineraryId = data.itineraryId;
        this.status = data.status;
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
    }
};