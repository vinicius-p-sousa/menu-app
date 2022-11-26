const prisma = require('../prisma/prismaClient');
const logger = require('../logger');

async function getProducts(req, res) {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  try {
    const products = await prisma.product.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        name: 'asc',
      },
      select: {
        name: true,
        description: true,
        ingredients: true,
        price: true,
        available: true,
      },
    });

    if (!products) {
      return res.status(404).send('Products not found');
    }

    return res.send(products);
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
}

async function getProductByName(req, res, name) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        name,
      },
      select: {
        name: true,
        description: true,
        ingredients: true,
        price: true,
        available: true,
      },
    });

    if (!product) {
      return res.status(404).send('Product not found');
    }

    return res.send(product);
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
}

async function createProduct(req, res) {
  const productExists = await prisma.product.findUnique({
    where: {
      name: req.body.name,
    },
  });

  if (productExists) {
    return res.status(400).send('Esse produto já existe');
  }

  const { name, description, ingredients, price, available = true } = req.body;
  const images = req.files;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        ingredients,
        price: parseFloat(price),
        available,
      },
    });

    if (images) {
      const imgs = images.map((img) => ({
        path: img.path,
        product_id: product.id,
        cover: false,
      }));

      await prisma.productImage.createMany({
        data: imgs,
      });
    }

    return res.send('Produto criado com sucesso');
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
}

async function updateProduct(req, res) {
  const productExists = await prisma.product.findUnique({
    where: {
      name: req.params.name,
    },
  });

  if (productExists === null) {
    return res.status(400).send('Esse produto não existe');
  }

  const { name, description, ingredients, available = true } = req.body;
  const price = parseFloat(req.body.price.replace(',', '.'));

  if (!price) {
    return res.status(400).send('Preço inválido');
  }

  try {
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
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
}

async function deleteProduct(req, res) {
  const productExists = await prisma.product.findUnique({
    where: {
      name: req.params.name,
    },
  });

  if (productExists === null) {
    return res.status(400).send('Esse produto não existe');
  }

  try {
    await prisma.product.delete({
      where: {
        name: req.params.name,
      },
    });
    return res.send('Produto deletado com sucesso');
  } catch (error) {
    logger.error(error);
    return res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getProducts,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
