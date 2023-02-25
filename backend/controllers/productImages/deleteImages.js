const fs = require('fs');
const prisma = require('../../prisma/prismaClient');
const { handleErrors, CustomError } = require('../../utils/utils');

async function deleteImages(req, res, imageId) {
  try {
    const imageExists = await prisma.productImage.findUnique({ where: { id: imageId } });

    if (!imageExists) {
      throw new CustomError('imagem não encontrada', 200);
    }

    fs.unlink(imageExists.path, (err) => {
      if (err) {
        throw new CustomError('erro ao deletar imagem', 200);
      }
    });

    await prisma.productImage.delete({ where: { id: imageId } });

    return res.send('imagem deletada com sucesso');
  } catch (error) {
    return handleErrors(error, req, res);
  }
}

module.exports = deleteImages;
