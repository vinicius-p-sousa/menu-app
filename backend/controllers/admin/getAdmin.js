const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function getAdmins(req, res) {
  try {
    const admins = await prisma.admin.findMany({
      select: {
        name: true,
        email: true,
      },
    });

    if (!admins) {
      throw new CustomError('Não foram encontrados admins', 200);
    }

    return res.send({ ...admins });
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = getAdmins;
