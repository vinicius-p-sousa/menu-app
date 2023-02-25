const prisma = require('../../prisma/prismaClient');
const { handleErrors } = require('../../utils/utils');

async function searchProduct(req, res) {
  try {
    const { text } = req.params;

    if (!text) {
      return res.send([]);
    }

    const result = await prisma.product.findMany({
      take: 8,
      where: {
        OR: [
          {
            name: {
              contains: text,
              mode: 'insensitive',
            },
          },
          {
            ProductCategory: {
              name: {
                contains: text,
                mode: 'insensitive',
              },
            },
          },
        ],
      },
      select: {
        name: true,
        category_name: true,
      },
    });

    return res.send(result);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = searchProduct;
