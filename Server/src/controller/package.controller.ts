import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
class PackageController{
    static createPackages = async (data: any, projectId: any) => {
        return await prisma.packages.create({
            data: {
                name: data.name,
                version: data.version,
                projectId: projectId
            }
        })
    }



    static getPackages = async (projectId: number) => {
        return prisma.packages.findMany({ where: { projectId: projectId }, select: { name: true, version: true } })
    }
}

export default PackageController