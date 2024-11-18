"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPackagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByPackagesArgs_1 = require("./args/GroupByPackagesArgs");
const Packages_1 = require("../../../models/Packages");
const PackagesGroupBy_1 = require("../../outputs/PackagesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPackagesResolver = class GroupByPackagesResolver {
    async groupByPackages(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByPackagesResolver.prototype, "groupByPackages", null);
GroupByPackagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Packages_1.Packages)
], GroupByPackagesResolver);
exports.GroupByPackagesResolver = GroupByPackagesResolver;
