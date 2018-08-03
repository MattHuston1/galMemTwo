
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffee', coffee => {
    coffee.increments()
    coffee.text('name')
    coffee.text('roaster')
    coffee.integer('aroma')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coffee')
};
