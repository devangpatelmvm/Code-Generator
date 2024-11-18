import { GraphQLResolveInfo } from "graphql";
import { DeleteOneComponentsArgs } from "./args/DeleteOneComponentsArgs";
import { Components } from "../../../models/Components";
export declare class DeleteOneComponentsResolver {
    deleteOneComponents(ctx: any, info: GraphQLResolveInfo, args: DeleteOneComponentsArgs): Promise<Components | null>;
}
