"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Columns_1 = require("../../../models/Columns");
const Projects_1 = require("../../../models/Projects");
const Tables_1 = require("../../../models/Tables");
const TablesColumnArgs_1 = require("./args/TablesColumnArgs");
const helpers_1 = require("../../../helpers");
let TablesRelationsResolver = class TablesRelationsResolver {
    async project(tables, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.findUnique({
            where: {
                id: tables.id,
            },
        }).project({});
    }
    async column(tables, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.findUnique({
            where: {
                id: tables.id,
            },
        }).column(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Projects_1.Projects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tables_1.Tables, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesRelationsResolver.prototype, "project", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Columns_1.Columns], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tables_1.Tables, Object, TablesColumnArgs_1.TablesColumnArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesRelationsResolver.prototype, "column", null);
TablesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], TablesRelationsResolver);
exports.TablesRelationsResolver = TablesRelationsResolver;
