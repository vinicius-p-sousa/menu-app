const prisma = require('./prismaClient');
const { hashPassword } = require('../utils/utils');

// prettier-ignore
async function main() {
  await prisma.admin.deleteMany();
  await prisma.productCategory.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  await Promise.all([
    // admins
    prisma.admin.create({
      data: {
        email: 'joao@email.com',
        name: 'João',
        password: hashPassword('@João1010'),
      },
    }),
    prisma.admin.create({
      data: {
        email: 'pedro@email.com',
        name: 'Pedro',
        password: hashPassword('@Pedro2020'),
      },
    }),
    prisma.admin.create({
      data: {
        email: 'carla@email.com',
        name: 'Carla',
        password: hashPassword('@Carla3030'),
      },
    }),
    prisma.admin.create({
      data: {
        email: 'roberto@email.com',
        name: 'Roberto',
        password: hashPassword('@Roberto4040'),
      },
    }),
    prisma.admin.create({
      data: {
        email: 'teste@email.com',
        name: 'Testador',
        password: hashPassword('teste123'),
      },
    }),
    // products category
    prisma.productCategory.create({
      data: {
        name: 'Pizza',
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Pizza doce',
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Bebida',
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Sobremesa',
      }
    }),
    prisma.productCategory.create({
      data: {
        name: 'Esfiha',
      }
    }),
    // products
    // Pizza
    prisma.product.create({
      data: {
        name: 'Frango e Catupiry',
        description: 'Uma deliciosa pizza com uma massa incrível, muito cheia e saborosa, feita no forma à lenha com os melhores ingredientes do mercado',
        ingredients: 'amor \n farinha \n molho de tomate \n queijo \n frango \n  catupiry',
        price: 79.99,
        available: true,
        category_name: 'Pizza',
      },
    }),
    prisma.product.create({
      data: {
        name: '4 Queijos',
        description: 'Uma deliciosa pizza com uma massa incrível, muito cheia e saborosa, feita no forma à lenha com os melhores ingredientes do mercado',
        ingredients: 'amor \n farinha \n molho de tomate \n muçarela \n parmesão \n catupiry \n provolone',
        price: 79.99,
        available: true,
        category_name: 'Pizza',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Calabresa',
        description: 'Uma deliciosa pizza com uma massa incrível, muito cheia e saborosa, feita no forma à lenha com os melhores ingredientes do mercado',
        ingredients: 'amor \n farinha \n molho de tomate \n calabresa \n oregano',
        price: 79.99,
        available: true,
        category_name: 'Pizza',
      },
    }),
    // Pizza Doce
    prisma.product.create({
      data: {
        name: 'Brigadeiro',
        description: 'Uma deliciosa pizza com uma massa incrível, muito cheia e saborosa, feita no forma à lenha com os melhores ingredientes do mercado',
        ingredients: 'amor \n farinha \n açúcar \n chocolate \n confetes',
        price: 89.99,
        available: true,
        category_name: 'Pizza doce',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Banana com caramelo',
        description: 'Uma deliciosa pizza com uma massa incrível, muito cheia e saborosa, feita no forma à lenha com os melhores ingredientes do mercado',
        ingredients: 'amor \n farinha \n açúcar \n banana \n caramelo',
        price: 89.99,
        available: true,
        category_name: 'Pizza doce',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Chocolate com morango',
        description: 'Uma deliciosa pizza com uma massa incrível, muito cheia e saborosa, feita no forma à lenha com os melhores ingredientes do mercado',
        ingredients: 'amor \n farinha \n açúcar \n chocolate \n morango',
        price: 89.99,
        available: true,
        category_name: 'Pizza doce',
      },
    }),
    // Bebidas
    prisma.product.create({
      data: {
        name: 'Coca-Cola',
        description: 'Sempre geladinha e refrescante, nossas bebidas são as melhores',
        ingredients: 'Coca-Cola',
        price: 19.99,
        available: true,
        category_name: 'Bebida',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Guarana',
        description: 'Sempre geladinha e refrescante, nossas bebidas são as melhores',
        ingredients: 'Guarana',
        price: 19.99,
        available: true,
        category_name: 'Bebida',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Sprite',
        description: 'Sempre geladinha e refrescante, nossas bebidas são as melhores',
        ingredients: 'Sprite',
        price: 19.99,
        available: true,
        category_name: 'Bebida',
      },
    }),
    // Sobremesa
    prisma.product.create({
      data: {
        name: 'Picolé',
        description: 'A melhor e mais saborosa sobremesa que você pode comer na terra',
        ingredients: 'picolé',
        price: 9.99,
        available: false,
        category_name: 'Sobremesa',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Brigadeirão',
        description: 'A melhor e mais saborosa sobremesa que você pode comer na terra',
        ingredients: 'chocolate \n leite condensado',
        price: 9.99,
        available: true,
        category_name: 'Sobremesa',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Bolo de pote',
        description: 'A melhor e mais saborosa sobremesa que você pode comer na terra',
        ingredients: 'bolo \n pote',
        price: 9.99,
        available: true,
        category_name: 'Sobremesa',
      },
    }),
    //Esfiha
    prisma.product.create({
      data: {
        name: 'Carne',
        description: 'Por qual razão você está buscando uma esfiha dentro de uma pizzaria?',
        ingredients: 'farinha \n carne',
        price: 11.99,
        available: false,
        category_name: 'Esfiha',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Frango e catupiry',
        description: 'Por qual razão você está buscando uma esfiha dentro de uma pizzaria?',
        ingredients: 'farinha \n frango \n catupiry',
        price: 11.99,
        available: false,
        category_name: 'Esfiha',
      },
    }),
    prisma.product.create({
      data: {
        name: 'calabresa',
        description: 'Por qual razão você está buscando uma esfiha dentro de uma pizzaria?',
        ingredients: 'farinha \n calabresa',
        price: 11.99,
        available: false,
        category_name: 'Esfiha',
      },
    }),
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
