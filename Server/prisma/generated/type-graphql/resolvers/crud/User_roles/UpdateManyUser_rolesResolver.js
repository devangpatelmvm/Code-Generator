"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUser_rolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyUser_rolesArgs_1 = require("./args/UpdateManyUser_rolesArgs");
const User_roles_1 = require("../../../models/User_roles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyUser_rolesResolver = class UpdateManyUser_rolesResolver {
    async updateManyUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUser_rolesArgs_1.UpdateManyUser_rolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyUser_rolesResolver.prototype, "updateManyUser_roles", null);
UpdateManyUser_rolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], UpdateManyUser_rolesResolver);
exports.UpdateManyUser_rolesResolver = UpdateManyUser_rolesResolver;
