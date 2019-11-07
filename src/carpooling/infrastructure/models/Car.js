const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { Car: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'car',
    tableName: 'car',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
        },
        model: {
            type: String,
            nullable: true,
        },
        color: {
            type: String,
            nullable: true,
        },
        plateNumber: {
            type: String,
            nullable: true,
            name: 'plate_number',
        },
        createdBy: {
            type: String,
            nullable: false,
            name: 'created_by',
        },
        createdAt: {
            type: String,
            nullable: false,
            name: 'created_at',
        },
    }
});