import { GraphQLResolveInfo } from "graphql";
import { CreateOneCssArgs } from "./args/CreateOneCssArgs";
import { Css } from "../../../models/Css";
export declare class CreateOneCssResolver {
    createOneCss(ctx: any, info: GraphQLResolveInfo, args: CreateOneCssArgs): Promise<Css>;
}
