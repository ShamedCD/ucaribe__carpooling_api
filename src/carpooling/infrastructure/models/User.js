const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { User: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'user',
    tableName: 'user',
    target: Model,
    columns: {
        id: {
            type: Number,
            nullable: false,
            primary: true,
            generated: "increment",
            unsigned: true,
        },
        uuid: {
            type: String,
            nullable: true,
        },
        name: {
            type: String,
            nullable: true,
        },
        email: {
            type: String,
            nullable: true,
        },
        birthday: {
            type: String,
            nullable: true,
        },
        phone: {
            type: String,
            nullable: true,
        },
        sex: {
            type: String,
            nullable: true,
        },
        engine: {
            type: 'enum',
            nullable: true,
            enum: ['google']
        }
    }
});