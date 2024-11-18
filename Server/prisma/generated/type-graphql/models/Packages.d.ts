import { Projects } from "../models/Projects";
export declare class Packages {
    id: number;
    name?: string | null;
    version?: string | null;
    project?: Projects;
    projectId: number;
}
