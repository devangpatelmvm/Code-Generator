"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePackagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniquePackagesArgs_1 = require("./args/FindUniquePackagesArgs");
const Packages_1 = require("../../../models/Packages");
const helpers_1 = require("../../../helpers");
let FindUniquePackagesResolver = class FindUniquePackagesResolver {
    async findUniquePackages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Packages_1.Packages, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePackagesArgs_1.FindUniquePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePackagesResolver.prototype, "findUniquePackages", null);
FindUniquePackagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Packages_1.Packages)
], FindUniquePackagesResolver);
exports.FindUniquePackagesResolver = FindUniquePackagesResolver;
