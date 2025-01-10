import { QueryInterface } from 'sequelize';
import DataPoint from '../models/datapoint';

export = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await DataPoint.bulkCreate([
      {
        x: new Date('2023-01-01T00:00:00Z'),
        y: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-01-02T00:00:00Z'),
        y: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-01-03T00:00:00Z'),
        y: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more data points as needed
      {
        x: new Date('2023-01-04T00:00:00Z'),
        y: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        x: new Date('2023-01-05T00:00:00Z'),
        y: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface: QueryInterface): Promise<void> => {
    await DataPoint.destroy({ where: {}, truncate: true });
  }
};
