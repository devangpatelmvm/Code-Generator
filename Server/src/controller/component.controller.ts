import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
class ComponentController{
    static createComponent = async (element: any, projectId: any) => {
        return await prisma.components.create({
            data: {
                name: element.componentName,
                projectId: projectId
            }
        })
    }

    static getComponents = async (projectId: number) => {
        return prisma.components.findMany({ where: { projectId: projectId } })
    }
}

export default ComponentController