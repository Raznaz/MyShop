'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('users', 'isActivated', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
