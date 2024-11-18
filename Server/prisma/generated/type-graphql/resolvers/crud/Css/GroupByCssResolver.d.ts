import { GraphQLResolveInfo } from "graphql";
import { GroupByCssArgs } from "./args/GroupByCssArgs";
import { CssGroupBy } from "../../outputs/CssGroupBy";
export declare class GroupByCssResolver {
    groupByCss(ctx: any, info: GraphQLResolveInfo, args: GroupByCssArgs): Promise<CssGroupBy[]>;
}
