"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePackagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOnePackagesArgs_1 = require("./args/UpsertOnePackagesArgs");
const Packages_1 = require("../../../models/Packages");
const helpers_1 = require("../../../helpers");
let UpsertOnePackagesResolver = class UpsertOnePackagesResolver {
    async upsertOnePackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Packages_1.Packages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePackagesArgs_1.UpsertOnePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOnePackagesResolver.prototype, "upsertOnePackages", null);
UpsertOnePackagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Packages_1.Packages)
], UpsertOnePackagesResolver);
exports.UpsertOnePackagesResolver = UpsertOnePackagesResolver;
