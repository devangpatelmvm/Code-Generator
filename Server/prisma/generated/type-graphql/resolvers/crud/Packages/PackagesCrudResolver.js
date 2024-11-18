"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePackagesArgs_1 = require("./args/AggregatePackagesArgs");
const CreateOnePackagesArgs_1 = require("./args/CreateOnePackagesArgs");
const DeleteManyPackagesArgs_1 = require("./args/DeleteManyPackagesArgs");
const DeleteOnePackagesArgs_1 = require("./args/DeleteOnePackagesArgs");
const FindFirstPackagesArgs_1 = require("./args/FindFirstPackagesArgs");
const FindManyPackagesArgs_1 = require("./args/FindManyPackagesArgs");
const FindUniquePackagesArgs_1 = require("./args/FindUniquePackagesArgs");
const GroupByPackagesArgs_1 = require("./args/GroupByPackagesArgs");
const UpdateManyPackagesArgs_1 = require("./args/UpdateManyPackagesArgs");
const UpdateOnePackagesArgs_1 = require("./args/UpdateOnePackagesArgs");
const UpsertOnePackagesArgs_1 = require("./args/UpsertOnePackagesArgs");
const helpers_1 = require("../../../helpers");
const Packages_1 = require("../../../models/Packages");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePackages_1 = require("../../outputs/AggregatePackages");
const PackagesGroupBy_1 = require("../../outputs/PackagesGroupBy");
let PackagesCrudResolver = class PackagesCrudResolver {
    async aggregatePackages(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOnePackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPackages(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePackages_1.AggregatePackages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePackagesArgs_1.AggregatePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "aggregatePackages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Packages_1.Packages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePackagesArgs_1.CreateOnePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "createOnePackages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPackagesArgs_1.DeleteManyPackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "deleteManyPackages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Packages_1.Packages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePackagesArgs_1.DeleteOnePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "deleteOnePackages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Packages_1.Packages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPackagesArgs_1.FindFirstPackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "findFirstPackages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Packages_1.Packages], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPackagesArgs_1.FindManyPackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "findManyPackages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Packages_1.Packages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePackagesArgs_1.FindUniquePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "findUniquePackages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PackagesGroupBy_1.PackagesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPackagesArgs_1.GroupByPackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "groupByPackages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPackagesArgs_1.UpdateManyPackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "updateManyPackages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Packages_1.Packages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePackagesArgs_1.UpdateOnePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "updateOnePackages", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Packages_1.Packages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePackagesArgs_1.UpsertOnePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesCrudResolver.prototype, "upsertOnePackages", null);
PackagesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Packages_1.Packages)
], PackagesCrudResolver);
exports.PackagesCrudResolver = PackagesCrudResolver;
