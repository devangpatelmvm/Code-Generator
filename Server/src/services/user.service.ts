import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
class UserService {

    static createUser = async (data: any) => {
        return await prisma.users.create({
            data: data
        })
    }

    static getUserbyUserId = async (id: number) => {
        return await prisma.users.findUnique({
            where: { id: id }
        })
    }
    static getUserbyEmail = async (email: any, password: string) => {
        return await prisma.users.findFirst({
            where: {
                AND: [
                    { email: email },
                    { password: password }
                ]
            }
        })
    }
    static getUsers = async () => {
        return await prisma.users.findMany({})
    }


}

export default UserService