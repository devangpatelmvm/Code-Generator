"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyHtmlLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyHtmlLinesArgs_1 = require("./args/UpdateManyHtmlLinesArgs");
const HtmlLines_1 = require("../../../models/HtmlLines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyHtmlLinesResolver = class UpdateManyHtmlLinesResolver {
    async updateManyHtmlLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).htmlLines.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyHtmlLinesArgs_1.UpdateManyHtmlLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyHtmlLinesResolver.prototype, "updateManyHtmlLines", null);
UpdateManyHtmlLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => HtmlLines_1.HtmlLines)
], UpdateManyHtmlLinesResolver);
exports.UpdateManyHtmlLinesResolver = UpdateManyHtmlLinesResolver;
