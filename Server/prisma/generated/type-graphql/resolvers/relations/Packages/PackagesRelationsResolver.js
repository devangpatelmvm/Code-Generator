"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Packages_1 = require("../../../models/Packages");
const Projects_1 = require("../../../models/Projects");
const helpers_1 = require("../../../helpers");
let PackagesRelationsResolver = class PackagesRelationsResolver {
    async project(packages, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).packages.findUnique({
            where: {
                id: packages.id,
            },
        }).project({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Projects_1.Projects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Packages_1.Packages, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PackagesRelationsResolver.prototype, "project", null);
PackagesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Packages_1.Packages)
], PackagesRelationsResolver);
exports.PackagesRelationsResolver = PackagesRelationsResolver;
