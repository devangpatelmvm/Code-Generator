"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUser_rolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUser_rolesArgs_1 = require("./args/AggregateUser_rolesArgs");
const User_roles_1 = require("../../../models/User_roles");
const AggregateUser_roles_1 = require("../../outputs/AggregateUser_roles");
const helpers_1 = require("../../../helpers");
let AggregateUser_rolesResolver = class AggregateUser_rolesResolver {
    async aggregateUser_roles(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
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
], AggregateUser_rolesResolver.prototype, "aggregateUser_roles", null);
AggregateUser_rolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], AggregateUser_rolesResolver);
exports.AggregateUser_rolesResolver = AggregateUser_rolesResolver;
