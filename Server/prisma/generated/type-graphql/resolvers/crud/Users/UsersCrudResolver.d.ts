import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersArgs } from "./args/AggregateUsersArgs";
import { CreateOneUsersArgs } from "./args/CreateOneUsersArgs";
import { DeleteManyUsersArgs } from "./args/DeleteManyUsersArgs";
import { DeleteOneUsersArgs } from "./args/DeleteOneUsersArgs";
import { FindFirstUsersArgs } from "./args/FindFirstUsersArgs";
import { FindManyUsersArgs } from "./args/FindManyUsersArgs";
import { FindUniqueUsersArgs } from "./args/FindUniqueUsersArgs";
import { GroupByUsersArgs } from "./args/GroupByUsersArgs";
import { UpdateManyUsersArgs } from "./args/UpdateManyUsersArgs";
import { UpdateOneUsersArgs } from "./args/UpdateOneUsersArgs";
import { UpsertOneUsersArgs } from "./args/UpsertOneUsersArgs";
import { Users } from "../../../models/Users";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUsers } from "../../outputs/AggregateUsers";
import { UsersGroupBy } from "../../outputs/UsersGroupBy";
export declare class UsersCrudResolver {
    aggregateUsers(ctx: any, info: GraphQLResolveInfo, args: AggregateUsersArgs): Promise<AggregateUsers>;
    createOneUsers(ctx: any, info: GraphQLResolveInfo, args: CreateOneUsersArgs): Promise<Users>;
    deleteManyUsers(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUsersArgs): Promise<AffectedRowsOutput>;
    deleteOneUsers(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUsersArgs): Promise<Users | null>;
    findFirstUsers(ctx: any, info: GraphQLResolveInfo, args: FindFirstUsersArgs): Promise<Users | null>;
    findManyUsers(ctx: any, info: GraphQLResolveInfo, args: FindManyUsersArgs): Promise<Users[]>;
    findUniqueUsers(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUsersArgs): Promise<Users | null>;
    groupByUsers(ctx: any, info: GraphQLResolveInfo, args: GroupByUsersArgs): Promise<UsersGroupBy[]>;
    updateManyUsers(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUsersArgs): Promise<AffectedRowsOutput>;
    updateOneUsers(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUsersArgs): Promise<Users | null>;
    upsertOneUsers(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUsersArgs): Promise<Users>;
}
