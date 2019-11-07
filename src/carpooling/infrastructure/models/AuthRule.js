const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { AuthRule: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'authRule',
    tableName: 'auth_rule',
    target: Model,
    columns: {
        name: {
            type: String,
            nullable: false,
            primary: true,
        },
        data: {
            type: String,
            nullable: true,
        },
        createdAt: {
            type: String,
            nullable: false,
            name: 'created_at'
        }
    },
});