"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByColumnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByColumnsArgs_1 = require("./args/GroupByColumnsArgs");
const Columns_1 = require("../../../models/Columns");
const ColumnsGroupBy_1 = require("../../outputs/ColumnsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByColumnsResolver = class GroupByColumnsResolver {
    async groupByColumns(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ColumnsGroupBy_1.ColumnsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByColumnsArgs_1.GroupByColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByColumnsResolver.prototype, "groupByColumns", null);
GroupByColumnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Columns_1.Columns)
], GroupByColumnsResolver);
exports.GroupByColumnsResolver = GroupByColumnsResolver;
