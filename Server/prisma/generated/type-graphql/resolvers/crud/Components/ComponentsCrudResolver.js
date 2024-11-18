"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateComponentsArgs_1 = require("./args/AggregateComponentsArgs");
const CreateOneComponentsArgs_1 = require("./args/CreateOneComponentsArgs");
const DeleteManyComponentsArgs_1 = require("./args/DeleteManyComponentsArgs");
const DeleteOneComponentsArgs_1 = require("./args/DeleteOneComponentsArgs");
const FindFirstComponentsArgs_1 = require("./args/FindFirstComponentsArgs");
const FindManyComponentsArgs_1 = require("./args/FindManyComponentsArgs");
const FindUniqueComponentsArgs_1 = require("./args/FindUniqueComponentsArgs");
const GroupByComponentsArgs_1 = require("./args/GroupByComponentsArgs");
const UpdateManyComponentsArgs_1 = require("./args/UpdateManyComponentsArgs");
const UpdateOneComponentsArgs_1 = require("./args/UpdateOneComponentsArgs");
const UpsertOneComponentsArgs_1 = require("./args/UpsertOneComponentsArgs");
const helpers_1 = require("../../../helpers");
const Components_1 = require("../../../models/Components");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateComponents_1 = require("../../outputs/AggregateComponents");
const ComponentsGroupBy_1 = require("../../outputs/ComponentsGroupBy");
let ComponentsCrudResolver = class ComponentsCrudResolver {
    async aggregateComponents(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).components.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByComponents(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateComponents_1.AggregateComponents, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateComponentsArgs_1.AggregateComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "aggregateComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Components_1.Components, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneComponentsArgs_1.CreateOneComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "createOneComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyComponentsArgs_1.DeleteManyComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "deleteManyComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Components_1.Components, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneComponentsArgs_1.DeleteOneComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "deleteOneComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Components_1.Components, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstComponentsArgs_1.FindFirstComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "findFirstComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Components_1.Components], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyComponentsArgs_1.FindManyComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "findManyComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Components_1.Components, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueComponentsArgs_1.FindUniqueComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "findUniqueComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ComponentsGroupBy_1.ComponentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByComponentsArgs_1.GroupByComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "groupByComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyComponentsArgs_1.UpdateManyComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "updateManyComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Components_1.Components, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneComponentsArgs_1.UpdateOneComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "updateOneComponents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Components_1.Components, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneComponentsArgs_1.UpsertOneComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ComponentsCrudResolver.prototype, "upsertOneComponents", null);
ComponentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Components_1.Components)
], ComponentsCrudResolver);
exports.ComponentsCrudResolver = ComponentsCrudResolver;
