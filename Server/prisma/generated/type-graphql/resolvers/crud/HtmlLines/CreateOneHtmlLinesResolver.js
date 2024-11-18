"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneHtmlLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneHtmlLinesArgs_1 = require("./args/CreateOneHtmlLinesArgs");
const HtmlLines_1 = require("../../../models/HtmlLines");
const helpers_1 = require("../../../helpers");
let CreateOneHtmlLinesResolver = class CreateOneHtmlLinesResolver {
    async createOneHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => HtmlLines_1.HtmlLines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneHtmlLinesArgs_1.CreateOneHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneHtmlLinesResolver.prototype, "createOneHtmlLines", null);
CreateOneHtmlLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => HtmlLines_1.HtmlLines)
], CreateOneHtmlLinesResolver);
exports.CreateOneHtmlLinesResolver = CreateOneHtmlLinesResolver;
