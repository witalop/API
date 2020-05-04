
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('medicines').del()
    .then(function () {
      // Inserts seed entries
      return knex('medicines').insert([
        {nome: 'A', farmacia: 'Z', valor: '10.00', dose:'10MG'},
        {nome: 'A', farmacia: 'X', valor: '12.00', dose:'10MG'},
        {nome: 'A', farmacia: 'Y', valor: '15.00', dose:'10MG'},
        {nome: 'B', farmacia: 'Z', valor: '10.00', dose:'15MG'},
        {nome: 'B', farmacia: 'Z', valor: '15.00', dose:'20MG'},
        {nome: 'C', farmacia: 'Z', valor: '50.00', dose:'300UI'},
        {nome: 'D', farmacia: 'Z', valor: '10.00', dose:'10MG'},
        {nome: 'D', farmacia: 'Z', valor: '12.00', dose:'15MG'},
        {nome: 'D', farmacia: 'X', valor: '15.00', dose:'10MG'},
        {nome: 'D', farmacia: 'Y', valor: '25.00', dose:'20MG'},
      ]);
    });
};
