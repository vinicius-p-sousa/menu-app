const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function deleteCategory(req, res) {
  try {
    const name = req.params.name.toLowerCase();

    if (!name) {
      throw new CustomError('o nome deve ser enviado', 200);
    }

    const categoryExists = prisma.productCategory.findUnique({
      where: {
        name,
      },
    });

    if (categoryExists === null) {
      throw new CustomError('esta categoria não existe', 200);
    }

    await prisma.productCategory.delete({
      where: {
        name,
      },
    });

    return res.send('categoria deletada com sucesso');
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = deleteCategory;
