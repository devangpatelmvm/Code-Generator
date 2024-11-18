"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueHtmlLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueHtmlLinesArgs_1 = require("./args/FindUniqueHtmlLinesArgs");
const HtmlLines_1 = require("../../../models/HtmlLines");
const helpers_1 = require("../../../helpers");
let FindUniqueHtmlLinesResolver = class FindUniqueHtmlLinesResolver {
    async findUniqueHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => HtmlLines_1.HtmlLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueHtmlLinesArgs_1.FindUniqueHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueHtmlLinesResolver.prototype, "findUniqueHtmlLines", null);
FindUniqueHtmlLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => HtmlLines_1.HtmlLines)
], FindUniqueHtmlLinesResolver);
exports.FindUniqueHtmlLinesResolver = FindUniqueHtmlLinesResolver;
