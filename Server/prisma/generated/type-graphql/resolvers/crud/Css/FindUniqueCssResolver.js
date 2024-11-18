"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCssResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCssArgs_1 = require("./args/FindUniqueCssArgs");
const Css_1 = require("../../../models/Css");
const helpers_1 = require("../../../helpers");
let FindUniqueCssResolver = class FindUniqueCssResolver {
    async css(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Css_1.Css, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCssArgs_1.FindUniqueCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCssResolver.prototype, "css", null);
FindUniqueCssResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], FindUniqueCssResolver);
exports.FindUniqueCssResolver = FindUniqueCssResolver;
