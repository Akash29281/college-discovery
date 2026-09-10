-- CreateTable
CREATE TABLE "public"."College" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "fees" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "placement" DOUBLE PRECISION NOT NULL,
    "avgPackage" DOUBLE PRECISION NOT NULL,
    "overview" TEXT NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);
