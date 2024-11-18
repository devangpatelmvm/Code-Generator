import { GraphQLResolveInfo } from "graphql";
import { AggregateUser_rolesArgs } from "./args/AggregateUser_rolesArgs";
import { CreateOneUser_rolesArgs } from "./args/CreateOneUser_rolesArgs";
import { DeleteManyUser_rolesArgs } from "./args/DeleteManyUser_rolesArgs";
import { DeleteOneUser_rolesArgs } from "./args/DeleteOneUser_rolesArgs";
import { FindFirstUser_rolesArgs } from "./args/FindFirstUser_rolesArgs";
import { FindManyUser_rolesArgs } from "./args/FindManyUser_rolesArgs";
import { FindUniqueUser_rolesArgs } from "./args/FindUniqueUser_rolesArgs";
import { GroupByUser_rolesArgs } from "./args/GroupByUser_rolesArgs";
import { UpdateManyUser_rolesArgs } from "./args/UpdateManyUser_rolesArgs";
import { UpdateOneUser_rolesArgs } from "./args/UpdateOneUser_rolesArgs";
import { UpsertOneUser_rolesArgs } from "./args/UpsertOneUser_rolesArgs";
import { User_roles } from "../../../models/User_roles";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser_roles } from "../../outputs/AggregateUser_roles";
import { User_rolesGroupBy } from "../../outputs/User_rolesGroupBy";
export declare class User_rolesCrudResolver {
    aggregateUser_roles(ctx: any, info: GraphQLResolveInfo, args: AggregateUser_rolesArgs): Promise<AggregateUser_roles>;
    createOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: CreateOneUser_rolesArgs): Promise<User_roles>;
    deleteManyUser_roles(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUser_rolesArgs): Promise<AffectedRowsOutput>;
    deleteOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUser_rolesArgs): Promise<User_roles | null>;
    findFirstUser_roles(ctx: any, info: GraphQLResolveInfo, args: FindFirstUser_rolesArgs): Promise<User_roles | null>;
    findManyUser_roles(ctx: any, info: GraphQLResolveInfo, args: FindManyUser_rolesArgs): Promise<User_roles[]>;
    findUniqueUser_roles(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUser_rolesArgs): Promise<User_roles | null>;
    groupByUser_roles(ctx: any, info: GraphQLResolveInfo, args: GroupByUser_rolesArgs): Promise<User_rolesGroupBy[]>;
    updateManyUser_roles(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUser_rolesArgs): Promise<AffectedRowsOutput>;
    updateOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUser_rolesArgs): Promise<User_roles | null>;
    upsertOneUser_roles(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUser_rolesArgs): Promise<User_roles>;
}
