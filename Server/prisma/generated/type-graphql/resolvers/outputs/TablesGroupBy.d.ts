import { TablesAvgAggregate } from "../outputs/TablesAvgAggregate";
import { TablesCountAggregate } from "../outputs/TablesCountAggregate";
import { TablesMaxAggregate } from "../outputs/TablesMaxAggregate";
import { TablesMinAggregate } from "../outputs/TablesMinAggregate";
import { TablesSumAggregate } from "../outputs/TablesSumAggregate";
export declare class TablesGroupBy {
    id: number;
    name: string | null;
    projectId: number;
    _count: TablesCountAggregate | null;
    _avg: TablesAvgAggregate | null;
    _sum: TablesSumAggregate | null;
    _min: TablesMinAggregate | null;
    _max: TablesMaxAggregate | null;
}
