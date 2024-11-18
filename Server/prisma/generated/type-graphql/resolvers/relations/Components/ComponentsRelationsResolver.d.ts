import { Components } from "../../../models/Components";
import { Css } from "../../../models/Css";
import { HtmlLines } from "../../../models/HtmlLines";
import { Projects } from "../../../models/Projects";
import { TsLines } from "../../../models/TsLines";
import { ComponentsCssArgs } from "./args/ComponentsCssArgs";
import { ComponentsHtmllineArgs } from "./args/ComponentsHtmllineArgs";
import { ComponentsTsLineArgs } from "./args/ComponentsTsLineArgs";
export declare class ComponentsRelationsResolver {
    htmlline(components: Components, ctx: any, args: ComponentsHtmllineArgs): Promise<HtmlLines[]>;
    tsLine(components: Components, ctx: any, args: ComponentsTsLineArgs): Promise<TsLines[]>;
    css(components: Components, ctx: any, args: ComponentsCssArgs): Promise<Css[]>;
    project(components: Components, ctx: any): Promise<Projects>;
}
