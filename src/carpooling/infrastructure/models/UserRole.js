const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { UserRole: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'userRole',
    tableName: 'user_role',
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
        roleName: {
            type: String,
            nullable: false,
            name: 'role_name',
        },
        createdAt: {
            type: String,
            nullable: false,
            name: 'created_at',
        },
    }
});