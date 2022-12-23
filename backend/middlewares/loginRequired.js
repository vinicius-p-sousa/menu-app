const { handleErrors, CustomError } = require('../utils/utils');
const { verify } = require('jsonwebtoken');
require('dotenv').config();
const prisma = require('../prisma/prismaClient');

async function loginRequired(req, res, next) {
  try {
    if (req.method === 'POST' && req.url === '/') {
      // Check if there is an admin in the database
      const existisAdmin = await prisma.admin.findFirst();

      if (!existisAdmin) {
        return next();
      }
    }
    const authToken = req.headers.authorization;

    if (!authToken) {
      throw new CustomError('Faça de login para continuar', 401);
    }

    verify(authToken, process.env.JWT_SECRET);

    return next();
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = loginRequired;
