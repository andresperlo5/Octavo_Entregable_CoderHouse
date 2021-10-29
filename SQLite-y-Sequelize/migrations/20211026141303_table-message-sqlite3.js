
exports.up = function(knex) {
    knex.schema
      .createTable('posts', function (table){
          table.increments('id').primary();
          table.string('email');
          table.string('message');
      })
      .then(() => {
          console.log('Tabla Creada');
      })
      .catch((err) => {
          console.log('error', err);
      })
  };

exports.down = function(knex) {
  
};
