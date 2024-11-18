import { GraphQLResolveInfo } from "graphql";
import { AggregateComponentsArgs } from "./args/AggregateComponentsArgs";
import { CreateOneComponentsArgs } from "./args/CreateOneComponentsArgs";
import { DeleteManyComponentsArgs } from "./args/DeleteManyComponentsArgs";
import { DeleteOneComponentsArgs } from "./args/DeleteOneComponentsArgs";
import { FindFirstComponentsArgs } from "./args/FindFirstComponentsArgs";
import { FindManyComponentsArgs } from "./args/FindManyComponentsArgs";
import { FindUniqueComponentsArgs } from "./args/FindUniqueComponentsArgs";
import { GroupByComponentsArgs } from "./args/GroupByComponentsArgs";
import { UpdateManyComponentsArgs } from "./args/UpdateManyComponentsArgs";
import { UpdateOneComponentsArgs } from "./args/UpdateOneComponentsArgs";
import { UpsertOneComponentsArgs } from "./args/UpsertOneComponentsArgs";
import { Components } from "../../../models/Components";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateComponents } from "../../outputs/AggregateComponents";
import { ComponentsGroupBy } from "../../outputs/ComponentsGroupBy";
export declare class ComponentsCrudResolver {
    aggregateComponents(ctx: any, info: GraphQLResolveInfo, args: AggregateComponentsArgs): Promise<AggregateComponents>;
    createOneComponents(ctx: any, info: GraphQLResolveInfo, args: CreateOneComponentsArgs): Promise<Components>;
    deleteManyComponents(ctx: any, info: GraphQLResolveInfo, args: DeleteManyComponentsArgs): Promise<AffectedRowsOutput>;
    deleteOneComponents(ctx: any, info: GraphQLResolveInfo, args: DeleteOneComponentsArgs): Promise<Components | null>;
    findFirstComponents(ctx: any, info: GraphQLResolveInfo, args: FindFirstComponentsArgs): Promise<Components | null>;
    findManyComponents(ctx: any, info: GraphQLResolveInfo, args: FindManyComponentsArgs): Promise<Components[]>;
    findUniqueComponents(ctx: any, info: GraphQLResolveInfo, args: FindUniqueComponentsArgs): Promise<Components | null>;
    groupByComponents(ctx: any, info: GraphQLResolveInfo, args: GroupByComponentsArgs): Promise<ComponentsGroupBy[]>;
    updateManyComponents(ctx: any, info: GraphQLResolveInfo, args: UpdateManyComponentsArgs): Promise<AffectedRowsOutput>;
    updateOneComponents(ctx: any, info: GraphQLResolveInfo, args: UpdateOneComponentsArgs): Promise<Components | null>;
    upsertOneComponents(ctx: any, info: GraphQLResolveInfo, args: UpsertOneComponentsArgs): Promise<Components>;
}
