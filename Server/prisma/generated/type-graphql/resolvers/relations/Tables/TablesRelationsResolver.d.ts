import { Columns } from "../../../models/Columns";
import { Projects } from "../../../models/Projects";
import { Tables } from "../../../models/Tables";
import { TablesColumnArgs } from "./args/TablesColumnArgs";
export declare class TablesRelationsResolver {
    project(tables: Tables, ctx: any): Promise<Projects>;
    column(tables: Tables, ctx: any, args: TablesColumnArgs): Promise<Columns[]>;
}
