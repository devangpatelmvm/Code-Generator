import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCssArgs } from "./args/FindUniqueCssArgs";
import { Css } from "../../../models/Css";
export declare class FindUniqueCssResolver {
    css(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCssArgs): Promise<Css | null>;
}
