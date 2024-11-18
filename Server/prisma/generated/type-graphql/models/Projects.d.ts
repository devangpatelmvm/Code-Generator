import { Components } from "../models/Components";
import { Packages } from "../models/Packages";
import { Tables } from "../models/Tables";
import { Users } from "../models/Users";
import { ProjectsCount } from "../resolvers/outputs/ProjectsCount";
export declare class Projects {
    id: number;
    description?: string | null;
    name: string;
    provider?: string | null;
    url?: string | null;
    framework: string;
    Package?: Packages[];
    table?: Tables[];
    user?: Users;
    userId: number;
    Components?: Components[];
    _count?: ProjectsCount | null;
}
