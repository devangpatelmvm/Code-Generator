"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueComponentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueComponentsArgs_1 = require("./args/FindUniqueComponentsArgs");
const Components_1 = require("../../../models/Components");
const helpers_1 = require("../../../helpers");
let FindUniqueComponentsResolver = class FindUniqueComponentsResolver {
    async findUniqueComponents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).components.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Components_1.Components, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueComponentsArgs_1.FindUniqueComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueComponentsResolver.prototype, "findUniqueComponents", null);
FindUniqueComponentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Components_1.Components)
], FindUniqueComponentsResolver);
exports.FindUniqueComponentsResolver = FindUniqueComponentsResolver;
