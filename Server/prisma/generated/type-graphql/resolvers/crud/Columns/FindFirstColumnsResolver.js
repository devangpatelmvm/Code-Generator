"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstColumnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstColumnsArgs_1 = require("./args/FindFirstColumnsArgs");
const Columns_1 = require("../../../models/Columns");
const helpers_1 = require("../../../helpers");
let FindFirstColumnsResolver = class FindFirstColumnsResolver {
    async findFirstColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Columns_1.Columns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstColumnsArgs_1.FindFirstColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstColumnsResolver.prototype, "findFirstColumns", null);
FindFirstColumnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Columns_1.Columns)
], FindFirstColumnsResolver);
exports.FindFirstColumnsResolver = FindFirstColumnsResolver;
