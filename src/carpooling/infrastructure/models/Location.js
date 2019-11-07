const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { Location: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'location',
    tableName: 'location',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
            unsigned: true,
        },
        name: {
            type: String,
            nullable: false,
        },
        description: {
            type: String,
            nullable: true,
        },
        checkpointId: {
            type: Number,
            nullable: false,
            unsigned: true,
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