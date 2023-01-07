const pino = require('pino');
const fs = require('fs');
const multer = require('multer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

function CustomError(message, code = 400, type = 'CustomError') {
  const error = new Error(message);
  error.code = code;
  error.type = type;
  return error;
}

function handleErrors(error, req, res) {
  if (req.files) {
    req.files.forEach((image) => {
      fs.unlinkSync(image.path);
    });
  }

  if (error.type === 'CustomError') {
    return res.status(error.code).send({ error: error.message });
  }

  if (error instanceof jwt.JsonWebTokenError) {
    return res.status(401).send({ error: 'Token inválido' });
  }

  logger.error(`internal Error: ${error}`);
  return res.status(500).send({ error: 'Internal Server Error' });
}

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports = { logger, CustomError, handleErrors, hashPassword };
