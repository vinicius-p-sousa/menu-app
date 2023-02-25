const { verify } = require('jsonwebtoken');
require('dotenv').config();

const { CustomError, handleErrors } = require('../../utils/utils');

function checkToken(req, res) {
  try {
    const { token } = req.body;

    if (!token) throw new CustomError('Envie o token no corpo da chamada', 200);

    verify(token, process.env.JWT_SECRET);

    return res.status(200).send({ data: 'token valido' });
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = checkToken;
