"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Components_1 = require("../../../models/Components");
const Css_1 = require("../../../models/Css");
const HtmlLines_1 = require("../../../models/HtmlLines");
const Projects_1 = require("../../../models/Projects");
const TsLines_1 = require("../../../models/TsLines");
const ComponentsCssArgs_1 = require("./args/ComponentsCssArgs");
const ComponentsHtmllineArgs_1 = require("./args/ComponentsHtmllineArgs");
const ComponentsTsLineArgs_1 = require("./args/ComponentsTsLineArgs");
const helpers_1 = require("../../../helpers");
let ComponentsRelationsResolver = class ComponentsRelationsResolver {
    async htmlline(components, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findUnique({
            where: {
                id: components.id,
            },
        }).htmlline(args);
    }
    async tsLine(components, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findUnique({
            where: {
                id: components.id,
            },
        }).tsLine(args);
    }
    async css(components, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findUnique({
            where: {
                id: components.id,
            },
        }).css(args);
    }
    async project(components, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findUnique({
            where: {
                id: components.id,
            },
        }).project({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [HtmlLines_1.HtmlLines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Components_1.Components, Object, ComponentsHtmllineArgs_1.ComponentsHtmllineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsRelationsResolver.prototype, "htmlline", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TsLines_1.TsLines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Components_1.Components, Object, ComponentsTsLineArgs_1.ComponentsTsLineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsRelationsResolver.prototype, "tsLine", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Css_1.Css], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Components_1.Components, Object, ComponentsCssArgs_1.ComponentsCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsRelationsResolver.prototype, "css", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Projects_1.Projects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Components_1.Components, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsRelationsResolver.prototype, "project", null);
ComponentsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Components_1.Components)
], ComponentsRelationsResolver);
exports.ComponentsRelationsResolver = ComponentsRelationsResolver;
