
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('members', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.interger('age');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  
};
