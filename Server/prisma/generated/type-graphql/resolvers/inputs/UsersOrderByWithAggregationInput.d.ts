import { UsersAvgOrderByAggregateInput } from "../inputs/UsersAvgOrderByAggregateInput";
import { UsersCountOrderByAggregateInput } from "../inputs/UsersCountOrderByAggregateInput";
import { UsersMaxOrderByAggregateInput } from "../inputs/UsersMaxOrderByAggregateInput";
import { UsersMinOrderByAggregateInput } from "../inputs/UsersMinOrderByAggregateInput";
import { UsersSumOrderByAggregateInput } from "../inputs/UsersSumOrderByAggregateInput";
export declare class UsersOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    user_rolesId?: "asc" | "desc" | undefined;
    _count?: UsersCountOrderByAggregateInput | undefined;
    _avg?: UsersAvgOrderByAggregateInput | undefined;
    _max?: UsersMaxOrderByAggregateInput | undefined;
    _min?: UsersMinOrderByAggregateInput | undefined;
    _sum?: UsersSumOrderByAggregateInput | undefined;
}
