import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
class CssController{
    static insertIntoCss = async (line: any, id: any) => {
        return await prisma.css.create({
            data: {
                componentId: id,
                content: line
            }
        })
    }
    
    static getCssContent = async (componentId: number) => {
        return prisma.css.findMany({
            where: {
                componentId: componentId
            },
            select: { content: true }
        })
    }
}

export default CssController