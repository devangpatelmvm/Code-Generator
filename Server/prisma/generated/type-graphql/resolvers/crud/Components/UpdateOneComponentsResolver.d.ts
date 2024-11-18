import { GraphQLResolveInfo } from "graphql";
import { UpdateOneComponentsArgs } from "./args/UpdateOneComponentsArgs";
import { Components } from "../../../models/Components";
export declare class UpdateOneComponentsResolver {
    updateOneComponents(ctx: any, info: GraphQLResolveInfo, args: UpdateOneComponentsArgs): Promise<Components | null>;
}
