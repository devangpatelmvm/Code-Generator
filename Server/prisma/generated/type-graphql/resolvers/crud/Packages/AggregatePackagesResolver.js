"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePackagesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePackagesArgs_1 = require("./args/AggregatePackagesArgs");
const Packages_1 = require("../../../models/Packages");
const AggregatePackages_1 = require("../../outputs/AggregatePackages");
const helpers_1 = require("../../../helpers");
let AggregatePackagesResolver = class AggregatePackagesResolver {
    async aggregatePackages(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePackages_1.AggregatePackages, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePackagesArgs_1.AggregatePackagesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePackagesResolver.prototype, "aggregatePackages", null);
AggregatePackagesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Packages_1.Packages)
], AggregatePackagesResolver);
exports.AggregatePackagesResolver = AggregatePackagesResolver;
