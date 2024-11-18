"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsWhereInput_1 = require("../inputs/ProjectsWhereInput");
let ProjectsListRelationFilter = class ProjectsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], ProjectsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], ProjectsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], ProjectsListRelationFilter.prototype, "none", void 0);
ProjectsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsListRelationFilter", {
        isAbstract: true
    })
], ProjectsListRelationFilter);
exports.ProjectsListRelationFilter = ProjectsListRelationFilter;
