"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTablesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTablesArgs_1 = require("./args/GroupByTablesArgs");
const Tables_1 = require("../../../models/Tables");
const TablesGroupBy_1 = require("../../outputs/TablesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTablesResolver = class GroupByTablesResolver {
    async groupByTables(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TablesGroupBy_1.TablesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTablesArgs_1.GroupByTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTablesResolver.prototype, "groupByTables", null);
GroupByTablesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], GroupByTablesResolver);
exports.GroupByTablesResolver = GroupByTablesResolver;
