"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPackagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyPackagesArgs_1 = require("./args/UpdateManyPackagesArgs");
const Packages_1 = require("../../../models/Packages");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPackagesResolver = class UpdateManyPackagesResolver {
    async updateManyPackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPackagesArgs_1.UpdateManyPackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyPackagesResolver.prototype, "updateManyPackages", null);
UpdateManyPackagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Packages_1.Packages)
], UpdateManyPackagesResolver);
exports.UpdateManyPackagesResolver = UpdateManyPackagesResolver;
