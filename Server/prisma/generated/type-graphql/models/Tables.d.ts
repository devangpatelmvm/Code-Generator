import { Columns } from "../models/Columns";
import { Projects } from "../models/Projects";
import { TablesCount } from "../resolvers/outputs/TablesCount";
export declare class Tables {
    id: number;
    name?: string | null;
    project?: Projects;
    projectId: number;
    column?: Columns[];
    _count?: TablesCount | null;
}
