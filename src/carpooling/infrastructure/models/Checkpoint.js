const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { Checkpoint: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'checkpoint',
    tableName: 'checkpoint',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
        },
        sequence: {
            type: Number,
            nullable: false,
        },
        lat: {
            type: Number,
            nullable: false,
        },
        long: {
            type: Number,
            nullable: false,
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