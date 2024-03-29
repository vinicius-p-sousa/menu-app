const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');
require('dotenv').config();

async function loginAdmin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new CustomError('Email e senha devem ser enviados', 200);
    }

    const adminExists = await prisma.admin.findUnique({ where: { email } });

    if (!adminExists) {
      throw new CustomError('Email ou senha incorretos', 200);
    }
    const passwordMatch = await bcrypt.compare(password, adminExists.password);

    if (!passwordMatch) {
      throw new CustomError('Email ou senha incorretos', 200);
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: adminExists.id,
      expiresIn: '12h',
    });

    return res.send({ token, name: adminExists });
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = loginAdmin;
