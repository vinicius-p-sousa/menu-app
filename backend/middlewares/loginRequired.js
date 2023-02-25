const { verify } = require('jsonwebtoken');
const { handleErrors, CustomError } = require('../utils/utils');
require('dotenv').config();
const prisma = require('../prisma/prismaClient');

async function loginRequired(req, res, next) {
  try {
    if (req.method === 'POST' && req.url === '/') {
      // Check if there is an admin in the database
      const existsAdmin = await prisma.admin.findFirst();

      if (!existsAdmin) {
        return next();
      }
    }
    const authToken = req.headers.authorization;

    if (!authToken) {
      throw new CustomError('Faça de login para continuar', 200);
    }

    verify(authToken, process.env.JWT_SECRET);

    return next();
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = loginRequired;
