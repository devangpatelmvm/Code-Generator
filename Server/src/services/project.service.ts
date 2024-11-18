import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
class ProjectService {
    static createProject = async (projectData: any) => {
        return await prisma.projects.create({
            data: projectData
        })
    }
    static getProjectByProjectId = async (id: number, userId: number) => {
        return await prisma.projects.findFirst({
            where: {
                AND: [
                    { id: id },
                    { userId: userId }
                ]
            }
        })
    }
    static getProjectByUserId = async (userId: number) => {
        return await prisma.projects.findMany({
            where: { userId: userId },
            select: {
                name: true,
                id: true,
                userId: true,
                framework: true,

            }

        })
    }


}

export default ProjectService