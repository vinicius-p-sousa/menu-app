const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function updateCategory(req, res) {
  try {
    const oldName = req.params.category;
    const newName = req.body.category;

    if (!oldName) {
      throw new CustomError('o nome deve ser enviado', 200);
    }

    if (oldName === newName) {
      throw new CustomError('não existem atualizações a serem feitas', 200);
    }

    const categoryExists = await prisma.productCategory.findUnique({ where: { name: oldName } });

    if (categoryExists === null) {
      throw new CustomError('esta categoria não existe', 200);
    }

    const updatedCategory = await prisma.productCategory.update({
      where: { name: oldName },
      data: { name: newName },
      select: { name: true },
    });

    return res.send(updatedCategory);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = updateCategory;
