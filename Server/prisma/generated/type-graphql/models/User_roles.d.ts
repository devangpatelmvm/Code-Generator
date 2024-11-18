import { Users } from "../models/Users";
import { User_rolesCount } from "../resolvers/outputs/User_rolesCount";
export declare class User_roles {
    id: number;
    name: string;
    permissions: string;
    users?: Users[];
    _count?: User_rolesCount | null;
}
