import { GraphQLResolveInfo } from "graphql";
import { CreateOneComponentsArgs } from "./args/CreateOneComponentsArgs";
import { Components } from "../../../models/Components";
export declare class CreateOneComponentsResolver {
    createOneComponents(ctx: any, info: GraphQLResolveInfo, args: CreateOneComponentsArgs): Promise<Components>;
}
