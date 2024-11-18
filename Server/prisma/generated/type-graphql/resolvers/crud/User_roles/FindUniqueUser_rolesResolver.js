"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUser_rolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueUser_rolesArgs_1 = require("./args/FindUniqueUser_rolesArgs");
const User_roles_1 = require("../../../models/User_roles");
const helpers_1 = require("../../../helpers");
let FindUniqueUser_rolesResolver = class FindUniqueUser_rolesResolver {
    async findUniqueUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindUniqueUser_rolesResolver.prototype, "findUniqueUser_roles", null);
FindUniqueUser_rolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], FindUniqueUser_rolesResolver);
exports.FindUniqueUser_rolesResolver = FindUniqueUser_rolesResolver;
