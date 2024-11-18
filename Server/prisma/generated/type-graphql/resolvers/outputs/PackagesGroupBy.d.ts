import { PackagesAvgAggregate } from "../outputs/PackagesAvgAggregate";
import { PackagesCountAggregate } from "../outputs/PackagesCountAggregate";
import { PackagesMaxAggregate } from "../outputs/PackagesMaxAggregate";
import { PackagesMinAggregate } from "../outputs/PackagesMinAggregate";
import { PackagesSumAggregate } from "../outputs/PackagesSumAggregate";
export declare class PackagesGroupBy {
    id: number;
    name: string | null;
    version: string | null;
    projectId: number;
    _count: PackagesCountAggregate | null;
    _avg: PackagesAvgAggregate | null;
    _sum: PackagesSumAggregate | null;
    _min: PackagesMinAggregate | null;
    _max: PackagesMaxAggregate | null;
}
