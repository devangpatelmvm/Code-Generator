"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCssResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCssArgs_1 = require("./args/FindManyCssArgs");
const Css_1 = require("../../../models/Css");
const helpers_1 = require("../../../helpers");
let FindManyCssResolver = class FindManyCssResolver {
    async csses(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).css.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Css_1.Css], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCssArgs_1.FindManyCssArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCssResolver.prototype, "csses", null);
FindManyCssResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Css_1.Css)
], FindManyCssResolver);
exports.FindManyCssResolver = FindManyCssResolver;
