const pino = require('pino');
const fs = require('fs');

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

function customError(message, code = 400) {
  const error = new Error(message);
  error.type = 'CustomError';
  error.code = code;
  return error;
}

function handleErrors(error, req, res) {
  if (req.files) {
    req.files.forEach((image) => {
      fs.unlinkSync(image.path);
    });
  }

  if (error.type === 'CustomError') {
    return res.status(error.code).send(error.message);
  }

  logger.error(`internal Error: ${error}`);
  return res.status(500).send('Internal Server Error');
}

module.exports = { logger, customError, handleErrors };
