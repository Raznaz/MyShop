'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'isActivated', {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn('users', 'activationLink', {
      type: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
