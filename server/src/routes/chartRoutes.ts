import { Router } from 'express';
import { fetchChartData, addDataPoint } from '../controllers/chartController';
import {authenticateToken} from '../middleware/auth'; // Ensure proper auth middleware is used

const router = Router();

router.get('/charts', authenticateToken, fetchChartData);
router.post('/charts/data-point', authenticateToken, addDataPoint);

export default router;
