import { ColumnsAvgAggregate } from "../outputs/ColumnsAvgAggregate";
import { ColumnsCountAggregate } from "../outputs/ColumnsCountAggregate";
import { ColumnsMaxAggregate } from "../outputs/ColumnsMaxAggregate";
import { ColumnsMinAggregate } from "../outputs/ColumnsMinAggregate";
import { ColumnsSumAggregate } from "../outputs/ColumnsSumAggregate";
export declare class AggregateColumns {
    _count: ColumnsCountAggregate | null;
    _avg: ColumnsAvgAggregate | null;
    _sum: ColumnsSumAggregate | null;
    _min: ColumnsMinAggregate | null;
    _max: ColumnsMaxAggregate | null;
}
