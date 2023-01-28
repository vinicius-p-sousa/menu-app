const prisma = require('../../prisma/prismaClient');
const { handleErrors } = require('../../utils/utils');

async function searchProduct(req, res) {
  try {
    if (!text) {
      return res.send([]);
    }

    const result = await prisma.product.findMany({
      take: 8,
      where: {
        name: {
          contains: text,
        },
      },
      select: {
        name: true,
      },
    });

    return res.send(result);
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = searchProduct;
