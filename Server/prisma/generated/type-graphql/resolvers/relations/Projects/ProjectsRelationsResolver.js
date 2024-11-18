"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Components_1 = require("../../../models/Components");
const Packages_1 = require("../../../models/Packages");
const Projects_1 = require("../../../models/Projects");
const Tables_1 = require("../../../models/Tables");
const Users_1 = require("../../../models/Users");
const ProjectsComponentsArgs_1 = require("./args/ProjectsComponentsArgs");
const ProjectsPackageArgs_1 = require("./args/ProjectsPackageArgs");
const ProjectsTableArgs_1 = require("./args/ProjectsTableArgs");
const helpers_1 = require("../../../helpers");
let ProjectsRelationsResolver = class ProjectsRelationsResolver {
    async Package(projects, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findUnique({
            where: {
                id: projects.id,
            },
        }).Package(args);
    }
    async table(projects, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findUnique({
            where: {
                id: projects.id,
            },
        }).table(args);
    }
    async user(projects, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findUnique({
            where: {
                id: projects.id,
            },
        }).user({});
    }
    async Components(projects, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findUnique({
            where: {
                id: projects.id,
            },
        }).Components(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Packages_1.Packages], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Projects_1.Projects, Object, ProjectsPackageArgs_1.ProjectsPackageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsRelationsResolver.prototype, "Package", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Tables_1.Tables], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Projects_1.Projects, Object, ProjectsTableArgs_1.ProjectsTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsRelationsResolver.prototype, "table", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Users_1.Users, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Projects_1.Projects, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Components_1.Components], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Projects_1.Projects, Object, ProjectsComponentsArgs_1.ProjectsComponentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsRelationsResolver.prototype, "Components", null);
ProjectsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], ProjectsRelationsResolver);
exports.ProjectsRelationsResolver = ProjectsRelationsResolver;
