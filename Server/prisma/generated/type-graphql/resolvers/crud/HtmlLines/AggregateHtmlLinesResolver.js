"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateHtmlLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateHtmlLinesArgs_1 = require("./args/AggregateHtmlLinesArgs");
const HtmlLines_1 = require("../../../models/HtmlLines");
const AggregateHtmlLines_1 = require("../../outputs/AggregateHtmlLines");
const helpers_1 = require("../../../helpers");
let AggregateHtmlLinesResolver = class AggregateHtmlLinesResolver {
    async aggregateHtmlLines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateHtmlLines_1.AggregateHtmlLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateHtmlLinesArgs_1.AggregateHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateHtmlLinesResolver.prototype, "aggregateHtmlLines", null);
AggregateHtmlLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => HtmlLines_1.HtmlLines)
], AggregateHtmlLinesResolver);
exports.AggregateHtmlLinesResolver = AggregateHtmlLinesResolver;
