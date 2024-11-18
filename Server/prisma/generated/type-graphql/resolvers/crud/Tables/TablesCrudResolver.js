"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTablesArgs_1 = require("./args/AggregateTablesArgs");
const CreateOneTablesArgs_1 = require("./args/CreateOneTablesArgs");
const DeleteManyTablesArgs_1 = require("./args/DeleteManyTablesArgs");
const DeleteOneTablesArgs_1 = require("./args/DeleteOneTablesArgs");
const FindFirstTablesArgs_1 = require("./args/FindFirstTablesArgs");
const FindManyTablesArgs_1 = require("./args/FindManyTablesArgs");
const FindUniqueTablesArgs_1 = require("./args/FindUniqueTablesArgs");
const GroupByTablesArgs_1 = require("./args/GroupByTablesArgs");
const UpdateManyTablesArgs_1 = require("./args/UpdateManyTablesArgs");
const UpdateOneTablesArgs_1 = require("./args/UpdateOneTablesArgs");
const UpsertOneTablesArgs_1 = require("./args/UpsertOneTablesArgs");
const helpers_1 = require("../../../helpers");
const Tables_1 = require("../../../models/Tables");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTables_1 = require("../../outputs/AggregateTables");
const TablesGroupBy_1 = require("../../outputs/TablesGroupBy");
let TablesCrudResolver = class TablesCrudResolver {
    async aggregateTables(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTables(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTables_1.AggregateTables, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTablesArgs_1.AggregateTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "aggregateTables", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tables_1.Tables, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTablesArgs_1.CreateOneTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "createOneTables", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTablesArgs_1.DeleteManyTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "deleteManyTables", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tables_1.Tables, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTablesArgs_1.DeleteOneTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "deleteOneTables", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tables_1.Tables, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTablesArgs_1.FindFirstTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "findFirstTables", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tables_1.Tables], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTablesArgs_1.FindManyTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "findManyTables", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tables_1.Tables, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTablesArgs_1.FindUniqueTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "findUniqueTables", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TablesGroupBy_1.TablesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTablesArgs_1.GroupByTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "groupByTables", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTablesArgs_1.UpdateManyTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "updateManyTables", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tables_1.Tables, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTablesArgs_1.UpdateOneTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "updateOneTables", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tables_1.Tables, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTablesArgs_1.UpsertOneTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TablesCrudResolver.prototype, "upsertOneTables", null);
TablesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], TablesCrudResolver);
exports.TablesCrudResolver = TablesCrudResolver;
