import { GraphQLResolveInfo } from "graphql";
import { FindManyComponentsArgs } from "./args/FindManyComponentsArgs";
import { Components } from "../../../models/Components";
export declare class FindManyComponentsResolver {
    findManyComponents(ctx: any, info: GraphQLResolveInfo, args: FindManyComponentsArgs): Promise<Components[]>;
}
