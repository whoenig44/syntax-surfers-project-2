import { Router } from 'express';
import { fetchChartData, addDataPoint } from '../../controllers/chartController.js';
import {authenticateToken} from '../../middleware/auth.js'; // Ensure proper auth middleware is used

const router = Router();

router.get('/charts', authenticateToken, fetchChartData);
router.post('/charts/data-point', authenticateToken, addDataPoint);

export { router as chartRouter };
