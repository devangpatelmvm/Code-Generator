"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_roles_1 = require("../../../models/User_roles");
const Users_1 = require("../../../models/Users");
const User_rolesUsersArgs_1 = require("./args/User_rolesUsersArgs");
const helpers_1 = require("../../../helpers");
let User_rolesRelationsResolver = class User_rolesRelationsResolver {
    async users(user_roles, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.findUnique({
            where: {
                id: user_roles.id,
            },
        }).users(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Users_1.Users], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_roles_1.User_roles, Object, User_rolesUsersArgs_1.User_rolesUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], User_rolesRelationsResolver.prototype, "users", null);
User_rolesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], User_rolesRelationsResolver);
exports.User_rolesRelationsResolver = User_rolesRelationsResolver;
