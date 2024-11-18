import { GraphQLResolveInfo } from "graphql";
import { FindFirstCssArgs } from "./args/FindFirstCssArgs";
import { Css } from "../../../models/Css";
export declare class FindFirstCssResolver {
    findFirstCss(ctx: any, info: GraphQLResolveInfo, args: FindFirstCssArgs): Promise<Css | null>;
}
