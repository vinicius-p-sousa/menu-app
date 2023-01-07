const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function createProduct(req, res) {
  try {
    const productExists = await prisma.product.findUnique({
      where: {
        name: req.body.name,
      },
    });

    if (productExists) {
      throw new CustomError('Esse produto já existe', 200);
    }

    const { name, description, ingredients, price: priceStg, available = true } = req.body;
    const category = req.body.category.toLowerCase();
    const images = req.files;

    const price = parseFloat(priceStg.replace(',', '.'));

    if (!price) {
      throw new CustomError('Preço deve ser um número', 200);
    }

    if (!category) {
      throw new CustomError('categoria deve ser enviada', 200);
    }

    const categoryExists = await prisma.productCategory.findUnique({
      where: {
        name: category,
      },
    });

    if (categoryExists === null) {
      throw new CustomError('categoria do produto não existente', 200);
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        ingredients,
        price,
        available,
        category_name: category,
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

module.exports = createProduct;
