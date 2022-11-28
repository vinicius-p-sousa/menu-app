const fs = require('fs');
const prisma = require('../../prisma/prismaClient');
const { customError, handleErrors } = require('../../utils/utils');

async function deleteProduct(req, res) {
  try {
    const productExists = await prisma.product.findUnique({
      where: {
        name: req.params.name,
      },
    });

    if (productExists === null) {
      throw new customError('Esse produto não existe', 404);
    }

    const { id: productId } = await prisma.product.findUnique({
      where: {
        name: req.params.name,
      },
      select: {
        id: true,
      },
    });

    const imagesPath = await prisma.productImage.findMany({
      where: {
        product_id: productId,
      },
    });

    await prisma.product.delete({
      where: {
        name: req.params.name,
      },
    });

    if (imagesPath) {
      imagesPath.forEach((image) => {
        fs.unlinkSync(image.path);
      });
    }

    return res.send('Produto deletado com sucesso');
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = { deleteProduct };
