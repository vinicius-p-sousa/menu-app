const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function createCategory(req, res) {
  try {
    const name = req.body.name.toLowerCase();

    if (!name) {
      throw new CustomError('o nome deve ser enviado', 200);
    }

    const categoryExists = await prisma.productCategory.findUnique({ where: { name } });

    if (categoryExists) {
      throw new CustomError('essa categoria já existe', 200);
    }

    const newCategory = await prisma.productCategory.create({
      data: { name },
      select: { name: true },
    });

    return res.send(newCategory);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = createCategory;
