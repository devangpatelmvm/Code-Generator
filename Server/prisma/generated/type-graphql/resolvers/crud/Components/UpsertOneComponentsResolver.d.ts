import { GraphQLResolveInfo } from "graphql";
import { UpsertOneComponentsArgs } from "./args/UpsertOneComponentsArgs";
import { Components } from "../../../models/Components";
export declare class UpsertOneComponentsResolver {
    upsertOneComponents(ctx: any, info: GraphQLResolveInfo, args: UpsertOneComponentsArgs): Promise<Components>;
}
