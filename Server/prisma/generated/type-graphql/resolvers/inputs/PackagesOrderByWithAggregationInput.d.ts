import { PackagesAvgOrderByAggregateInput } from "../inputs/PackagesAvgOrderByAggregateInput";
import { PackagesCountOrderByAggregateInput } from "../inputs/PackagesCountOrderByAggregateInput";
import { PackagesMaxOrderByAggregateInput } from "../inputs/PackagesMaxOrderByAggregateInput";
import { PackagesMinOrderByAggregateInput } from "../inputs/PackagesMinOrderByAggregateInput";
import { PackagesSumOrderByAggregateInput } from "../inputs/PackagesSumOrderByAggregateInput";
export declare class PackagesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    version?: "asc" | "desc" | undefined;
    projectId?: "asc" | "desc" | undefined;
    _count?: PackagesCountOrderByAggregateInput | undefined;
    _avg?: PackagesAvgOrderByAggregateInput | undefined;
    _max?: PackagesMaxOrderByAggregateInput | undefined;
    _min?: PackagesMinOrderByAggregateInput | undefined;
    _sum?: PackagesSumOrderByAggregateInput | undefined;
}
