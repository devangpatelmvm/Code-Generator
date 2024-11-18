import { ComponentsAvgAggregate } from "../outputs/ComponentsAvgAggregate";
import { ComponentsCountAggregate } from "../outputs/ComponentsCountAggregate";
import { ComponentsMaxAggregate } from "../outputs/ComponentsMaxAggregate";
import { ComponentsMinAggregate } from "../outputs/ComponentsMinAggregate";
import { ComponentsSumAggregate } from "../outputs/ComponentsSumAggregate";
export declare class ComponentsGroupBy {
    id: number;
    name: string;
    projectId: number;
    _count: ComponentsCountAggregate | null;
    _avg: ComponentsAvgAggregate | null;
    _sum: ComponentsSumAggregate | null;
    _min: ComponentsMinAggregate | null;
    _max: ComponentsMaxAggregate | null;
}
