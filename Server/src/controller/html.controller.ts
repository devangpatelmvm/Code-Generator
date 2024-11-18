import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
class HtmlController{
    static insertIntoHtmlLines = async (line: any, id: number) => {
        return await prisma.htmlLines.create({
            data: {
                componentId: id,
                line: line
            }
        })
    }
    static getHtmlContent = async (componentId: number) => {
        return prisma.htmlLines.findMany({
            where: {
                componentId: componentId
            },
            select: {
                line: true
            }
        })
    }
}

export default HtmlController