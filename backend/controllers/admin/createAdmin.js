const loginRequired = require('../../middlewares/loginRequired');
const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors, hashPassword } = require('../../utils/utils');

async function createAdmin(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      throw new CustomError('Email ou senha está faltando', 400);
    }

    if (!name || typeof name !== 'string') {
      throw new CustomError('Nome está faltando', 400);
    }

    let adminExists = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!adminExists) {
      adminExists = await prisma.admin.findUnique({
        where: {
          name,
        },
      });
    }

    if (adminExists) {
      throw new CustomError('este admin já existe', 400);
    }

    const hashedPassword = hashPassword(password);

    const newAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        name: true,
        email: true,
      },
    });

    return res.status(200).send({
      status: `Admin ${name} criado com sucesso`,
      data: {
        name: newAdmin.name,
        email: newAdmin.email,
      },
    });
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = createAdmin;
