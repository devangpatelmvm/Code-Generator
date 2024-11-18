"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUser_rolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByUser_rolesArgs_1 = require("./args/GroupByUser_rolesArgs");
const User_roles_1 = require("../../../models/User_roles");
const User_rolesGroupBy_1 = require("../../outputs/User_rolesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUser_rolesResolver = class GroupByUser_rolesResolver {
    async groupByUser_roles(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user_roles.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByUser_rolesResolver.prototype, "groupByUser_roles", null);
GroupByUser_rolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_roles_1.User_roles)
], GroupByUser_rolesResolver);
exports.GroupByUser_rolesResolver = GroupByUser_rolesResolver;
