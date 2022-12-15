const prisma = require('../../prisma/prismaClient');
const { handleErrors, CustomError } = require('../../utils/utils');

async function addNewImages(req, res, name) {
  try {
    if (!name) {
      throw new CustomError('o nome do produto deve ser fornecido');
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
      throw new CustomError('produto não encontrado', 404);
    }

    const imgs = req.files;

    if (!imgs) {
      throw new CustomError('nenhuma imagem foi enviada');
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

module.exports = addNewImages;
