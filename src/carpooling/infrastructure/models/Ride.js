const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { Ride: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'ride',
    tableName: 'ride',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
            unsigned: true,
        },
        itineraryId: {
            type: Number,
            nullable: false,
            name: 'itinerary_id',
        },
        status: {
            type: 'enum',
            nullable: false,
            enum: [
                'En Proceso',
                'Finalizado',
                'Cancelado',
            ],
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