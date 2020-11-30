const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { errorHandler } = require('./errors.js');
const routes = require('./routes/index.js');

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
