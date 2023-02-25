const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function deleteAdmin(req, res) {
  try {
    const { name } = req.params;

    if (!name) {
      throw new CustomError('Nome do admin não informado', 200);
    }

    const adminExists = await prisma.admin.findUnique({ where: { name } });

    if (adminExists) {
      throw new CustomError('este admin já existe', 200);
    }

    const admin = await prisma.admin.delete({ where: { name } });

    if (!admin) {
      throw new CustomError('Admin não encontrado', 200);
    }

    return res.send(`Admin ${name} deletado com sucesso`);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = deleteAdmin;
