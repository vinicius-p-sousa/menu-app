const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors, hashPassword } = require('../../utils/utils');

async function updateAdmin(req, res) {
  try {
    if (!req.params.name) {
      throw new CustomError('Nome deve ser enviado', 200);
    }
    const { name, email, password } = req.body;

    const adminExists = await prisma.admin.findUnique({ where: { name: req.params.name } });

    if (!adminExists) {
      throw new CustomError('Este admin não existe', 200);
    }

    const hashedPassword = hashPassword(password);

    const updatedAdmin = await prisma.admin.update({
      where: { name: req.params.name },
      data: {
        name: name || adminExists.name,
        email: email || adminExists.email,
        password: hashedPassword || adminExists.password,
      },
      select: {
        name: true,
        email: true,
      },
    });

    return res.status(200).send({
      status: `Admin ${name} atualizado com sucesso`,
      data: updatedAdmin,
    });
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = updateAdmin;
