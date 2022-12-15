const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function getCategories(req, res) {
  try {
    const categories = await prisma.productCategory.findMany({
      select: {
        name: true,
      },
    });

    return res.send(categories);
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = getCategories;
