module.exports = class Car {
    constructor(data = {}) {
        this.id = data.id;
        this.model = data.model;
        this.color = data.color;
        this.plateNumber = data.plateNumber;
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
    }
};