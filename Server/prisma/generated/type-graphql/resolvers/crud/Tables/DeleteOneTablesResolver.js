"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTablesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneTablesArgs_1 = require("./args/DeleteOneTablesArgs");
const Tables_1 = require("../../../models/Tables");
const helpers_1 = require("../../../helpers");
let DeleteOneTablesResolver = class DeleteOneTablesResolver {
    async deleteOneTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tables_1.Tables, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTablesArgs_1.DeleteOneTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTablesResolver.prototype, "deleteOneTables", null);
DeleteOneTablesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], DeleteOneTablesResolver);
exports.DeleteOneTablesResolver = DeleteOneTablesResolver;
