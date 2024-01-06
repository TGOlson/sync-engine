-- CreateTable
CREATE TABLE "TodoItem" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "hidden" BOOLEAN NOT NULL,

    CONSTRAINT "TodoItem_pkey" PRIMARY KEY ("id")
);
