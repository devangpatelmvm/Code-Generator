"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTablesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyTablesArgs_1 = require("./args/DeleteManyTablesArgs");
const Tables_1 = require("../../../models/Tables");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTablesResolver = class DeleteManyTablesResolver {
    async deleteManyTables(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tables.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTablesArgs_1.DeleteManyTablesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTablesResolver.prototype, "deleteManyTables", null);
DeleteManyTablesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tables_1.Tables)
], DeleteManyTablesResolver);
exports.DeleteManyTablesResolver = DeleteManyTablesResolver;
