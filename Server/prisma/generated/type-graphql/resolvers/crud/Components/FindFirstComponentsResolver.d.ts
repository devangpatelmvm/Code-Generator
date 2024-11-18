import { GraphQLResolveInfo } from "graphql";
import { FindFirstComponentsArgs } from "./args/FindFirstComponentsArgs";
import { Components } from "../../../models/Components";
export declare class FindFirstComponentsResolver {
    findFirstComponents(ctx: any, info: GraphQLResolveInfo, args: FindFirstComponentsArgs): Promise<Components | null>;
}
