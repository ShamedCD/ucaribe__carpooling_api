const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { RideRequest: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'rideRequest',
    tableName: 'ride_request',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
            unsigned: true,
        },
        rideId: {
            type: Number,
            nullable: false,
            name: 'ride_id',
        },
        userId: {
            type: Number,
            nullable: false,
            name: 'user_id',
        },
        status: {
            type: 'enum',
            nullable: false,
            enum: [
                'solicitado',
                'aceptado',
                'rechazado',
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