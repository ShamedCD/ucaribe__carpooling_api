const { EntitySchema } = require('typeorm');

const { basePath } = global;
const { AuthItemChild: Model } = require(`${basePath}/src/domain/models`);

module.exports = new EntitySchema({
    name: 'AuthItemChild',
    tableName: 'auth_item_child',
    target: Model,
    columns: {
        parent: {
            type: String,
            nullable: false,
            primary: true,
        },
        child: {
            type: String,
            nullable: false,
            primary: true,
        },
    }
});