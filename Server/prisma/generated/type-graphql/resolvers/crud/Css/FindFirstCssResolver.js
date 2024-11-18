"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCssResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstCssArgs_1 = require("./args/FindFirstCssArgs");
const Css_1 = require("../../../models/Css");
const helpers_1 = require("../../../helpers");
let FindFirstCssResolver = class FindFirstCssResolver {
    async findFirstCss(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCssArgs_1.FindFirstCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCssResolver.prototype, "findFirstCss", null);
FindFirstCssResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], FindFirstCssResolver);
exports.FindFirstCssResolver = FindFirstCssResolver;
