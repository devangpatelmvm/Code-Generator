import { GraphQLResolveInfo } from "graphql";
import { FindUniqueComponentsArgs } from "./args/FindUniqueComponentsArgs";
import { Components } from "../../../models/Components";
export declare class FindUniqueComponentsResolver {
    findUniqueComponents(ctx: any, info: GraphQLResolveInfo, args: FindUniqueComponentsArgs): Promise<Components | null>;
}
