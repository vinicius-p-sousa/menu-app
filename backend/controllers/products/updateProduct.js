const prisma = require('../../prisma/prismaClient');
const { customError, handleErrors } = require('../../utils/utils');

async function updateProduct(req, res) {
  try {
    const productExists = await prisma.product.findUnique({
      where: {
        name: req.params.name,
      },
    });

    if (productExists === null) {
      throw new customError('Esse produto não existe', 404);
    }

    const { name, description, ingredients, available = true } = req.body;
    const price = parseFloat(req.body.price.replace(',', '.'));

    if (!price) {
      throw new customError('Preço inválido');
    }

    const product = await prisma.product.update({
      where: {
        name: req.params.name,
      },
      data: {
        name,
        description,
        ingredients,
        price,
        available,
      },
      select: {
        name: true,
        description: true,
        ingredients: true,
        price: true,
        available: true,
      },
    });
    return res.send(product);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = updateProduct;
