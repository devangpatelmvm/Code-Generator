"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsWhereInput_1 = require("../inputs/ProjectsWhereInput");
let ProjectsRelationFilter = class ProjectsRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], ProjectsRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsWhereInput_1.ProjectsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectsWhereInput_1.ProjectsWhereInput)
], ProjectsRelationFilter.prototype, "isNot", void 0);
ProjectsRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsRelationFilter", {
        isAbstract: true
    })
], ProjectsRelationFilter);
exports.ProjectsRelationFilter = ProjectsRelationFilter;
