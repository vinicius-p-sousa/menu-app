const prisma = require('../../prisma/prismaClient');
const { handleErrors, CustomError } = require('../../utils/utils');

async function addNewImage(req, res) {
  try {
    const { name } = req.params;
    if (!name) {
      throw new CustomError('o nome do produto deve ser fornecido', 200);
    }

    const product = await prisma.product.findUnique({
      where: { name },
      select: { id: true },
    });

    if (!product) {
      throw new CustomError('produto não encontrado', 200);
    }

    const { imgs } = req.files;

    const images = imgs.map((img) => ({
      name: img.filename,
      path: img.path,
      productId: product.id,
    }));

    await prisma.image.createMany({ data: images });
    return res.send('imagens adicionadas com sucesso');
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = { addNewImage };
