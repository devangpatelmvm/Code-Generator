import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCssArgs } from "./args/UpdateOneCssArgs";
import { Css } from "../../../models/Css";
export declare class UpdateOneCssResolver {
    updateOneCss(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCssArgs): Promise<Css | null>;
}
