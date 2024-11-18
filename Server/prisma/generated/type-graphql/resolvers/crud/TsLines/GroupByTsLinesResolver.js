"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTsLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTsLinesArgs_1 = require("./args/GroupByTsLinesArgs");
const TsLines_1 = require("../../../models/TsLines");
const TsLinesGroupBy_1 = require("../../outputs/TsLinesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTsLinesResolver = class GroupByTsLinesResolver {
    async groupByTsLines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TsLinesGroupBy_1.TsLinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTsLinesArgs_1.GroupByTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTsLinesResolver.prototype, "groupByTsLines", null);
GroupByTsLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TsLines_1.TsLines)
], GroupByTsLinesResolver);
exports.GroupByTsLinesResolver = GroupByTsLinesResolver;
