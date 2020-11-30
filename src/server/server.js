import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { errorHandler } from './errors.js';
import routes from './routes/routes.js';

const app = express();

// Global middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use(routes);

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log('🎸 The server is rocking and rolling...');
});
