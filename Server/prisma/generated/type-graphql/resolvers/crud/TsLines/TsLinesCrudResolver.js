"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTsLinesArgs_1 = require("./args/AggregateTsLinesArgs");
const CreateOneTsLinesArgs_1 = require("./args/CreateOneTsLinesArgs");
const DeleteManyTsLinesArgs_1 = require("./args/DeleteManyTsLinesArgs");
const DeleteOneTsLinesArgs_1 = require("./args/DeleteOneTsLinesArgs");
const FindFirstTsLinesArgs_1 = require("./args/FindFirstTsLinesArgs");
const FindManyTsLinesArgs_1 = require("./args/FindManyTsLinesArgs");
const FindUniqueTsLinesArgs_1 = require("./args/FindUniqueTsLinesArgs");
const GroupByTsLinesArgs_1 = require("./args/GroupByTsLinesArgs");
const UpdateManyTsLinesArgs_1 = require("./args/UpdateManyTsLinesArgs");
const UpdateOneTsLinesArgs_1 = require("./args/UpdateOneTsLinesArgs");
const UpsertOneTsLinesArgs_1 = require("./args/UpsertOneTsLinesArgs");
const helpers_1 = require("../../../helpers");
const TsLines_1 = require("../../../models/TsLines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTsLines_1 = require("../../outputs/AggregateTsLines");
const TsLinesGroupBy_1 = require("../../outputs/TsLinesGroupBy");
let TsLinesCrudResolver = class TsLinesCrudResolver {
    async aggregateTsLines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTsLines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTsLines_1.AggregateTsLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTsLinesArgs_1.AggregateTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "aggregateTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TsLines_1.TsLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTsLinesArgs_1.CreateOneTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "createOneTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTsLinesArgs_1.DeleteManyTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "deleteManyTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TsLines_1.TsLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTsLinesArgs_1.DeleteOneTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "deleteOneTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TsLines_1.TsLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTsLinesArgs_1.FindFirstTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "findFirstTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TsLines_1.TsLines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTsLinesArgs_1.FindManyTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "findManyTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TsLines_1.TsLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTsLinesArgs_1.FindUniqueTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "findUniqueTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TsLinesGroupBy_1.TsLinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTsLinesArgs_1.GroupByTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "groupByTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTsLinesArgs_1.UpdateManyTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "updateManyTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TsLines_1.TsLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTsLinesArgs_1.UpdateOneTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "updateOneTsLines", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TsLines_1.TsLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTsLinesArgs_1.UpsertOneTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TsLinesCrudResolver.prototype, "upsertOneTsLines", null);
TsLinesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TsLines_1.TsLines)
], TsLinesCrudResolver);
exports.TsLinesCrudResolver = TsLinesCrudResolver;
