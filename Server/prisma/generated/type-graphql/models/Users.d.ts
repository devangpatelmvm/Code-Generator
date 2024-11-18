import { Projects } from "../models/Projects";
import { User_roles } from "../models/User_roles";
import { UsersCount } from "../resolvers/outputs/UsersCount";
export declare class Users {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    createdAt: Date;
    user_roles?: User_roles | null;
    user_rolesId?: number | null;
    project?: Projects[];
    _count?: UsersCount | null;
}
