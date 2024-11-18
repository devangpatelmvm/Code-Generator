import { Css } from "../models/Css";
import { HtmlLines } from "../models/HtmlLines";
import { Projects } from "../models/Projects";
import { TsLines } from "../models/TsLines";
import { ComponentsCount } from "../resolvers/outputs/ComponentsCount";
export declare class Components {
    id: number;
    name: string;
    htmlline?: HtmlLines[];
    tsLine?: TsLines[];
    css?: Css[];
    project?: Projects;
    projectId: number;
    _count?: ComponentsCount | null;
}
