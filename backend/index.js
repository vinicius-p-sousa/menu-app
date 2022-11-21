require('dotenv').config();
const logger = require('./logger');
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
