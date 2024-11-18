-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_rolesId" INTEGER,
    CONSTRAINT "Users_user_rolesId_fkey" FOREIGN KEY ("user_rolesId") REFERENCES "user_roles" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "permissions" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT,
    "name" TEXT NOT NULL,
    "provider" TEXT,
    "url" TEXT,
    "framework" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Packages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "version" TEXT,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Packages_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Components" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Components_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HtmlLines" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "line" TEXT,
    "componentId" INTEGER NOT NULL,
    CONSTRAINT "HtmlLines_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Components" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Css" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT,
    "componentId" INTEGER NOT NULL,
    CONSTRAINT "Css_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Components" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TsLines" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "line" TEXT,
    "componentId" INTEGER NOT NULL,
    CONSTRAINT "TsLines_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "Components" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tables" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Tables_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Columns" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "type" TEXT,
    "constraint" TEXT,
    "tableId" INTEGER NOT NULL,
    CONSTRAINT "Columns_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Tables" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
