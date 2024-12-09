
import express, { Express, Request, Response } from 'express';
import connectDB from './config/database';
import errorHandler from './middleware/error';

const app: Express = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to Second Brain API! 🧠', status: 'Connected to MongoDB' });
});

// Test error route (separate from home route)
app.get('/test-error', (req: Request, res: Response) => {
    throw new Error('Second Brain crashed! 🧠💥');
});

// Error Handler
app.use(errorHandler);

// Start server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});

export default app;
