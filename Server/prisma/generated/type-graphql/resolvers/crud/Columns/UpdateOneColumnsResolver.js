"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneColumnsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneColumnsArgs_1 = require("./args/UpdateOneColumnsArgs");
const Columns_1 = require("../../../models/Columns");
const helpers_1 = require("../../../helpers");
let UpdateOneColumnsResolver = class UpdateOneColumnsResolver {
    async updateOneColumns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).columns.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneColumnsArgs_1.UpdateOneColumnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneColumnsResolver.prototype, "updateOneColumns", null);
UpdateOneColumnsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Columns_1.Columns)
], UpdateOneColumnsResolver);
exports.UpdateOneColumnsResolver = UpdateOneColumnsResolver;
