"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTsLinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTsLinesArgs_1 = require("./args/FindFirstTsLinesArgs");
const TsLines_1 = require("../../../models/TsLines");
const helpers_1 = require("../../../helpers");
let FindFirstTsLinesResolver = class FindFirstTsLinesResolver {
    async findFirstTsLines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tsLines.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTsLinesArgs_1.FindFirstTsLinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTsLinesResolver.prototype, "findFirstTsLines", null);
FindFirstTsLinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TsLines_1.TsLines)
], FindFirstTsLinesResolver);
exports.FindFirstTsLinesResolver = FindFirstTsLinesResolver;
