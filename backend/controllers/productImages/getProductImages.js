const prisma = require('../../prisma/prismaClient');
const { handleErrors, CustomError } = require('../../utils/utils');

async function getProductImages(req, res, name) {
  try {
    if (!name) {
      throw new CustomError('o nome do produto deve ser fornecido', 200);
    }
    const product = await prisma.product.findUnique({
      where: { name },
      select: { id: true },
    });

    if (!product) {
      throw new CustomError('produto não encontrado', 200);
    }

    const images = await prisma.productImage.findMany({
      where: { product_id: product.id },
      select: {
        id: true,
        filename: true,
      },
      orderBy: { created_at: 'asc' },
    });

    return res.send(images);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = getProductImages;
