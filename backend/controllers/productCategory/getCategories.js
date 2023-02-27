const prisma = require('../../prisma/prismaClient');
const { handleErrors, CustomError } = require('../../utils/utils');

async function getCategories(req, res) {
  try {
    const categories = await prisma.productCategory.findMany({ select: { name: true } });

    return res.send(categories);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

async function getProductsByCategory(req, res, category) {
  try {
    if (!category) {
      throw new CustomError('o categoria do produto deve ser enviado');
    }

    const products = await prisma.product.findMany({
      where: { category_name: category },
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

    return res.send(products);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = { getCategories, getProductsByCategory };
