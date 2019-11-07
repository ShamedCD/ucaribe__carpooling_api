const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { Route: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'route',
    tableName: 'route',
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