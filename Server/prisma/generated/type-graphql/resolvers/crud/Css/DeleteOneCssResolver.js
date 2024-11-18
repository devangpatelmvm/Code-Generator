"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCssResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneCssArgs_1 = require("./args/DeleteOneCssArgs");
const Css_1 = require("../../../models/Css");
const helpers_1 = require("../../../helpers");
let DeleteOneCssResolver = class DeleteOneCssResolver {
    async deleteOneCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Css_1.Css, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCssArgs_1.DeleteOneCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCssResolver.prototype, "deleteOneCss", null);
DeleteOneCssResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], DeleteOneCssResolver);
exports.DeleteOneCssResolver = DeleteOneCssResolver;
