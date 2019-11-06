module.exports = class AuthItemChild {
    constructor(data = {}) {
        this.parent = data.parent;
        this.child = data.child;
    }
}