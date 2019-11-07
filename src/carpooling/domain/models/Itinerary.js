module.exports = class Itinerary {
    constructor(data = {}) {
        this.id = data.id;
        this.userId = data.userId;
        this.routeId = data.routeId;
        this.startTime = data.startTime;
        this.cron = data.cron;
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
    }
}