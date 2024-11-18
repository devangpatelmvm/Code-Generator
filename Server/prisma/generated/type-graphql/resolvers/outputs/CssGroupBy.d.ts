import { CssAvgAggregate } from "../outputs/CssAvgAggregate";
import { CssCountAggregate } from "../outputs/CssCountAggregate";
import { CssMaxAggregate } from "../outputs/CssMaxAggregate";
import { CssMinAggregate } from "../outputs/CssMinAggregate";
import { CssSumAggregate } from "../outputs/CssSumAggregate";
export declare class CssGroupBy {
    id: number;
    content: string | null;
    componentId: number;
    _count: CssCountAggregate | null;
    _avg: CssAvgAggregate | null;
    _sum: CssSumAggregate | null;
    _min: CssMinAggregate | null;
    _max: CssMaxAggregate | null;
}
