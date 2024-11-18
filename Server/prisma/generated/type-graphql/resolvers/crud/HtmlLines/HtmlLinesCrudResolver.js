"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateHtmlLinesArgs_1 = require("./args/AggregateHtmlLinesArgs");
const CreateOneHtmlLinesArgs_1 = require("./args/CreateOneHtmlLinesArgs");
const DeleteManyHtmlLinesArgs_1 = require("./args/DeleteManyHtmlLinesArgs");
const DeleteOneHtmlLinesArgs_1 = require("./args/DeleteOneHtmlLinesArgs");
const FindFirstHtmlLinesArgs_1 = require("./args/FindFirstHtmlLinesArgs");
const FindManyHtmlLinesArgs_1 = require("./args/FindManyHtmlLinesArgs");
const FindUniqueHtmlLinesArgs_1 = require("./args/FindUniqueHtmlLinesArgs");
const GroupByHtmlLinesArgs_1 = require("./args/GroupByHtmlLinesArgs");
const UpdateManyHtmlLinesArgs_1 = require("./args/UpdateManyHtmlLinesArgs");
const UpdateOneHtmlLinesArgs_1 = require("./args/UpdateOneHtmlLinesArgs");
const UpsertOneHtmlLinesArgs_1 = require("./args/UpsertOneHtmlLinesArgs");
const helpers_1 = require("../../../helpers");
const HtmlLines_1 = require("../../../models/HtmlLines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateHtmlLines_1 = require("../../outputs/AggregateHtmlLines");
const HtmlLinesGroupBy_1 = require("../../outputs/HtmlLinesGroupBy");
let HtmlLinesCrudResolver = class HtmlLinesCrudResolver {
    async aggregateHtmlLines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByHtmlLines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateHtmlLines_1.AggregateHtmlLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateHtmlLinesArgs_1.AggregateHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "aggregateHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => HtmlLines_1.HtmlLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneHtmlLinesArgs_1.CreateOneHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "createOneHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyHtmlLinesArgs_1.DeleteManyHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "deleteManyHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => HtmlLines_1.HtmlLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneHtmlLinesArgs_1.DeleteOneHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "deleteOneHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => HtmlLines_1.HtmlLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstHtmlLinesArgs_1.FindFirstHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "findFirstHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [HtmlLines_1.HtmlLines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyHtmlLinesArgs_1.FindManyHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "findManyHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => HtmlLines_1.HtmlLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueHtmlLinesArgs_1.FindUniqueHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "findUniqueHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [HtmlLinesGroupBy_1.HtmlLinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByHtmlLinesArgs_1.GroupByHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "groupByHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyHtmlLinesArgs_1.UpdateManyHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "updateManyHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => HtmlLines_1.HtmlLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneHtmlLinesArgs_1.UpdateOneHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "updateOneHtmlLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => HtmlLines_1.HtmlLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneHtmlLinesArgs_1.UpsertOneHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], HtmlLinesCrudResolver.prototype, "upsertOneHtmlLines", null);
HtmlLinesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => HtmlLines_1.HtmlLines)
], HtmlLinesCrudResolver);
exports.HtmlLinesCrudResolver = HtmlLinesCrudResolver;
