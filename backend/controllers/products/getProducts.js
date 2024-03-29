const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function getProducts(req, res) {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    const products = await prisma.product.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { name: 'asc' },
      select: {
        name: true,
        description: true,
        ingredients: true,
        price: true,
        available: true,
        category_name: true,
        images: {
          select: {
            id: true,
            filename: true,
          },
          take: 1,
        },
      },
    });

    if (!products) {
      throw new CustomError('produto não encontrado', 200);
    }

    return res.send(products);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

async function getProductByName(req, res, receivedName) {
  try {
    if (!receivedName) {
      throw new CustomError('o nome do produto deve ser enviado');
    }

    const product = await prisma.product.findUnique({
      where: { name: receivedName },
      select: {
        name: true,
        description: true,
        ingredients: true,
        price: true,
        available: true,
        category_name: true,
        images: {
          select: {
            id: true,
            filename: true,
          },
        },
      },
    });

    if (!product) {
      throw new CustomError('produto não encontrado', 200);
    }

    return res.send(product);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = { getProducts, getProductByName };
