
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function(t) {
		t.increments('id')
		t.integer('date')
		t.string('title')
		t.string('text')
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs')
};
