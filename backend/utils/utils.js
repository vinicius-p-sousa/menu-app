const pino = require('pino');
const fs = require('fs');
const multer = require('multer');

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

function customError(message, code = 400, type = 'customError') {
  const error = new Error(message);
  error.type = type;
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

  logger.error(error);

  if (error.type === 'MulterError') {
    console.log('passou aqui');
    return res.status(error.code).send(error.message);
  }

  logger.error(`internal Error: ${error}`);
  return res.status(500).send('Internal Server Error');
}

module.exports = { logger, customError, handleErrors };
