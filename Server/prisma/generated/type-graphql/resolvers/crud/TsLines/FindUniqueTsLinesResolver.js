"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTsLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTsLinesArgs_1 = require("./args/FindUniqueTsLinesArgs");
const TsLines_1 = require("../../../models/TsLines");
const helpers_1 = require("../../../helpers");
let FindUniqueTsLinesResolver = class FindUniqueTsLinesResolver {
    async findUniqueTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TsLines_1.TsLines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTsLinesArgs_1.FindUniqueTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTsLinesResolver.prototype, "findUniqueTsLines", null);
FindUniqueTsLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TsLines_1.TsLines)
], FindUniqueTsLinesResolver);
exports.FindUniqueTsLinesResolver = FindUniqueTsLinesResolver;
