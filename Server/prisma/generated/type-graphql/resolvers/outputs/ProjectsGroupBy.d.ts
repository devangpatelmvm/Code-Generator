import { ProjectsAvgAggregate } from "../outputs/ProjectsAvgAggregate";
import { ProjectsCountAggregate } from "../outputs/ProjectsCountAggregate";
import { ProjectsMaxAggregate } from "../outputs/ProjectsMaxAggregate";
import { ProjectsMinAggregate } from "../outputs/ProjectsMinAggregate";
import { ProjectsSumAggregate } from "../outputs/ProjectsSumAggregate";
export declare class ProjectsGroupBy {
    id: number;
    description: string | null;
    name: string;
    provider: string | null;
    url: string | null;
    framework: string;
    userId: number;
    _count: ProjectsCountAggregate | null;
    _avg: ProjectsAvgAggregate | null;
    _sum: ProjectsSumAggregate | null;
    _min: ProjectsMinAggregate | null;
    _max: ProjectsMaxAggregate | null;
}
