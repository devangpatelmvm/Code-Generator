"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Projects_1 = require("../../../models/Projects");
const User_roles_1 = require("../../../models/User_roles");
const Users_1 = require("../../../models/Users");
const UsersProjectArgs_1 = require("./args/UsersProjectArgs");
const helpers_1 = require("../../../helpers");
let UsersRelationsResolver = class UsersRelationsResolver {
    async user_roles(users, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findUnique({
            where: {
                id: users.id,
            },
        }).user_roles({});
    }
    async project(users, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findUnique({
            where: {
                id: users.id,
            },
        }).project(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_roles_1.User_roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Users_1.Users, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersRelationsResolver.prototype, "user_roles", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Projects_1.Projects], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Users_1.Users, Object, UsersProjectArgs_1.UsersProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersRelationsResolver.prototype, "project", null);
UsersRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], UsersRelationsResolver);
exports.UsersRelationsResolver = UsersRelationsResolver;
