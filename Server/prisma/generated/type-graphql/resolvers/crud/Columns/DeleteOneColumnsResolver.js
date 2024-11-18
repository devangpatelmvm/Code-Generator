"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneColumnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneColumnsArgs_1 = require("./args/DeleteOneColumnsArgs");
const Columns_1 = require("../../../models/Columns");
const helpers_1 = require("../../../helpers");
let DeleteOneColumnsResolver = class DeleteOneColumnsResolver {
    async deleteOneColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Columns_1.Columns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneColumnsArgs_1.DeleteOneColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneColumnsResolver.prototype, "deleteOneColumns", null);
DeleteOneColumnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Columns_1.Columns)
], DeleteOneColumnsResolver);
exports.DeleteOneColumnsResolver = DeleteOneColumnsResolver;
