const prisma = require('../../prisma/prismaClient');
const { CustomError, handleErrors } = require('../../utils/utils');

async function getStatistics(req, res) {
  try {
    const amountOfAvailableProducts = await prisma.product.count({
      where: {
        available: true,
      },
    });

    const amountOfUnavailableProducts = await prisma.product.count({
      where: {
        available: true,
      },
    });

    const amountOfAdmins = await prisma.admin.count();

    const amountOfCategories = await prisma.$queryRaw`
      SELECT
      PC.name,
      (
        SELECT cast(count(*) as float) 
        FROM products P 
        WHERE PC.name = P.category_name
      ) as amountOfCategory
      FROM product_category PC 
    `;

    return res.send({
      availableProducts: amountOfAvailableProducts,
      unavailableProducts: amountOfAvailableProducts,
      admins: amountOfAdmins,
      amountOfCategories,
    });
  } catch (error) {
    handleErrors(error, req, res);
  }
}

module.exports = getStatistics;
