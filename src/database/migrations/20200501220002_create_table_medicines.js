
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id')
        table.text('nome').notNullable() 
        table.text('farmacia').notNullable()
        table.float('valor').notNullable()

        //table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
