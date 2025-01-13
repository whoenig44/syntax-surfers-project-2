const forceDatabaseRefresh = false;
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
import chartRoutes from './routes/chartRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(cors());
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes); //other routes if needed
app.use('/api/charts', chartRoutes); //New Chart Routes updated

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
