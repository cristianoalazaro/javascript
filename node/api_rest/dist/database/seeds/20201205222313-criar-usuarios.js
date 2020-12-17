"use strict";'use strict';

const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Clóvis Lázaro',
          email: 'clovis@lazaro.com.br',
          password_hash: await bcryptjs.hash('123456',8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Zaqueo Cardoso',
          email: 'zaqueocardoso@ig.com.br',
          password_hash: await bcryptjs.hash('123456',8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luzia de Barrios Cardoso',
          email: 'luziac@hotmail.com',
          password_hash: await bcryptjs.hash('123456',8),
          created_at: new Date(),
          updated_at: new Date(),
        }
          ],
      {});
  },

  down: async () => {

  }
};
