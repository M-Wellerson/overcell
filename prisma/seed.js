const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const phone = await prisma.product.upsert({
        where: { id: '3131' },
        update: {},
        create: {
            code: '3131',
            name: 'Fone de Ouvido JBL',
            quantity: 120,
            sale_value: 10.00,
            buy_value: 200.00,
            CategorieId: '1',
        },
    })

    const cape = await prisma.product.upsert({
        where: { id: '2121' },
        update: {},
        create: {
            code: '2121',
            name: 'Capa 3D Iphone',
            quantity: 30,
            sale_value: 7.00,
            buy_value: 10.00,
            CategorieId: '3',
        },
    })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })