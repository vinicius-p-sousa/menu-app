const prisma = require('../../prisma/prismaClient');
const { customError, handleErrors } = require('../../utils/utils');

async function createProduct(req, res) {
  try {
    const productExists = await prisma.product.findUnique({
      where: {
        name: req.body.name,
      },
    });

    const { name, description, ingredients, price: priceStg, available = true } = req.body;
    const images = req.files;

    if (productExists) {
      throw new customError('Esse produto já existe');
    }

    const price = parseFloat(priceStg.replace(',', '.'));

    if (!price) {
      throw new customError('Preço deve ser um número');
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        ingredients,
        price,
        available,
      },
    });

    if (images) {
      const imgs = images.map((img) => ({
        path: img.path,
        product_id: product.id,
      }));

      await prisma.productImage.createMany({
        data: imgs,
      });
    }

    return res.send('Produto criado com sucesso');
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = { createProduct };
