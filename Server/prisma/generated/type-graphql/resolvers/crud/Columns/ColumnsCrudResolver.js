"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateColumnsArgs_1 = require("./args/AggregateColumnsArgs");
const CreateOneColumnsArgs_1 = require("./args/CreateOneColumnsArgs");
const DeleteManyColumnsArgs_1 = require("./args/DeleteManyColumnsArgs");
const DeleteOneColumnsArgs_1 = require("./args/DeleteOneColumnsArgs");
const FindFirstColumnsArgs_1 = require("./args/FindFirstColumnsArgs");
const FindManyColumnsArgs_1 = require("./args/FindManyColumnsArgs");
const FindUniqueColumnsArgs_1 = require("./args/FindUniqueColumnsArgs");
const GroupByColumnsArgs_1 = require("./args/GroupByColumnsArgs");
const UpdateManyColumnsArgs_1 = require("./args/UpdateManyColumnsArgs");
const UpdateOneColumnsArgs_1 = require("./args/UpdateOneColumnsArgs");
const UpsertOneColumnsArgs_1 = require("./args/UpsertOneColumnsArgs");
const helpers_1 = require("../../../helpers");
const Columns_1 = require("../../../models/Columns");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateColumns_1 = require("../../outputs/AggregateColumns");
const ColumnsGroupBy_1 = require("../../outputs/ColumnsGroupBy");
let ColumnsCrudResolver = class ColumnsCrudResolver {
    async aggregateColumns(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByColumns(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateColumns_1.AggregateColumns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateColumnsArgs_1.AggregateColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "aggregateColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Columns_1.Columns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneColumnsArgs_1.CreateOneColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "createOneColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyColumnsArgs_1.DeleteManyColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "deleteManyColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Columns_1.Columns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneColumnsArgs_1.DeleteOneColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "deleteOneColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Columns_1.Columns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstColumnsArgs_1.FindFirstColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "findFirstColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Columns_1.Columns], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyColumnsArgs_1.FindManyColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "findManyColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Columns_1.Columns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueColumnsArgs_1.FindUniqueColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "findUniqueColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ColumnsGroupBy_1.ColumnsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByColumnsArgs_1.GroupByColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "groupByColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyColumnsArgs_1.UpdateManyColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "updateManyColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Columns_1.Columns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneColumnsArgs_1.UpdateOneColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "updateOneColumns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Columns_1.Columns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneColumnsArgs_1.UpsertOneColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColumnsCrudResolver.prototype, "upsertOneColumns", null);
ColumnsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Columns_1.Columns)
], ColumnsCrudResolver);
exports.ColumnsCrudResolver = ColumnsCrudResolver;
