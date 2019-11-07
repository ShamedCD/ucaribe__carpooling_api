const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { Event: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'event',
    tableName: 'event',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
            unsigned: true,
        },
        body: {
            type: JSON,
            nullable: true,
        },
        createdAt: {
            type: String,
            nullable: false,
            name: 'created_at',
        }
    }
});