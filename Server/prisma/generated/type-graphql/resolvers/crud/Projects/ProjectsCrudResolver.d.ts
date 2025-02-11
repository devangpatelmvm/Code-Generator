import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectsArgs } from "./args/AggregateProjectsArgs";
import { CreateOneProjectsArgs } from "./args/CreateOneProjectsArgs";
import { DeleteManyProjectsArgs } from "./args/DeleteManyProjectsArgs";
import { DeleteOneProjectsArgs } from "./args/DeleteOneProjectsArgs";
import { FindFirstProjectsArgs } from "./args/FindFirstProjectsArgs";
import { FindManyProjectsArgs } from "./args/FindManyProjectsArgs";
import { FindUniqueProjectsArgs } from "./args/FindUniqueProjectsArgs";
import { GroupByProjectsArgs } from "./args/GroupByProjectsArgs";
import { UpdateManyProjectsArgs } from "./args/UpdateManyProjectsArgs";
import { UpdateOneProjectsArgs } from "./args/UpdateOneProjectsArgs";
import { UpsertOneProjectsArgs } from "./args/UpsertOneProjectsArgs";
import { Projects } from "../../../models/Projects";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProjects } from "../../outputs/AggregateProjects";
import { ProjectsGroupBy } from "../../outputs/ProjectsGroupBy";
export declare class ProjectsCrudResolver {
    aggregateProjects(ctx: any, info: GraphQLResolveInfo, args: AggregateProjectsArgs): Promise<AggregateProjects>;
    createOneProjects(ctx: any, info: GraphQLResolveInfo, args: CreateOneProjectsArgs): Promise<Projects>;
    deleteManyProjects(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProjectsArgs): Promise<AffectedRowsOutput>;
    deleteOneProjects(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProjectsArgs): Promise<Projects | null>;
    findFirstProjects(ctx: any, info: GraphQLResolveInfo, args: FindFirstProjectsArgs): Promise<Projects | null>;
    findManyProjects(ctx: any, info: GraphQLResolveInfo, args: FindManyProjectsArgs): Promise<Projects[]>;
    findUniqueProjects(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProjectsArgs): Promise<Projects | null>;
    groupByProjects(ctx: any, info: GraphQLResolveInfo, args: GroupByProjectsArgs): Promise<ProjectsGroupBy[]>;
    updateManyProjects(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProjectsArgs): Promise<AffectedRowsOutput>;
    updateOneProjects(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProjectsArgs): Promise<Projects | null>;
    upsertOneProjects(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProjectsArgs): Promise<Projects>;
}
