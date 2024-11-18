"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUser_rolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneUser_rolesArgs_1 = require("./args/CreateOneUser_rolesArgs");
const User_roles_1 = require("../../../models/User_roles");
const helpers_1 = require("../../../helpers");
let CreateOneUser_rolesResolver = class CreateOneUser_rolesResolver {
    async createOneUser_roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateOneUser_rolesResolver.prototype, "createOneUser_roles", null);
CreateOneUser_rolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], CreateOneUser_rolesResolver);
exports.CreateOneUser_rolesResolver = CreateOneUser_rolesResolver;
