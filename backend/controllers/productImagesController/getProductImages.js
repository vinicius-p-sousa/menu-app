const prisma = require('../../prisma/prismaClient');
const { handleErrors, customError } = require('../../utils/utils');

async function getProductImages(req, res, name) {
  try {
    if (!name) {
      throw new customError('o nome do produto deve ser fornecido');
    }
    const product = await prisma.product.findUnique({
      where: {
        name,
      },
      select: {
        id: true,
      },
    });

    if (!product) {
      throw new customError('produto não encontrado', 404);
    }

    const images = await prisma.productImage.findMany({
      where: {
        product_id: product.id,
      },
      select: {
        id: true,
        path: true,
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    return res.send(images);
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = getProductImages;
