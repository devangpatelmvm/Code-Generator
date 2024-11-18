"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUser_rolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyUser_rolesArgs_1 = require("./args/DeleteManyUser_rolesArgs");
const User_roles_1 = require("../../../models/User_roles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyUser_rolesResolver = class DeleteManyUser_rolesResolver {
    async deleteManyUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteManyUser_rolesResolver.prototype, "deleteManyUser_roles", null);
DeleteManyUser_rolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], DeleteManyUser_rolesResolver);
exports.DeleteManyUser_rolesResolver = DeleteManyUser_rolesResolver;
