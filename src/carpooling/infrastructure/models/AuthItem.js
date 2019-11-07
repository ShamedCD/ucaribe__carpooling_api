const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { AuthItem: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'AuthItem',
    tableName: 'auth_item',
    target: Model,
    columns: {
        name: {
            type: String,
            nullable: false,
            primary: true,
        },
        type: {
            type: Number,
            nullable: false,
        },
        description: {
            type: String,
            nullable: true,
        },
        ruleName: {
            type: String,
            nullable: true,
            name: 'rule_name',
        },
        data: {
            type: String,
            nullable: true,
        },
        createdAt: {
            type: String,
            nullable: false,
            name: 'created_at',
        },
        updatedAt: {
            type: String,
            nullable: false,
            name: 'updated_at',
        },
    }
});