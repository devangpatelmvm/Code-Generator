import { GraphQLResolveInfo } from "graphql";
import { FindManyCssArgs } from "./args/FindManyCssArgs";
import { Css } from "../../../models/Css";
export declare class FindManyCssResolver {
    csses(ctx: any, info: GraphQLResolveInfo, args: FindManyCssArgs): Promise<Css[]>;
}
