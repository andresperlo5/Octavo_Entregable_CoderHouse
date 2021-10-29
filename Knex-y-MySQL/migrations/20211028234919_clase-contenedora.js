
exports.up = function(knex) {
    knex.schema
      .createTable('product', function (table){
        table.increments('id').primary();
        table.string('title');
        table.string('price');
        table.string('thumbnail')
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
