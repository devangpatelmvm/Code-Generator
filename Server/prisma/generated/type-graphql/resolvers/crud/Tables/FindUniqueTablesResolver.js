"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTablesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTablesArgs_1 = require("./args/FindUniqueTablesArgs");
const Tables_1 = require("../../../models/Tables");
const helpers_1 = require("../../../helpers");
let FindUniqueTablesResolver = class FindUniqueTablesResolver {
    async findUniqueTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tables_1.Tables, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTablesArgs_1.FindUniqueTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTablesResolver.prototype, "findUniqueTables", null);
FindUniqueTablesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], FindUniqueTablesResolver);
exports.FindUniqueTablesResolver = FindUniqueTablesResolver;
