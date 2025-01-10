import { QueryInterface } from 'sequelize';
import { Op } from 'sequelize';

// Define the second set of seed data
const seedData2 = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkInsert('data_points', [
      {
        x: new Date('2023-02-01T00:00:00Z'),
        y: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-02-02T00:00:00Z'),
        y: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-02-03T00:00:00Z'),
        y: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-02-04T00:00:00Z'),
        y: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-02-05T00:00:00Z'),
        y: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.bulkDelete('data_points', {
      x: {
        [Op.between]: [new Date('2023-02-01T00:00:00Z'), new Date('2023-02-05T00:00:00Z')]
      }
    }, {});
  }
};

export default seedData2;
