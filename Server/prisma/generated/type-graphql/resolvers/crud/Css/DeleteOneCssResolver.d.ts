import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCssArgs } from "./args/DeleteOneCssArgs";
import { Css } from "../../../models/Css";
export declare class DeleteOneCssResolver {
    deleteOneCss(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCssArgs): Promise<Css | null>;
}
