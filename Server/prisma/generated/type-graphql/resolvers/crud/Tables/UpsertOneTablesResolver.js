"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTablesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneTablesArgs_1 = require("./args/UpsertOneTablesArgs");
const Tables_1 = require("../../../models/Tables");
const helpers_1 = require("../../../helpers");
let UpsertOneTablesResolver = class UpsertOneTablesResolver {
    async upsertOneTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tables_1.Tables, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTablesArgs_1.UpsertOneTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTablesResolver.prototype, "upsertOneTables", null);
UpsertOneTablesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], UpsertOneTablesResolver);
exports.UpsertOneTablesResolver = UpsertOneTablesResolver;
