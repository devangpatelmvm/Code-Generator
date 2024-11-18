import { User_rolesAvgOrderByAggregateInput } from "../inputs/User_rolesAvgOrderByAggregateInput";
import { User_rolesCountOrderByAggregateInput } from "../inputs/User_rolesCountOrderByAggregateInput";
import { User_rolesMaxOrderByAggregateInput } from "../inputs/User_rolesMaxOrderByAggregateInput";
import { User_rolesMinOrderByAggregateInput } from "../inputs/User_rolesMinOrderByAggregateInput";
import { User_rolesSumOrderByAggregateInput } from "../inputs/User_rolesSumOrderByAggregateInput";
export declare class User_rolesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    permissions?: "asc" | "desc" | undefined;
    _count?: User_rolesCountOrderByAggregateInput | undefined;
    _avg?: User_rolesAvgOrderByAggregateInput | undefined;
    _max?: User_rolesMaxOrderByAggregateInput | undefined;
    _min?: User_rolesMinOrderByAggregateInput | undefined;
    _sum?: User_rolesSumOrderByAggregateInput | undefined;
}
