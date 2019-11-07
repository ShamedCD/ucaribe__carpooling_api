module.exports = class RideRequest {
    constructor(data = {}) {
        this.id = data.id;
        this.rideId = data.rideId;
        this.userId = data.userId;
        this.status = data.status;
        this.createdAt = data.createdAt;
    }
}