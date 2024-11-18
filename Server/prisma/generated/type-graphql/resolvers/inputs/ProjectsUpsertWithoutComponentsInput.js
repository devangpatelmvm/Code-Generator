"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsUpsertWithoutComponentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectsCreateWithoutComponentsInput_1 = require("../inputs/ProjectsCreateWithoutComponentsInput");
const ProjectsUpdateWithoutComponentsInput_1 = require("../inputs/ProjectsUpdateWithoutComponentsInput");
let ProjectsUpsertWithoutComponentsInput = class ProjectsUpsertWithoutComponentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsUpdateWithoutComponentsInput_1.ProjectsUpdateWithoutComponentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsUpdateWithoutComponentsInput_1.ProjectsUpdateWithoutComponentsInput)
], ProjectsUpsertWithoutComponentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectsCreateWithoutComponentsInput_1.ProjectsCreateWithoutComponentsInput)
], ProjectsUpsertWithoutComponentsInput.prototype, "create", void 0);
ProjectsUpsertWithoutComponentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectsUpsertWithoutComponentsInput", {
        isAbstract: true
    })
], ProjectsUpsertWithoutComponentsInput);
exports.ProjectsUpsertWithoutComponentsInput = ProjectsUpsertWithoutComponentsInput;
