import { Projects } from "../../../models/Projects";
import { User_roles } from "../../../models/User_roles";
import { Users } from "../../../models/Users";
import { UsersProjectArgs } from "./args/UsersProjectArgs";
export declare class UsersRelationsResolver {
    user_roles(users: Users, ctx: any): Promise<User_roles | null>;
    project(users: Users, ctx: any, args: UsersProjectArgs): Promise<Projects[]>;
}
