import { GraphQLResolveInfo } from "graphql";
import { AggregateCssArgs } from "./args/AggregateCssArgs";
import { CreateOneCssArgs } from "./args/CreateOneCssArgs";
import { DeleteManyCssArgs } from "./args/DeleteManyCssArgs";
import { DeleteOneCssArgs } from "./args/DeleteOneCssArgs";
import { FindFirstCssArgs } from "./args/FindFirstCssArgs";
import { FindManyCssArgs } from "./args/FindManyCssArgs";
import { FindUniqueCssArgs } from "./args/FindUniqueCssArgs";
import { GroupByCssArgs } from "./args/GroupByCssArgs";
import { UpdateManyCssArgs } from "./args/UpdateManyCssArgs";
import { UpdateOneCssArgs } from "./args/UpdateOneCssArgs";
import { UpsertOneCssArgs } from "./args/UpsertOneCssArgs";
import { Css } from "../../../models/Css";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCss } from "../../outputs/AggregateCss";
import { CssGroupBy } from "../../outputs/CssGroupBy";
export declare class CssCrudResolver {
    aggregateCss(ctx: any, info: GraphQLResolveInfo, args: AggregateCssArgs): Promise<AggregateCss>;
    createOneCss(ctx: any, info: GraphQLResolveInfo, args: CreateOneCssArgs): Promise<Css>;
    deleteManyCss(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCssArgs): Promise<AffectedRowsOutput>;
    deleteOneCss(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCssArgs): Promise<Css | null>;
    findFirstCss(ctx: any, info: GraphQLResolveInfo, args: FindFirstCssArgs): Promise<Css | null>;
    csses(ctx: any, info: GraphQLResolveInfo, args: FindManyCssArgs): Promise<Css[]>;
    css(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCssArgs): Promise<Css | null>;
    groupByCss(ctx: any, info: GraphQLResolveInfo, args: GroupByCssArgs): Promise<CssGroupBy[]>;
    updateManyCss(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCssArgs): Promise<AffectedRowsOutput>;
    updateOneCss(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCssArgs): Promise<Css | null>;
    upsertOneCss(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCssArgs): Promise<Css>;
}
