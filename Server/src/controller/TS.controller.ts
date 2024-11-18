import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
class TsController{
    static insertIntoTsLines = async (line: any, id: any) => {
        return await prisma.tsLines.create({
            data: {
                componentId: id,
                line: line
            }
        })
    }

    static getTsContent = async (componentId: number) => {
        return prisma.tsLines.findMany({
            where: {
                componentId: componentId
            },
            select: { line: true }
        })
    }
}

export default TsController