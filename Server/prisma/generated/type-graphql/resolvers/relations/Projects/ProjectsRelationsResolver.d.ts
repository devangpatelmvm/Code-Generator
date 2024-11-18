import { Components } from "../../../models/Components";
import { Packages } from "../../../models/Packages";
import { Projects } from "../../../models/Projects";
import { Tables } from "../../../models/Tables";
import { Users } from "../../../models/Users";
import { ProjectsComponentsArgs } from "./args/ProjectsComponentsArgs";
import { ProjectsPackageArgs } from "./args/ProjectsPackageArgs";
import { ProjectsTableArgs } from "./args/ProjectsTableArgs";
export declare class ProjectsRelationsResolver {
    Package(projects: Projects, ctx: any, args: ProjectsPackageArgs): Promise<Packages[]>;
    table(projects: Projects, ctx: any, args: ProjectsTableArgs): Promise<Tables[]>;
    user(projects: Projects, ctx: any): Promise<Users>;
    Components(projects: Projects, ctx: any, args: ProjectsComponentsArgs): Promise<Components[]>;
}
