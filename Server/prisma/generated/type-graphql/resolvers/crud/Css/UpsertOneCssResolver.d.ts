import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCssArgs } from "./args/UpsertOneCssArgs";
import { Css } from "../../../models/Css";
export declare class UpsertOneCssResolver {
    upsertOneCss(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCssArgs): Promise<Css>;
}
