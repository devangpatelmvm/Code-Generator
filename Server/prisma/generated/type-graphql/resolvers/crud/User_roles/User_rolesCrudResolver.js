"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUser_rolesArgs_1 = require("./args/AggregateUser_rolesArgs");
const CreateOneUser_rolesArgs_1 = require("./args/CreateOneUser_rolesArgs");
const DeleteManyUser_rolesArgs_1 = require("./args/DeleteManyUser_rolesArgs");
const DeleteOneUser_rolesArgs_1 = require("./args/DeleteOneUser_rolesArgs");
const FindFirstUser_rolesArgs_1 = require("./args/FindFirstUser_rolesArgs");
const FindManyUser_rolesArgs_1 = require("./args/FindManyUser_rolesArgs");
const FindUniqueUser_rolesArgs_1 = require("./args/FindUniqueUser_rolesArgs");
const GroupByUser_rolesArgs_1 = require("./args/GroupByUser_rolesArgs");
const UpdateManyUser_rolesArgs_1 = require("./args/UpdateManyUser_rolesArgs");
const UpdateOneUser_rolesArgs_1 = require("./args/UpdateOneUser_rolesArgs");
const UpsertOneUser_rolesArgs_1 = require("./args/UpsertOneUser_rolesArgs");
const helpers_1 = require("../../../helpers");
const User_roles_1 = require("../../../models/User_roles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUser_roles_1 = require("../../outputs/AggregateUser_roles");
const User_rolesGroupBy_1 = require("../../outputs/User_rolesGroupBy");
let User_rolesCrudResolver = class User_rolesCrudResolver {
    async aggregateUser_roles(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUser_roles(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUser_roles_1.AggregateUser_roles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUser_rolesArgs_1.AggregateUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "aggregateUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_roles_1.User_roles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUser_rolesArgs_1.CreateOneUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "createOneUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUser_rolesArgs_1.DeleteManyUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "deleteManyUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_roles_1.User_roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUser_rolesArgs_1.DeleteOneUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "deleteOneUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_roles_1.User_roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUser_rolesArgs_1.FindFirstUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "findFirstUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [User_roles_1.User_roles], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUser_rolesArgs_1.FindManyUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "findManyUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => User_roles_1.User_roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUser_rolesArgs_1.FindUniqueUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "findUniqueUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [User_rolesGroupBy_1.User_rolesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUser_rolesArgs_1.GroupByUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "groupByUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUser_rolesArgs_1.UpdateManyUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "updateManyUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_roles_1.User_roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUser_rolesArgs_1.UpdateOneUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "updateOneUser_roles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_roles_1.User_roles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUser_rolesArgs_1.UpsertOneUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesCrudResolver.prototype, "upsertOneUser_roles", null);
User_rolesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], User_rolesCrudResolver);
exports.User_rolesCrudResolver = User_rolesCrudResolver;
