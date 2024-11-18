"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpsertWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutTableInput_1 = require("../inputs/ProjectsCreateWithoutTableInput");
const ProjectsUpdateWithoutTableInput_1 = require("../inputs/ProjectsUpdateWithoutTableInput");
let ProjectsUpsertWithoutTableInput = class ProjectsUpsertWithoutTableInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutTableInput_1.ProjectsUpdateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutTableInput_1.ProjectsUpdateWithoutTableInput)
], ProjectsUpsertWithoutTableInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutTableInput_1.ProjectsCreateWithoutTableInput)
], ProjectsUpsertWithoutTableInput.prototype, "create", void 0);
ProjectsUpsertWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpsertWithoutTableInput", {
        isAbstract: true
    })
], ProjectsUpsertWithoutTableInput);
exports.ProjectsUpsertWithoutTableInput = ProjectsUpsertWithoutTableInput;
