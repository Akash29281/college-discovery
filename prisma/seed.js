const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "LNCT Bhopal",
        location: "Bhopal",
        fees: 80000,
        rating: 4.2,
        placement: 85,
        avgPackage: 600000,
        overview: "Top private college in Bhopal."
      },
      {
        name: "LPU",
        location: "Punjab",
        fees: 120000,
        rating: 4.5,
        placement: 90,
        avgPackage: 700000,
        overview: "Large private university with strong placements."
      },
      {
        name: "VIT Vellore",
        location: "Tamil Nadu",
        fees: 140000,
        rating: 4.8,
        placement: 95,
        avgPackage: 900000,
        overview: "One of India's top private engineering institutes."
      },
      {
        name: "SRM KTR",
        location: "Chennai",
        fees: 130000,
        rating: 4.4,
        placement: 88,
        avgPackage: 750000,
        overview: "Popular private university with strong industry ties."
      }
    ]
  });

  console.log("Seed completed");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());