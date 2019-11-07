const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { Itinerary: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'itinerary',
    tableName: 'itinerary',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
            unsigned: true,
        },
        userId: {
            type: Number,
            nullable: false,
            unsigned: true,
            name: 'user_id',
        },
        routeId: {
            type: Number,
            nullable: false,
            unsigned: true,
            name: 'route_id',
        },
        startTime: {
            type: String,
            nullable: false,
            name: 'start_time',
        },
        cron: {
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