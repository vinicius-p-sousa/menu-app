const prisma = require('../../prisma/prismaClient');
const { handleErrors } = require('../../utils/utils');

async function getCategories(req, res) {
  try {
    const categories = await prisma.productCategory.findMany({ select: { name: true } });

    return res.send(categories);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = getCategories;
