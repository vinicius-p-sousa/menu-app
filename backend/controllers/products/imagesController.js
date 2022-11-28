const prisma = require('../../prisma/prismaClient');
const { handleErrors, customError } = require('../../utils/utils');

async function addNewImage(req, res) {
  try {
    const name = req.params.name;
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

    const imgs = req.files;

    if (!imgs) {
      throw new customError('nenhuma imagem foi enviada');
    }

    const images = imgs.map((img) => ({
      path: img.path,
      product_id: product.id,
    }));

    const newImages = await prisma.productImage.createMany({
      data: images,
    });
    return res.send('imagens adicionadas com sucesso');
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = { addNewImage };
