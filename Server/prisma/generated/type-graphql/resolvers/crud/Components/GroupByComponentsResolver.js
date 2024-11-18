"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByComponentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByComponentsArgs_1 = require("./args/GroupByComponentsArgs");
const Components_1 = require("../../../models/Components");
const ComponentsGroupBy_1 = require("../../outputs/ComponentsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByComponentsResolver = class GroupByComponentsResolver {
    async groupByComponents(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ComponentsGroupBy_1.ComponentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByComponentsArgs_1.GroupByComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByComponentsResolver.prototype, "groupByComponents", null);
GroupByComponentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Components_1.Components)
], GroupByComponentsResolver);
exports.GroupByComponentsResolver = GroupByComponentsResolver;
