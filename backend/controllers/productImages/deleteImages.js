const prisma = require('../../prisma/prismaClient');
const { handleErrors, CustomError } = require('../../utils/utils');
const fs = require('fs');

async function deleteImages(req, res, imageId) {
  try {
    if (!imageId) {
      throw new CustomError('o id da imagem deve ser fornecido', 200);
    }

    imageId = parseInt(imageId);

    if (isNaN(imageId)) {
      throw new CustomError('o id da imagem deve ser um número', 200);
    }

    const imageExists = await prisma.productImage.findUnique({
      where: {
        id: imageId,
      },
    });

    if (!imageExists) {
      throw new CustomError('imagem não encontrada', 200);
    }

    fs.unlink(imageExists.path, (err) => {
      if (err) {
        throw new CustomError('erro ao deletar imagem', 200);
      }
    });

    const deleteImage = await prisma.productImage.delete({
      where: {
        id: imageId,
      },
    });

    return res.send('imagem deletada com sucesso');
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = deleteImages;
