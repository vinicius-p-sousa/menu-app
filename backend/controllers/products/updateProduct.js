const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function updateProduct(req, res) {
  try {
    const productExists = await prisma.product.findUnique({
      where: {
        name: req.params.name,
      },
    });

    if (productExists === null) {
      throw new CustomError('Esse produto não existe', 404);
    }

    const { name, description, ingredients, available = true } = req.body;

    const price = parseFloat(req.body.price.replace(',', '.'));

    if (!price) {
      throw new CustomError('Preço inválido');
    }

    if (!category) {
      throw new CustomError('categoria deve ser enviada');
    }

    const categoryExists = await prisma.productCategory.findUnique({
      where: {
        name: category,
      },
    });

    if (categoryExists === null) {
      throw new CustomError('categoria do produto não existente');
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
        category_name: category,
      },
      select: {
        name: true,
        description: true,
        ingredients: true,
        price: true,
        available: true,
        category_name: true,
      },
    });
    return res.send(product);
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = updateProduct;
