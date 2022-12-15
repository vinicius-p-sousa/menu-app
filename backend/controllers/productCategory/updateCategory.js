const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function updateCategory(req, res) {
  try {
    const oldName = req.params.name.toLowerCase();
    const newName = req.body.name.toLowerCase();

    if (!oldName) {
      throw new CustomError('o nome deve ser enviado');
    }

    if (oldName === newName) {
      throw new CustomError('não existem atualizações a serem feitas');
    }

    const categoryExists = await prisma.productCategory.findUnique({
      where: {
        name: oldName,
      },
    });

    if (categoryExists === null) {
      throw new CustomError('esta categoria não existe');
    }

    const updatedCategory = await prisma.productCategory.update({
      where: {
        name: oldName,
      },
      data: {
        name: newName,
      },
      select: {
        name: true,
      },
    });

    return res.send(updatedCategory);
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = updateCategory;
