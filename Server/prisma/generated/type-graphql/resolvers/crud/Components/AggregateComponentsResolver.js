"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateComponentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateComponentsArgs_1 = require("./args/AggregateComponentsArgs");
const Components_1 = require("../../../models/Components");
const AggregateComponents_1 = require("../../outputs/AggregateComponents");
const helpers_1 = require("../../../helpers");
let AggregateComponentsResolver = class AggregateComponentsResolver {
    async aggregateComponents(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).components.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateComponents_1.AggregateComponents, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateComponentsArgs_1.AggregateComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateComponentsResolver.prototype, "aggregateComponents", null);
AggregateComponentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Components_1.Components)
], AggregateComponentsResolver);
exports.AggregateComponentsResolver = AggregateComponentsResolver;
