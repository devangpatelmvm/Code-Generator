"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTablesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTablesArgs_1 = require("./args/AggregateTablesArgs");
const Tables_1 = require("../../../models/Tables");
const AggregateTables_1 = require("../../outputs/AggregateTables");
const helpers_1 = require("../../../helpers");
let AggregateTablesResolver = class AggregateTablesResolver {
    async aggregateTables(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTables_1.AggregateTables, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTablesArgs_1.AggregateTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTablesResolver.prototype, "aggregateTables", null);
AggregateTablesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], AggregateTablesResolver);
exports.AggregateTablesResolver = AggregateTablesResolver;
