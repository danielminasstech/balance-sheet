module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Rent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Food',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Car',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'House Insurance',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Car Insurance',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};