"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpsertWithoutPackageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutPackageInput_1 = require("../inputs/ProjectsCreateWithoutPackageInput");
const ProjectsUpdateWithoutPackageInput_1 = require("../inputs/ProjectsUpdateWithoutPackageInput");
let ProjectsUpsertWithoutPackageInput = class ProjectsUpsertWithoutPackageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutPackageInput_1.ProjectsUpdateWithoutPackageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutPackageInput_1.ProjectsUpdateWithoutPackageInput)
], ProjectsUpsertWithoutPackageInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutPackageInput_1.ProjectsCreateWithoutPackageInput)
], ProjectsUpsertWithoutPackageInput.prototype, "create", void 0);
ProjectsUpsertWithoutPackageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpsertWithoutPackageInput", {
        isAbstract: true
    })
], ProjectsUpsertWithoutPackageInput);
exports.ProjectsUpsertWithoutPackageInput = ProjectsUpsertWithoutPackageInput;
