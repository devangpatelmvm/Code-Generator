"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTablesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTablesArgs_1 = require("./args/FindFirstTablesArgs");
const Tables_1 = require("../../../models/Tables");
const helpers_1 = require("../../../helpers");
let FindFirstTablesResolver = class FindFirstTablesResolver {
    async findFirstTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTablesArgs_1.FindFirstTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTablesResolver.prototype, "findFirstTables", null);
FindFirstTablesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], FindFirstTablesResolver);
exports.FindFirstTablesResolver = FindFirstTablesResolver;
