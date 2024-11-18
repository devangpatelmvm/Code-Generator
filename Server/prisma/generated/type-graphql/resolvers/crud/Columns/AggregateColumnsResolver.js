"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateColumnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateColumnsArgs_1 = require("./args/AggregateColumnsArgs");
const Columns_1 = require("../../../models/Columns");
const AggregateColumns_1 = require("../../outputs/AggregateColumns");
const helpers_1 = require("../../../helpers");
let AggregateColumnsResolver = class AggregateColumnsResolver {
    async aggregateColumns(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateColumns_1.AggregateColumns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateColumnsArgs_1.AggregateColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateColumnsResolver.prototype, "aggregateColumns", null);
AggregateColumnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Columns_1.Columns)
], AggregateColumnsResolver);
exports.AggregateColumnsResolver = AggregateColumnsResolver;
