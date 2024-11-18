"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCount_1 = require("../resolvers/outputs/ProjectsCount");
let Projects = class Projects {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Projects.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Projects.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Projects.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Projects.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Projects.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Projects.prototype, "framework", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Projects.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCount_1.ProjectsCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsCount_1.ProjectsCount)
], Projects.prototype, "_count", void 0);
Projects = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Projects", {
        isAbstract: true
    })
], Projects);
exports.Projects = Projects;
